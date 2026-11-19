import Image from 'next/image'
import React from 'react'
import { useTranslation } from '@/i18n/I18nProvider'

// Pinta en color lo que en el diccionario va entre <hl> y </hl>.
// Ej: "Soy <hl>Software Developer</hl> en Chile"
const highlight = (text) =>
    String(text).split(/<hl>(.*?)<\/hl>/g).map((part, i) =>
        i % 2 === 1
            ? <span key={i} className='font-medium text-brand-deep dark:text-brand-light'>{part}</span>
            : <React.Fragment key={i}>{part}</React.Fragment>
    )

const Header = () => {
    const { t } = useTranslation()
    return (
        <section id='aboutMe' className='mx-auto grid max-w-6xl items-center gap-14 px-6 pt-28 pb-12 lg:grid-cols-[1.35fr_1fr] lg:pt-40 lg:pb-16'>

            <div className='order-2 lg:order-1'>
                <p className='text-lg text-slate-500 dark:text-slate-400'>{t('header.greeting')}</p>
                <h1 className='mt-1 text-5xl font-semibold tracking-tight md:text-6xl'>Robert Calderón</h1>
                <p className='mt-3 font-display text-xl text-brand-deep dark:text-brand-light md:text-2xl'>{t('header.role')}</p>

                <div className='mt-8 max-w-[62ch] space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300'>
                    <p>{highlight(t('header.p1'))}</p>
                    <p>{highlight(t('header.p2'))}</p>
                </div>

                <div className='mt-10 flex flex-wrap gap-3'>
                    <a href='#proyects' className='inline-flex h-11 items-center rounded-full bg-brand-deep px-6 font-medium text-white hover:bg-brand transition-colors'>
                        {t('header.ctaProjects')}
                    </a>
                    <a href='#contact' className='inline-flex h-11 items-center rounded-full border border-slate-300 px-6 font-medium hover:border-brand hover:text-brand-deep dark:border-white/20 dark:hover:border-brand-light dark:hover:text-brand-light transition-colors'>
                        {t('header.ctaContact')}
                    </a>
                </div>
            </div>

            {/* Foto: disco turquesa suave detrás y la foto recortada en círculo */}
            <div className='order-1 flex justify-center lg:order-2 lg:justify-end'>
                <div className='relative w-56 sm:w-64 lg:w-80'>
                    <div className='absolute inset-0 translate-x-4 translate-y-4 rounded-full bg-brand/20 dark:bg-brand/25' aria-hidden='true' />
                    {/* La foto se acerca un poco y se corre a la izquierda para que quede centrada */}
                    <div className='relative aspect-square overflow-hidden rounded-full ring-4 ring-paper dark:ring-night'>
                        <Image
                            src="assets/robformal.jpg"
                            width={500}
                            height={500}
                            priority
                            className="h-full w-full object-cover scale-[1.15] -translate-x-[6%]"
                            alt={t('header.imageAlt')}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
