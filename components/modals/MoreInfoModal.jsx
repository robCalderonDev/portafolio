import React from 'react';
import ModalShell from './ModalShell';

const MoreInfoModal = ({ setModal, proyect }) => (
    <ModalShell onClose={() => setModal(false)} labelledBy='project-modal-title'>
        <h2 id='project-modal-title' className='pr-10 text-2xl font-semibold tracking-tight'>{proyect.title}</h2>
        <p className='mt-4 leading-relaxed text-slate-600 dark:text-slate-300'>{proyect.description}</p>
    </ModalShell>
);

export default MoreInfoModal;
