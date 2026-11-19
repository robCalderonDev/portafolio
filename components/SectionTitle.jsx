import React from 'react'

// Título de sección: alineado a la izquierda, con una línea corta en el color de acento
const SectionTitle = ({ children, id }) => (
    <div className='mb-10'>
        <h2 id={id} className='text-3xl md:text-4xl font-semibold tracking-tight'>{children}</h2>
        <span className='mt-3 block h-1 w-10 rounded-full bg-brand' aria-hidden='true' />
    </div>
)

export default SectionTitle
