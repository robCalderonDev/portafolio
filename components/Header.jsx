import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <>
            <div id='aboutMe' className='lg:flex ' >


                <div className='lg:w-[50%] lg:mb-0 mb-36 lg:pt-0 pt-16'>
                    <div className='lg:pl-32 pl-10 bg lg:mt-24'>
                        <h1 className='text-2xl  font-semibold'>Hi!, I'm   </h1>
                        <h1 className='text-5xl font-semibold '>Robert Calderon</h1>
                        <h1 className='text-[#3B94A8]  text-2xl font-semibold '> & I'm Web Developer</h1>
                    </div>

                    {/* <hr className="w-44 h-px my-1 bg-[#3B94A8]  border-0 " /> */}

                    <div className=' lg:pl-32 pl-10 w-11/12 text-left text-xl mt-10'>
                        <p className=' mb-10'>I am a passionate <span className='text-[#3B94A8] '> front-end developer</span>  with 1 year of experience deeply enthusiastic about  <span className='text-[#3B94A8]'>technology </span> and programming. I'm 23 years old and live in Chile. My primary focus is on web development and cloud technologies, two constantly evolving areas that inspire me to learn and grow continuously.
                        </p>

                        <p>What truly sets me apart is my strong commitment to <span className='text-[#3B94A8] '>teamwork</span>. I firmly believe in collaboration as a key to success in any project. My open-mindedness and willingness to tackle new challenges drive me to constantly seek opportunities for learning and growth.</p>

                    </div>

                </div>
                <div className='lg:w-[50%] flex justify-center lg:pt-28'>
                    <Image
                        src="assets/robformal.jpg"
                        width={500}
                        height={100}
                        className="rounded-lg mb-10 lg:max-w-full  w-5/12"
                        alt='Robert Image'
                    />
                </div>


            </div>



        </>
    )
}

export default Header