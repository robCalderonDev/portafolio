import Image from 'next/image'
import React from 'react'
import { useTranslation } from '@/i18n/I18nProvider'
import SectionTitle from './SectionTitle'

const SKILLS = [
    { img: 'html', name: 'HTML' },
    { img: 'css', name: 'CSS' },
    { img: 'react', name: 'React' },
    { img: 'next', name: 'Next.js' },
    { img: 'pyton', name: 'Python' },
    { img: 'github', name: 'GitHub' },
    { img: 'java', name: 'Java' },
    { img: 'tailwind', name: 'Tailwind' },
]

const Content = () => {
    const { t } = useTranslation()
    return (
        <section className='mx-auto max-w-6xl px-6 py-16'>
            <SectionTitle>{t('skills.title')}</SectionTitle>

            <ul className='grid grid-cols-4 gap-3 sm:gap-4 lg:grid-cols-8'>
                {SKILLS.map(({ img, name }) => (
                    <li key={name} className='flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white px-2 py-4 dark:border-white/10 dark:bg-night-surface sm:gap-3 sm:p-5'>
                        {/* fondo blanco fijo para que los logos oscuros (Next, GitHub) se vean en modo oscuro */}
                        <span className='grid h-11 w-11 place-items-center rounded-xl bg-white p-1.5 sm:h-14 sm:w-14 sm:p-2'>
                            <Image src={`assets/${img}.png`} width={48} height={48} className='h-full w-full object-contain' alt='' />
                        </span>
                        <span className='text-xs font-medium text-slate-600 dark:text-slate-300 sm:text-sm'>{name}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Content
