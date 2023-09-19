import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <>
            <div id='aboutMe' className='grid justify-items-center  pt-5 '>

                <Image
                    src="assets/robert.png"
                    width={160}
                    height={160}
                    layout="fixed"
                    alt='Robert Image'
                />

                <h1 className='text-3xl font-semibold '>Robert Calderon</h1>
                <hr className="w-44 h-px my-1 bg-[#3B94A8]  border-0 " />
                <h1 className='text-[#3B94A8]  text-2xl'>Web Developer</h1>
                <div className='w-2/4 text-xl mt-10'>
                    <p className=' mb-10'>I am a passionate <span className='text-[#3B94A8] '>front-end developer </span> with a deep passion for <span className='text-[#3B94A8]'>technology</span> and programming. Currently, I am in my final year of Computer Science bachelor, and at 22 years old, I live in Chile. My primary focus is on web development and cloud technologies, two constantly evolving areas that inspire me to learn and grow continuously.
                    </p>

                    <p>What truly sets me apart is my strong commitment to <span className='text-[#3B94A8] '>teamwork</span>. I firmly believe in collaboration as a key to success in any project. My open-mindedness and willingness to tackle new challenges drive me to constantly seek opportunities for learning and improvement.</p>

                </div>
            </div>
        </>
    )
}

export default Header