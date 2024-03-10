import React from 'react';
import { BsCheck2All } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai';

const MoreInfoModal = ({ setModal, modal, proyect }) => {
    const handleCloseModal = () => {
        setModal(!modal);
        console.log(proyect)
    };

    return (




        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 ">

            <div className=" h-96  lg:h-[500px] max-w-xl overflow-y-auto rounded bg-white">
                <div className="">
                    <div className='flex justify-end'>
                        <button className='m-3' onClick={handleCloseModal}> <AiOutlineClose className='hover:text-gray-500' /></button>
                    </div>

                    <div class="flex px-16  ">

                        <div className="mb-8 ">
                            <div className='flex'>
                                <h1 class="mb-4 text-3xl font-extrabold mr-5 pt-2 dark:text-gray-900">{proyect.title}</h1>

                            </div>

                            <p className="text-gray-600">{proyect.description}</p>
                        </div>
                    </div>
                    <button className='bg-[#3B94A8] ml-16 w-20 h-10 rounded text-white text-xl hover:bg-[#469abe]' onClick={handleCloseModal} >Cerrar</button>

                </div>
            </div>
        </div>
    );
};

export default MoreInfoModal;
