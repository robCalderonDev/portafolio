import React from 'react'
import { useTranslation } from '@/i18n/I18nProvider'
import SectionTitle from './SectionTitle'

// De lo más reciente a lo más antiguo
const STUDIES = [
    { key: 'duoc', years: '2020 – 2024' },
    { key: 'cumbre', years: '2017 – 2018' },
]

const Education = () => {
    const { t } = useTranslation()
    return (
        <div>
            <SectionTitle>{t('education.title')}</SectionTitle>

            {/* Línea de tiempo */}
            <ol className='relative space-y-10 border-l-2 border-brand/25 pl-8'>
                {STUDIES.map(({ key, years }) => (
                    <li key={key} className='relative'>
                        <span className='absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-brand bg-paper dark:bg-night' aria-hidden='true' />
                        <p className='text-sm text-slate-500 dark:text-slate-400'>{years}</p>
                        <h3 className='mt-1 text-xl font-semibold'>{t(`education.${key}.degree`)}</h3>
                        <p className='mt-1 text-slate-600 dark:text-slate-300'>{t(`education.${key}.school`)}</p>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Education
