import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <>
            <div className='grid justify-items-center  pt-5'>

                <Image
                    src="/assets/robert.png"

                    width={160}
                    height={160}
                    layout="fixed"
                    alt='Robert Image'
                />
                <h1 className='text-3xl font-semibold '>Robert Calderon</h1>
                <hr className="w-44 h-px my-1 bg-[#3B94A8]  border-0 " />
                <h1 className='text-[#3B94A8] text-xl'>Desarrollador web</h1>
                <div className='w-2/4 text-xl mt-10'>
                    <p className=' mb-10'>Soy un apasionado <span className='text-[#3B94A8] '>desarrollador front-end </span> con una profunda pasión por la <span className='text-[#3B94A8]'>tecnología</span>  y la programación. Actualmente, me encuentro en mi último año de estudios de Ingeniería en Informática, y a mis 22 años, vivo en Chile. Mi enfoque principal se centra en el desarrollo web y las tecnologías en la nube, dos áreas en constante evolución que me inspiran a aprender y crecer continuamente.

                    </p>
                    <p >Lo que realmente me destaca es mi fuerte compromiso con el <span className='text-[#3B94A8] '>trabajo en equipo </span>. Creo firmemente en la colaboración como una clave para el éxito en cualquier proyecto. Mi mentalidad abierta y mi disposición para enfrentar nuevos desafíos me impulsan a buscar siempre oportunidades para aprender y mejorar.</p>

                </div>
            </div>
        </>
    )
}

export default Header