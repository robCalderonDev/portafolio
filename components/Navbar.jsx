import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Importa la imagen de Next.js
import { BsFillSunFill } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { CgFileDocument } from 'react-icons/cg'
import { BiSolidMoon } from 'react-icons/bi'
import Link from 'next/link';

const Navbar = () => {
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-[#376F9B] lg:h-20 dark:bg-cyan-950  flex items-center justify-between  max-w-full  text-white font-medium text-xl py-auto px-[8%] flex-wrap w-full'>
            <div className='py-1  flex  min-w-fit'>

                <Image
                    src="assets/robert.png"
                    className='mr-10'
                    width={60}
                    height={100}
                    layout="fixed"
                    alt='Robert Image'
                />


                <div className='text-md pt-5'>
                    <h1 className=''>Robert Calderon </h1>

                </div>

            </div>

            <AiOutlineMenu className='lg:hidden block h-7 w-7    ' onClick={() => setOpen(!open)} />
            <div className={`${open ? 'block ' : 'hidden'} w-full lg:flex lg:items-center  lg:w-auto   `}>


                <ul className='lg:flex lg:justify-between lg:w-full w-2/6 '>
                    <div className=' lg:mr-10'>
                        <Link href="#aboutMe" className='group transition duration-100 '><l1 className='block my-2 ease-in duration-500  '>About Me </l1>
                            <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5  bg-slate-100'></span>
                        </Link>
                    </div>
                    <div className=' lg:mr-10'>
                        <Link href="#proyects" className='group transition duration-100 '><l1 className='block my-2 ease-in duration-500  '>Proyects </l1>
                            <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-slate-100'></span>
                        </Link>
                    </div>
                    <div className=' lg:mr-10'>
                        <Link href="#contact" className='group transition duration-100 '><l1 className='block my-2 ease-in duration-500  '>Contact </l1>
                            <span className='block  max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5  bg-slate-100'></span>
                        </Link>
                    </div>

                </ul>

                <div className='flex '>
                    <Link href='https://robcalderondev.github.io/portafolio/assets/RobertCalderonCV.pdf' target='_blank'>  <button className='   min-w-fit  border-solid border border-white rounded flex  py-1 h-10 px-3  my-2 hover:-translate-y-0.5 transition duration-150 '>
                        <h1 className='text-sm my-1 pr-4  '>CV</h1>

                        <CgFileDocument className='w-6 h-6 hover:text-cyan-950 dark:text-white dark:hover:text-slate-300' />
                    </button></Link>

                    <button onClick={handleChangeTheme} className=' mx-6 lg:mt-2 lg:block my-2'>
                        {theme === 'light' ? <BsFillSunFill className='h-6 w-6 hover:-translate-y-0.5 transition duration-150' />
                            : <BiSolidMoon className='h-6 w-6 hover:-translate-y-0.5 transition duration-150' />}

                    </button>
                </div>


            </div>





        </div >
    )
}

export default Navbar;