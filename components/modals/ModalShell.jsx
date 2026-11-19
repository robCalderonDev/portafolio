import React, { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useTranslation } from '@/i18n/I18nProvider';

// Base común de los modales: fondo oscuro, cierra con Escape, clic fuera o la X
const ModalShell = ({ onClose, labelledBy, children }) => {
    const { t } = useTranslation();

    useEffect(() => {
        const handleEscape = (e) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    return (
        <div
            className='fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm'
            onClick={onClose}
        >
            <div
                role='dialog'
                aria-modal='true'
                aria-labelledby={labelledBy}
                onClick={(e) => e.stopPropagation()}
                className='relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-8 text-ink shadow-xl dark:bg-night-surface dark:text-slate-200'
            >
                <button
                    type='button'
                    onClick={onClose}
                    aria-label={t('common.close')}
                    className='absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-ink dark:hover:bg-white/10 dark:hover:text-white'
                >
                    <AiOutlineClose className='h-5 w-5' />
                </button>
                {children}
                <button
                    type='button'
                    onClick={onClose}
                    className='mt-8 inline-flex h-11 items-center rounded-full bg-brand-deep px-6 font-medium text-white hover:bg-brand transition-colors'
                >
                    {t('common.close')}
                </button>
            </div>
        </div>
    );
};

export default ModalShell;
