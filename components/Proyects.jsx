import React, { useState } from 'react'
import { Card } from './Card'
import { descriptions } from './info/info'
import MoreInfoModal from './modals/MoreInfoModal'
import SectionTitle from './SectionTitle'
import { useTranslation } from '@/i18n/I18nProvider'

const Proyects = () => {
    const { t } = useTranslation()

    const [modal, setModal] = useState(false)
    const [proyectId, setProyectId] = useState()

    // Une los datos fijos con los textos del idioma actual
    const proyects = descriptions.map((p) => ({
        ...p,
        description: t(`projects.items.${p.id}.description`),
        shortDescription: t(`projects.items.${p.id}.shortDescription`),
    }))

    // Se guarda solo el id, así el modal abierto también cambia de idioma
    const proyect = proyects.find((item) => item.id === proyectId)

    const searchProyect = (id) => {
        setProyectId(id)
        setModal(true)
    };

    return (
        <section id='proyects' className='border-y border-slate-200 bg-white dark:border-white/10 dark:bg-night-surface/40'>
            <div className='mx-auto max-w-6xl px-6 py-20'>
                <SectionTitle>{t('projects.title')}</SectionTitle>

                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    {proyects.map((i) => (
                        <Card key={i.id} id={i.id} page={i.page} code={i.code} title={i.title} images={i.images} searchProyect={searchProyect} shortDescription={i.shortDescription} />
                    ))}
                </div>
            </div>

            {modal && proyect && (
                <MoreInfoModal setModal={setModal} modal={modal} proyect={proyect} />
            )}
        </section>
    )
}

export default Proyects
