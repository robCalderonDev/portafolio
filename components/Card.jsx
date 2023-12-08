import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuCode2 } from 'react-icons/lu'
import { BiLinkExternal } from 'react-icons/bi'
export const Card = ({ title, content, page, code, images, description }) => {
    return (

        <div className='mt-10 flex flex-wrap w-5/6 xl:h-full bg-[#F5F5F5] dark:bg-cyan-950 rounded-xl mx-auto drop-shadow-md'>
            <div className='lg:w-1/2 w-full  h-full flex justify-center items-center'>
                {images === 'safetycommunitymobile' ?
                    <div className=' w-32 pb-10  mt-10 '>  <Image
                        src={`assets/${images}.png`}
                        width={130}
                        height={20}

                        alt="Proyect Image"
                    />

                    </div> : <div className=' lg:w-3/5  mt-10 mx-auto flex justify-center pb-10   '>  <Image
                        src={`assets/${images}.png`}
                        width={20}
                        height={20}
                        layout='responsive'
                        alt="Proyect Image"
                    />

                    </div>}

            </div>
            <div className=' lg:w-1/2 w-full font-semibold dark:font-normal h-full'>
                <h1 className='text-center text-xl  mt-5'> {title}</h1>
                <div className=' w-3/4 mx-auto dark: mt-5'>
                    <p className='text-left'>{description}  </p>
                </div>
                <div className=' flex justify-evenly gap-x-10 mt-5 mb-10'>

                    <Link href={code} target='blank'> <button className='bg-[#225166] flex justify-center  2xl:pt-3 pt-3  lg:pt-3 text-white rounded 2xl:w-36 w-32 h-12 font-light text-sm  lg:text-base hover:bg-[#367C9B]  hover:drop-shadow-md hover:-translate-y-1 transition duration-150'>Source Code <LuCode2 className='mt-1 ml-2' /></button></Link>

                    <Link href={page} target='_blank'><button className='bg-[#3C99C1] flex justify-evenly pt-3   text-white rounded 2xl:w-36  w-32 h-12 font-light text-sm  lg:text-base  hover:bg-[#4BB6E4]  hover:drop-shadow-md hover:-translate-y-1 transition duration-150'>Go site <BiLinkExternal className=' text-xl mt-0.5  ' /></button></Link>

                </div>

            </div>
        </div>



    )
}
