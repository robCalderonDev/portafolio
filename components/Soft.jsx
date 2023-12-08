import Image from 'next/image'
import React from 'react'

const Soft = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center w-full mt-10 '>
                <h1 className='text-4xl font-semibold'>Soft Skills</h1>
                <hr className="w-44 h-px my-1 bg-[#3B94A8] border-0" />

                <div className="flex flex-wrap justify-center xl:gap-10  gap-y-10    my-12  2xl:mx-80 ">
                    <div >
                        <div className="text-6xl border-2 border-none rounded-xl lg:mx-8 mx-4 bg-gray-100 w-28 h-28 2xl:w-32 2xl:h-32 flex-shrink-0 flex items-center justify-center hover:drop-shadow-md hover:-translate-y-2 transition duration-150 ">
                            <Image
                                src="assets/team.png"
                                width={80}
                                height={80}
                                layout='responsive'
                                alt="Robert Image"

                            />
                        </div>

                        <h1 className='text-center text-2xl font-semibold'>Team Work</h1>
                    </div>

                    <div className=' '>
                        <div className="text-6xl border-2 border-none rounded-xl mx-auto  bg-gray-100 w-28 h-28 2xl:w-32 2xl:h-32 flex-shrink-0 flex items-center justify-center hover:drop-shadow-md hover:-translate-y-2 transition duration-150 ">
                            <Image
                                src="assets/communication.png"
                                width={80}
                                height={80}
                                layout='responsive'
                                alt="Comunnication Image"

                            />
                        </div>

                        <h1 className='text-center text-2xl font-semibold'>Communication</h1>
                    </div>
                    <div className=' '>
                        <div className="text-6xl border-2 border-none rounded-xl lg:mx-8 mx-4 bg-gray-100 w-28 h-28 2xl:w-32 2xl:h-32 flex-shrink-0 flex items-center justify-center hover:drop-shadow-md hover:-translate-y-2 transition duration-150 ">
                            <Image
                                src="assets/adaptability.png"
                                width={80}
                                height={80}
                                layout='responsive'
                                alt="Adaptability Image"

                            />
                        </div>

                        <h1 className='text-center text-2xl font-semibold'>Adaptability</h1>
                    </div>





                </div>
            </div>

        </div>
    )
}

export default Soft