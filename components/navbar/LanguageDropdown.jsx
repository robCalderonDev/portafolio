import React, { useEffect, useRef, useState } from 'react';
import { MdTranslate } from 'react-icons/md';
import { BsCheck2 } from 'react-icons/bs';
import { useTranslation } from '@/i18n/I18nProvider';

// Cada idioma se muestra con su propio nombre, así se reconoce sin importar el idioma activo
const OPTIONS = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' },
];

const LanguageDropdown = ({ className = '' }) => {
    const { t, lang, changeLanguage } = useTranslation();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    // Cierra el menú al hacer clic fuera o al presionar Escape
    useEffect(() => {
        if (!open) return;
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        const handleEscape = (e) => {
            if (e.key === 'Escape') setOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [open]);

    const handleSelect = (code) => {
        changeLanguage(code);
        setOpen(false);
    };

    return (
        <div ref={ref} className='relative'>
            <button
                type='button'
                onClick={() => setOpen(!open)}
                title={t('navbar.language')}
                aria-label={t('navbar.language')}
                aria-haspopup='menu'
                aria-expanded={open}
                className={className}
            >
                <MdTranslate className='h-5 w-5' />
            </button>

            {open && (
                <ul
                    role='menu'
                    className='absolute left-0 lg:left-auto lg:right-0 top-full mt-2 w-40 z-50 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 text-sm shadow-lg dark:border-white/10 dark:bg-night-surface'
                >
                    {OPTIONS.map(({ code, label }) => (
                        <li key={code} role='none'>
                            <button
                                type='button'
                                role='menuitemradio'
                                aria-checked={lang === code}
                                onClick={() => handleSelect(code)}
                                className={`flex w-full items-center justify-between px-4 py-2.5 text-left hover:bg-slate-100 dark:hover:bg-white/5 ${lang === code ? 'font-semibold text-brand-deep dark:text-brand-light' : 'text-slate-700 dark:text-slate-200'}`}
                            >
                                {label}
                                {lang === code && <BsCheck2 className='h-4 w-4' />}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageDropdown;
