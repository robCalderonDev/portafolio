import React, { useEffect, useState } from 'react'
import { BiUpArrowAlt } from 'react-icons/bi'
import { useTranslation } from '@/i18n/I18nProvider'

const BackTopButton = () => {
    const { t } = useTranslation()
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 1500)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    if (!visible) return null

    return (
        <button
            type='button'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label={t('common.backToTop')}
            title={t('common.backToTop')}
            className='fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-brand-deep text-white shadow-lg hover:bg-brand transition-colors'
        >
            <BiUpArrowAlt className='h-7 w-7' />
        </button>
    )
}

export default BackTopButton
