import React from 'react';
import { BsCheck2All } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ setModal, modal }) => {
    const handleCloseModal = () => {
        setModal(!modal);
    };

    return (




        <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 ">

            <div class="max-h-full w-full max-w-xl overflow-y-auto rounded bg-white">
                <div class="w-full h-56">
                    <div className='flex justify-end'>
                        <button className='m-3' onClick={handleCloseModal}> <AiOutlineClose className='hover:text-gray-500' /></button>
                    </div>

                    <div class="flex pl-16  ">

                        <div className="mb-8">
                            <div className='flex'>
                                <h1 class="mb-4 text-3xl font-extrabold mr-5 pt-2">Gracias!</h1>
                                <BsCheck2All className='text-5xl bg-green-200 border text-[#469abe] border-green-500 rounded-3xl' />
                            </div>

                            <p className="text-gray-600">Te contactare Lo mas pronto posible.</p>
                        </div>
                    </div>
                    <button className='bg-[#3B94A8] ml-16 w-20 h-10 rounded text-white text-xl hover:bg-[#469abe]' onClick={handleCloseModal} >Cerrar</button>

                </div>
            </div>
        </div>
    );
};

export default Modal;
