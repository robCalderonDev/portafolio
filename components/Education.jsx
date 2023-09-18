import React from 'react'

const Education = () => {
    return (
        <div className='bg-[#3382A5] h-full'>
            <h1 className='text-white text-3xl text-center pt-5'>My Education</h1>
            <h1 className='text-white text-lg text-center pt-2'>What I study?</h1>
            <div className='flex flex-wrap justify-center pb-10 mt-4 gap-10'>
                <div className='bg-[#1C1C1C] w-80 h-48  rounded flex flex-col justify-center  text-center hover:-translate-y-2 transition duration-150'>
                    <h1 className='text-white text-2xl px-10 mb-10'>Instituto Profesional Duoc UC</h1>
                    <h1 className='text-[#3382A5] text-xl font-semibold'>Ingenieria en informatica</h1>
                </div>
                <div className='bg-[#1C1C1C] w-80 h-48  rounded flex flex-col justify-center items-center text-center hover:-translate-y-2 transition duration-150'>
                    <h1 className='text-white text-2xl px-10 mb-8 '>Instituto Cumbre de Condores</h1>
                    <h1 className='text-[#3382A5] text-xl font-semibold'>Tecnico nivel medio en telecomunicaciones</h1>
                </div>
            </div>



        </div>
    )
}

export default Education