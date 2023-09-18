import Image from 'next/image'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4n8a19v', 'template_7a1xm6n', form.current, 'Uzz0w0nJCdScAgzga')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                e.target.reset()
            });
    };
    return (
        <div className=' mt-10'>
            <div className='flex  justify-center'>
                <h1 className='text-2xl lg:text-4xl mr-10 font-semibold lg:mt-1 mt-3'>Conversemos!</h1>
                <Image
                    src={`/assets/email.png`}
                    width={50}
                    height={50}
                    className=''
                    alt="Robert Image"
                />

            </div>
            <form ref={form} onSubmit={sendEmail} className="w-2/4 mx-auto   mb-10">
                <div className='flex flex-wrap justify-between'>
                    <div className=" border-b  border-[#3B94A8] py-2 w-72">

                        <input className="appearance-none  bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" required type="text" name='user_name' placeholder="Nombre" aria-label="nombre" />


                    </div>
                    <div className=" border-b border-[#3B94A8] py-2 w-72">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none " name='user_mail' required type="email" placeholder="Email" aria-label="email" />


                    </div>
                </div>


                <textarea id="message" className=" placeholder: focus:outline-none bg-slate-50 w-full mt-16 border border-slate-300  h-52" placeholder="Mensaje " name='message' type='text' required></textarea>
                <div className='flex justify-center mt-5'>
                    <button className='bg-[#3B94A8] w-52 h-12 rounded text-white text-2xl hover:bg-[#469abe]'>Enviar</button>
                </div>

            </form>
        </div>
    )
}

export default Contact