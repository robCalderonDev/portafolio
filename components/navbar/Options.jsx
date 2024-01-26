import Link from 'next/link';
import React, { useState } from 'react';
import { BiSolidMoon } from 'react-icons/bi';
import { BsFillSunFill } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';

const Options = ({ handleChangeTheme, open, }) => {
    const [theme, settheme] = useState('DARK')
    console.log(theme)
    return (
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
    );
};

export default Options;
