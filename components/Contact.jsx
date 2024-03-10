import Image from 'next/image'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Modal from './modals/Modal';
import { BsCheck2All } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai';
const Contact = () => {
    const form = useRef()
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')

    const [modal, setModal] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4n8a19v', 'template_7a1xm6n', form.current, 'Uzz0w0nJCdScAgzga')
            .then((result) => {
                console.log(result.text);
                setModal(!modal)
                // Reset input values after successful send
                setName('');   // Cambiado de ' ' a ''
                setMail('');   // Cambiado de ' ' a ''
                setMessage(''); // Cambiado de ' ' a ''
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };
    return (
        <div id='contact' className=' mt-10 fade-in-element'>
            <div className='flex  justify-center'>
                <h1 className='text-2xl lg:text-4xl mr-10 font-semibold lg:mt-1 mt-3'>Let's Talk!</h1>
                <Image
                    src='/assets/email.png'
                    width={50}
                    height={50}
                    className=''
                    alt="mail"
                />


            </div>
            <form ref={form} onSubmit={sendEmail} className=" w-3/4  lg:w-2/4 mx-auto    mb-10">
                <div className='flex flex-wrap justify-between'>
                    <div className="border-b border-[#3B94A8] py-2 w-full  lg:w-5/12  ">

                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="dark:text-white appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            required
                            type="text"
                            name='user_name'
                            placeholder="Nombre"
                            aria-label="nombre"
                        />

                    </div>
                    <div className="border-b border-[#3B94A8] py-2 w-full  lg:w-5/12">
                        <input
                            onChange={(e) => setMail(e.target.value)}
                            value={mail}
                            className="dark:text-white appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none "
                            name='user_mail'
                            required
                            type="email"
                            placeholder="Email"
                            aria-label="email"
                        />
                    </div>
                </div>



                <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    id="message"
                    className=" bg-slate-50 dark:bg-neutral-900 w-full mt-16 border  border-[#3B94A8] rounded h-52 focus:border-[#3B94A8] dark:focus:border-[#3B94A8] focus:outline-none"
                    placeholder="Mensaje"
                    name="message"
                    type="text"
                    required
                    style={{ paddingTop: '15px', paddingLeft: '15px' }}  // Añadir estilo de padding al placeholder
                ></textarea>
                <div className='flex justify-center mt-5'>
                    <button className='bg-[#3B94A8] w-52 h-12 rounded text-white text-2xl hover:bg-[#469abe]'>Send</button>
                </div>

            </form>


            {
                modal && (<div>
                    <Modal setModal={setModal} modal={modal} />
                </div>)
            }

        </div >
    )
}

export default Contact