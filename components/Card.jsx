import Image from 'next/image';
import React from 'react';
import { LuCode2 } from 'react-icons/lu';
import { BiLinkExternal } from 'react-icons/bi';
import { useTranslation } from '@/i18n/I18nProvider';

export const Card = ({ title, page, code, images, shortDescription, id, searchProyect }) => {
    const { t } = useTranslation();
    // La captura de la app móvil es vertical: se muestra completa en vez de recortarla
    const isMobileShot = images === 'safetycommunitymobile';

    return (
        <article className='flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-paper hover:border-brand/50 dark:border-white/10 dark:bg-night dark:hover:border-brand-light/40 transition-colors'>
            <div className='aspect-[16/10] overflow-hidden border-b border-slate-200 bg-brand-mist dark:border-white/10 dark:bg-night-surface'>
                <Image
                    src={`assets/${images}.png`}
                    width={640}
                    height={400}
                    className={`h-full w-full ${isMobileShot ? 'object-contain p-3' : 'object-cover object-top'}`}
                    alt={`${t('projects.imageAlt')}: ${title}`}
                />
            </div>

            <div className='flex flex-1 flex-col p-5'>
                <h3 className='text-lg font-semibold'>{title}</h3>
                <p className='mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300'>{shortDescription}</p>

                <button
                    type='button'
                    onClick={() => searchProyect(id)}
                    className='mt-3 self-start text-sm font-medium text-brand-deep hover:underline dark:text-brand-light'
                >
                    {t('projects.readMore')}
                </button>

                <div className='mt-5 flex gap-5 border-t border-slate-200 pt-4 text-sm font-medium dark:border-white/10'>
                    <a href={code} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-1.5 text-slate-600 hover:text-brand-deep dark:text-slate-300 dark:hover:text-brand-light transition-colors'>
                        <LuCode2 className='h-4 w-4' /> {t('projects.code')}
                    </a>
                    <a href={page} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-1.5 text-slate-600 hover:text-brand-deep dark:text-slate-300 dark:hover:text-brand-light transition-colors'>
                        <BiLinkExternal className='h-4 w-4' /> {t('projects.visit')}
                    </a>
                </div>
            </div>
        </article>
    );
};
