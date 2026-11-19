import React from 'react';
import { BiSolidMoon } from 'react-icons/bi';
import { BsFillSunFill } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { useTranslation } from '@/i18n/I18nProvider';
import LanguageDropdown from './LanguageDropdown';

const LINKS = [
    { id: 'aboutMe', key: 'navbar.aboutMe' },
    { id: 'proyects', key: 'navbar.projects' },
    { id: 'contact', key: 'navbar.contact' },
];

const iconButton = 'grid h-10 w-10 place-items-center rounded-full text-slate-600 hover:bg-slate-200/60 hover:text-ink dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white transition';

const Options = ({ handleChangeTheme, open, theme, onNavigate }) => {
    const { t } = useTranslation()

    return (
        // En móvil es un panel bajo el navbar; en escritorio, una fila a la derecha
        <div className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-16 flex-col gap-6 border-b border-slate-200/70 bg-paper px-6 py-6 dark:border-white/10 dark:bg-night
            lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 dark:lg:bg-transparent`}>

            <ul className='flex flex-col gap-4 lg:flex-row lg:gap-8'>
                {LINKS.map(({ id, key }) => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            onClick={onNavigate}
                            className='text-base font-medium text-slate-600 hover:text-brand-deep dark:text-slate-300 dark:hover:text-brand-light lg:text-sm transition-colors'
                        >
                            {t(key)}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='flex items-center gap-2'>
                {/* Descarga el CV del idioma activo (rutas en i18n/locales/*.json → navbar.cvFile) */}
                <a
                    href={t('navbar.cvFile')}
                    download={t('navbar.cvDownloadName')}
                    title={t('navbar.cvDownload')}
                    aria-label={t('navbar.cvDownload')}
                    className='mr-2 inline-flex h-10 items-center gap-2 rounded-full border border-brand/50 px-4 text-sm font-medium text-brand-deep hover:bg-brand/10 dark:border-brand-light/40 dark:text-brand-light dark:hover:bg-brand-light/10 transition-colors'
                >
                    {t('navbar.cv')}
                    <CgFileDocument className='h-5 w-5' />
                </a>

                {/* Selector de idioma: ícono que despliega Español / English */}
                <LanguageDropdown className={iconButton} />

                <button type='button' onClick={handleChangeTheme} aria-label={t('navbar.toggleTheme')} title={t('navbar.toggleTheme')} className={iconButton}>
                    {theme === 'dark'
                        ? <BsFillSunFill className='h-5 w-5' />
                        : <BiSolidMoon className='h-5 w-5' />}
                </button>
            </div>
        </div>
    );
};

export default Options;
