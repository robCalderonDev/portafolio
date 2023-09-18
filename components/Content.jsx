import Image from 'next/image'
import React from 'react'

const Content = () => {
    return (
        <>
            <div className="    mx-auto         mt-10">
                <div className='flex flex-col items-center justify-center w-full '>
                    <h1 className='text-4xl font-semibold'>Skills</h1>
                    <hr className="w-44 h-px my-1 bg-[#3B94A8] border-0" />
                </div>



                <div className="flex flex-wrap justify-center xl:gap-10  gap-y-10    my-12  2xl:mx-80 ">
                    <div className="text-6xl border-2 border-none rounded-xl lg:mx-8 mx-4 bg-gray-100 w-28 h-28 2xl:w-32 2xl:h-32 flex-shrink-0 flex items-center justify-center hover:drop-shadow-md hover:-translate-y-2 transition duration-150 ">
                        <Image
                            src="assets/html.png"
                            width={80}
                            height={80}
                            layout='responsive'
                            alt="Robert Image"

                        />
                    </div>


                    <div className=" text-6xl border-2 border-none  rounded-xl  lg:mx-8 mx-4 bg-gray-100 w-28 h-28 2xl:w-32 2xl:h-32 flex-shrink-0 hover:drop-shadow-md hover:-translate-y-2 transition duration-150">  <Image
                        src="assets/css.png"
                        width={80}
                        height={80}
                        layout='responsive'
                        alt="Robert Image"

                    /></div>
                    <div className=" text-6xl border-2 border-none  rounded-xl  lg:mx-8 mx-4 bg-gray-100 w-28 h-28 2xl:w-32 2xl:h-32 flex-shrink-0 hover:drop-shadow-md hover:-translate-y-2 transition duration-150">  <Image
                        src="assets/react.png"
                        width={80}
                        height={80}
                        layout='responsive'
                        alt="Robert Image"

                    /></div>
                    <div className=" text-6xl border-2 border-none  rounded-xl  lg:mx-8 mx-4 bg-gray-100 w-28 h-28 2xl:w-32 2xl:h-32 flex-shrink-0 hover:drop-shadow-md hover:-translate-y-2 transition duration-150">   <Image
                        src="assets/next.png"
                        width={80}
                        height={80}
                        layout='responsive'
                        alt="Robert Image"

                    /></div>
                    <div className=" text-6xl border-2 border-none  rounded-xl  lg:mx-8 mx-4 bg-gray-100 w-28 h-28 2xl:w-32 2xl:h-32 flex-shrink-0 hover:drop-shadow-md hover:-translate-y-2 transition duration-150">   <Image
                        src="assets/pyton.png"
                        width={80}
                        height={80}
                        layout='responsive'
                        alt="Robert Image"

                    /></div>
                    <div className=" text-6xl border-2 border-none   rounded-xl  lg:mx-8 mx-4 bg-gray-100 w-28 h-28 2xl:w-32 2xl:h-32 flex-shrink-0 hover:drop-shadow-md hover:-translate-y-2 transition duration-150">   <Image
                        src="assets/github.png"
                        width={80}
                        height={80}
                        layout='responsive'
                        alt="Robert Image"

                    /></div>
                    <div className=" text-6xl border-2 border-none  rounded-xl  lg:mx-8 mx-4 bg-gray-100 w-28 h-28 2xl:w-32 2xl:h-32 flex-shrink-0 hover:drop-shadow-md hover:-translate-y-2 transition duration-150">   <Image
                        src="assets/java.png"
                        width={80}
                        height={80}
                        layout='responsive'
                        alt="Robert Image"

                    /></div>
                    <div className=" text-6xl border-2 border-none  rounded-xl  lg:mx-8 mx-4 bg-gray-100 w-28 h-28 2xl:w-32 2xl:h-32 flex-shrink-0 hover:drop-shadow-md hover:-translate-y-2 transition duration-150">   <Image
                        src="assets/tailwind.png"
                        width={80}
                        height={80}
                        layout='responsive'
                        alt="Robert Image"


                    /></div>





                </div>
            </div>





        </>
    )
}

export default Content