import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { LuCode2 } from 'react-icons/lu';
import { BiLinkExternal } from 'react-icons/bi';
import MoreInfoModal from './modals/moreInfoModal';

export const Card = ({ title, content, page, code, images, description, shortDescription, id, searchProyect }) => {

    const [modal, setModal] = useState(false)

    return (
        <div className='lg:w-1/5 w-2/3 mt-10 bg-[#F5F5F5] dark:bg-cyan-950 rounded-xl drop-shadow-md'>
            <div className='flex justify-center'>
                <div className='rounded-t-xl overflow-hidden'>
                    {images === 'safetycommunitymobile' ?
                        <Image
                            src={`assets/${images}.png`}
                            width={90}
                            height={20}
                            alt="Proyect Image"
                        /> : <Image
                            src={`assets/${images}.png`}
                            width={20}
                            height={20}
                            layout='responsive'
                            alt="Proyect Image"
                        />}
                </div>
            </div>
            <div className='w-full font-semibold dark:font-normal h-full'>
                <h1 className='text-center text-2xl mt-5 font-semibold'>{title}</h1>
                <div className='w-3/4 mx-auto dark:mt-5 '>
                    <p className='text-center'>{shortDescription} </p>
                    <div className='flex items-center justify-center'>
                        <button className='' onClick={() => searchProyect(id)}>
                            <p className='text-center text-sm hover:text-gray-600'>Leer Mas...</p>
                        </button>
                    </div>



                </div>
                <div className='flex justify-evenly gap-x-10 mb-4 pt-2'>
                    <Link href={code} target='blank'>
                        <button className='bg-[#225166] flex justify-center 2xl:pt-3 pt-3 lg:pt-3 text-white rounded 2xl:w-20 lg:w-20 w-16 h-12 font-light text-sm lg:text-base hover:bg-[#367C9B] hover:drop-shadow-md hover:-translate-y-1 transition duration-150'>
                            <LuCode2 className='mt-1' />
                        </button>
                    </Link>
                    <Link href={page} target='_blank'>
                        <button className='bg-[#225166] flex justify-evenly pt-3 text-white rounded 2xl:w-20 lg:w-20 w-16 h-12 font-light text-sm lg:text-base hover:bg-[#367C9B] hover:drop-shadow-md hover:-translate-y-1 transition duration-150'>
                            <BiLinkExternal className='text-xl mt-0.5' />
                        </button>
                    </Link>
                </div>
            </div>

        </div>


    );
};
