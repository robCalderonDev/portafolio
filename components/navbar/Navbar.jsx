import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import Options from './Options';

const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark');
        }
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className='bg-[#376F9B] lg:h-20 dark:bg-cyan-950 flex items-center justify-between max-w-full text-white font-medium text-xl py-auto px-[8%] flex-wrap w-full'>
            <div className='py-1 flex min-w-fit'>
                <Image
                    src="assets/robert.png"
                    className='mr-10'
                    width={60}
                    height={100}
                    layout="fixed"
                    alt='Robert Image'
                />
                <div className='text-md pt-5'>
                    <h1 className=''>Robert Calderon </h1>
                </div>
            </div>
            <AiOutlineMenu className='lg:hidden block h-7 w-7' onClick={() => setOpen(!open)} />
            <Options handleChangeTheme={handleChangeTheme} open={open} theme={theme} />
        </div>
    );
};
export default Navbar