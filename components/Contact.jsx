import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Modal from './modals/Modal';
import SectionTitle from './SectionTitle';
import { useTranslation } from '@/i18n/I18nProvider';

const inputClass = 'w-full rounded-xl border border-slate-300 bg-white px-4 text-ink placeholder:text-slate-400 outline-none focus:border-brand focus:ring-2 focus:ring-brand/25 dark:border-white/15 dark:bg-night dark:text-white transition';

const Contact = () => {
    const { t } = useTranslation()
    const form = useRef()
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')
    const [sending, setSending] = useState(false)
    const [error, setError] = useState(false)

    const [modal, setModal] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true)
        setError(false)

        emailjs.sendForm('service_4n8a19v', 'template_7a1xm6n', form.current, 'Uzz0w0nJCdScAgzga')
            .then(() => {
                setModal(true)
                setName('');
                setMail('');
                setMessage('');
            })
            .catch((err) => {
                console.log('Error:', err);
                setError(true)
            })
            .finally(() => setSending(false));
    };

    return (
        <section id='contact' className='mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.4fr]'>
            <div>
                <SectionTitle>{t('contact.title')}</SectionTitle>
                <p className='max-w-sm text-lg leading-relaxed text-slate-600 dark:text-slate-300'>{t('contact.subtitle')}</p>
            </div>

            <form ref={form} onSubmit={sendEmail} className='space-y-5 rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-night-surface md:p-8'>
                <div className='grid gap-5 sm:grid-cols-2'>
                    <label className='block'>
                        <span className='mb-1.5 block text-sm font-medium'>{t('contact.name')}</span>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className={`${inputClass} h-11`}
                            required
                            type='text'
                            name='user_name'
                            autoComplete='name'
                        />
                    </label>
                    <label className='block'>
                        <span className='mb-1.5 block text-sm font-medium'>{t('contact.email')}</span>
                        <input
                            onChange={(e) => setMail(e.target.value)}
                            value={mail}
                            className={`${inputClass} h-11`}
                            required
                            type='email'
                            name='user_mail'
                            autoComplete='email'
                        />
                    </label>
                </div>

                <label className='block'>
                    <span className='mb-1.5 block text-sm font-medium'>{t('contact.message')}</span>
                    <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        id='message'
                        name='message'
                        required
                        rows={6}
                        className={`${inputClass} resize-y py-3`}
                    />
                </label>

                {error && (
                    <p role='alert' className='text-sm text-red-600 dark:text-red-400'>{t('contact.error')}</p>
                )}

                <button
                    type='submit'
                    disabled={sending}
                    className='inline-flex h-11 items-center rounded-full bg-brand-deep px-8 font-medium text-white hover:bg-brand disabled:cursor-wait disabled:opacity-70 transition-colors'
                >
                    {sending ? t('contact.sending') : t('contact.send')}
                </button>
            </form>

            {modal && <Modal setModal={setModal} />}
        </section>
    )
}

export default Contact
