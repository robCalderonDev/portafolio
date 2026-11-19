import Image from 'next/image'
import React from 'react'
import { useTranslation } from '@/i18n/I18nProvider'
import SectionTitle from './SectionTitle'

const SOFT_SKILLS = [
    { img: 'team', key: 'softSkills.teamwork' },
    { img: 'communication', key: 'softSkills.communication' },
    { img: 'adaptability', key: 'softSkills.adaptability' },
]

const Soft = () => {
    const { t } = useTranslation()
    return (
        <div>
            <SectionTitle>{t('softSkills.title')}</SectionTitle>

            <ul className='space-y-4'>
                {SOFT_SKILLS.map(({ img, key }) => (
                    <li key={key} className='flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-night-surface'>
                        <span className='grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-mist p-2'>
                            <Image src={`assets/${img}.png`} width={40} height={40} className='h-full w-full object-contain' alt='' />
                        </span>
                        <span className='text-lg font-medium'>{t(key)}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Soft
