import Link from 'next/link'
import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <div>
            <div className='bg-[#225166] py-2 flex  justify-center gap-x-5'>
                <Link href={'https://github.com/robCalderonDev'} target='blank'><BsGithub className='w-8 h-8 text-white ' /></Link>
                <Link href={'https://www.linkedin.com/in/robert-calderon-vasquez/'} target='blank'><BsLinkedin className='w-8 h-8 text-white ' /></Link>



            </div>
            <div className='bg-[#3B94A8]'><h1 className='text-white text-center'>@2023 RobCalderonDev</h1></div>

        </div>
    )
}

export default Footer