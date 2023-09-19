import React, { useState } from 'react';
import Image from 'next/image'; // Importa la imagen de Next.js
import { BsFillSunFill } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { CgFileDocument } from 'react-icons/cg'
import Link from 'next/link';

const Navbar = () => {

    const [open, setOpen] = useState(false)
    return (
        <div className='bg-[#3B94A8]  flex items-center justify-between  max-w-full  text-white font-medium text-xl py-auto px-[8%] flex-wrap w-full'>
            <div className='py-1  flex  min-w-fit'>

                <Image
                    src="assets/robert.png"
                    className='mr-10'
                    width={70}
                    height={100}
                    layout="fixed"
                    alt='Robert Image'
                />


                <div className='text-md'>
                    <h1 className=''>Robert </h1>
                    <h1 className=''>Calderon</h1>
                </div>

            </div>

            <AiOutlineMenu className='lg:hidden block h-7 w-7   ' onClick={() => setOpen(!open)} />
            <div className={`${open ? 'block ' : 'hidden'} w-full lg:flex lg:items-center  lg:w-auto mr-10    `}>


                <ul className='lg:flex  lg:justify-between '>
                    <Link href="#aboutMe"> <l1 className='lg:mr-10 block my-2 hover:text-cyan-200'>About Me</l1></Link>
                    <Link href="#proyects"><l1 className='lg:mr-10 block my-2 hover:text-cyan-200'>Proyects</l1></Link>
                    <Link href="#contact"> <l1 className='lg:mr-10 block my-2 hover:text-cyan-200'>Contact</l1></Link>
                </ul>



                <button className='  min-w-fit  border-solid border border-white rounded flex  py-1 h-10 px-3  my-2 '>
                    <h1 className='text-sm my-1 pr-4  '>CV</h1>

                    <CgFileDocument className='w-6 h-6' />
                </button>
                <div className=' mx-6 lg:mt-2 lg:block my-2'>
                    <BsFillSunFill className='h-6 w-6' />

                </div>
            </div>





        </div >
    )
}

export default Navbar;
