import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import en from './locales/en.json'
import es from './locales/es.json'

// Diccionarios disponibles. Para agregar un idioma: crea locales/xx.json y súmalo aquí.
export const dictionaries = { en, es }
export const LANGUAGES = Object.keys(dictionaries)
export const DEFAULT_LANGUAGE = 'en'
const STORAGE_KEY = 'lang'

const I18nContext = createContext(null)

// Lee una clave con puntos, por ejemplo "navbar.aboutMe" o "projects.items.1.description"
const getValue = (obj, path) =>
    path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj)

export const I18nProvider = ({ children }) => {
    // Se parte siempre en el idioma por defecto para que el HTML estático
    // (next export / GitHub Pages) coincida con el primer render del cliente.
    const [lang, setLang] = useState(DEFAULT_LANGUAGE)

    // Al cargar: idioma guardado, si no, el idioma del navegador.
    useEffect(() => {
        let initial = null
        try {
            initial = localStorage.getItem(STORAGE_KEY)
        } catch (e) { }
        if (!LANGUAGES.includes(initial)) {
            const browser = (navigator.language || '').toLowerCase().slice(0, 2)
            initial = LANGUAGES.includes(browser) ? browser : DEFAULT_LANGUAGE
        }
        setLang(initial)
    }, [])

    // Mantiene <html lang="..."> sincronizado (accesibilidad y SEO).
    useEffect(() => {
        document.documentElement.lang = lang
    }, [lang])

    const changeLanguage = useCallback((next) => {
        if (!LANGUAGES.includes(next)) return
        setLang(next)
        try {
            localStorage.setItem(STORAGE_KEY, next)
        } catch (e) { }
    }, [])

    const toggleLanguage = useCallback(() => {
        changeLanguage(lang === 'en' ? 'es' : 'en')
    }, [lang, changeLanguage])

    // t('clave'): busca en el idioma actual, si falta usa el idioma por defecto
    // y, si tampoco existe, devuelve la clave para que se note en pantalla.
    const t = useCallback(
        (key) => {
            const value = getValue(dictionaries[lang], key)
            if (value !== undefined) return value
            const fallback = getValue(dictionaries[DEFAULT_LANGUAGE], key)
            return fallback !== undefined ? fallback : key
        },
        [lang]
    )

    const value = useMemo(
        () => ({ lang, t, changeLanguage, toggleLanguage }),
        [lang, t, changeLanguage, toggleLanguage]
    )

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useTranslation = () => {
    const ctx = useContext(I18nContext)
    if (!ctx) throw new Error('useTranslation debe usarse dentro de <I18nProvider>')
    return ctx
}
