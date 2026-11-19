import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Options from './Options';
import { useTranslation } from '@/i18n/I18nProvider';

const Navbar = () => {
    const { t } = useTranslation();
    const [theme, setTheme] = useState('light');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark');
        }
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <header className='fixed top-0 inset-x-0 z-50 border-b border-slate-200/70 bg-paper/80 backdrop-blur-md dark:border-white/10 dark:bg-night/80'>
            <nav className='relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6'>
                <a href='#aboutMe' className='font-display text-lg font-semibold tracking-tight'>
                    {t('navbar.title')}
                </a>

                <button
                    type='button'
                    className='lg:hidden grid h-10 w-10 place-items-center rounded-full hover:bg-slate-200/60 dark:hover:bg-white/10'
                    aria-label={t('navbar.openMenu')}
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    {open ? <AiOutlineClose className='h-6 w-6' /> : <AiOutlineMenu className='h-6 w-6' />}
                </button>

                <Options
                    handleChangeTheme={handleChangeTheme}
                    open={open}
                    theme={theme}
                    onNavigate={() => setOpen(false)}
                />
            </nav>
        </header>
    );
};

export default Navbar;
