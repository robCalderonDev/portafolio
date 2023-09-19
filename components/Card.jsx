import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuCode2 } from 'react-icons/lu'
import { BiLinkExternal } from 'react-icons/bi'
export const Card = ({ title, content, page, code, images, description }) => {
    return (
        <div className='mt-10'>
            <div className='flex flex-wrap w-5/6 h-full lg:h-80 bg-[#F5F5F5] rounded-xl mx-auto drop-shadow-md'>
                <div className='   lg:w-1/2 l'>
                    <div className='bg-red-50 lg:w-3/5 w-4/5   mt-10 mx-auto '>  <Image
                        src={`assets/${images}.png`}
                        width={80}
                        height={80}
                        layout='responsive'
                        alt="Robert Image"
                    />

                    </div>
                </div>
                <div className=' lg:w-1/2 w-full font-semibold'>
                    <h1 className='text-center text-xl mt-5'> {title}</h1>
                    <div className=' w-3/4 mx-auto mt-5'>
                        <p>   {description}  </p>
                    </div>
                    <div className=' flex justify-evenly gap-x-10 mt-5 mb-10'>

                        <Link href={code} target='blank'> <button className='bg-[#225166] flex justify-center  pt-1 lg:pt-3 text-white rounded w-20 lg:w-36 h-12 font-light text-sm  lg:text-base hover:bg-[#367C9B]  hover:drop-shadow-md hover:-translate-y-1 transition duration-150'>Source Code <LuCode2 className='mt-1 ml-2' /></button></Link>

                        <Link href={page} target='_blank'><button className='bg-[#3C99C1] flex justify-evenly pt-3 text-white rounded w-20 lg:w-36 h-12 font-light text-sm  lg:text-base  hover:bg-[#4BB6E4]  hover:drop-shadow-md hover:-translate-y-1 transition duration-150'>Go site <BiLinkExternal className=' text-xl mt-0.5  ' /></button></Link>

                    </div>

                </div>
            </div>

        </div >

    )
}
