import React from 'react';
import { BsCheck2All } from 'react-icons/bs';
import ModalShell from './ModalShell';
import { useTranslation } from '@/i18n/I18nProvider';

// Confirmación después de enviar el formulario de contacto
const Modal = ({ setModal }) => {
    const { t } = useTranslation();
    return (
        <ModalShell onClose={() => setModal(false)} labelledBy='thanks-modal-title'>
            <div className='flex items-center gap-4'>
                <span className='grid h-12 w-12 place-items-center rounded-full bg-brand-mist text-brand-deep'>
                    <BsCheck2All className='h-6 w-6' />
                </span>
                <h2 id='thanks-modal-title' className='text-2xl font-semibold tracking-tight'>{t('contact.thanksTitle')}</h2>
            </div>
            <p className='mt-4 text-slate-600 dark:text-slate-300'>{t('contact.thanksMessage')}</p>
        </ModalShell>
    );
};

export default Modal;
