import React from 'react'
import { useEffect, useState } from 'react'
import { BiSolidUpArrow } from 'react-icons/bi'
const BackTopButton = () => {

    const [backToTopButton, setBackToTopButton] = useState();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1500) {
                setBackToTopButton(true)
            }
            else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div>
            {backToTopButton && (
                <button
                    onClick={scrollUp}
                    className='  fixed bottom-16 right-10 w-12 h-12 text-4xl bg-gray-100 rounded-xl flex items-center justify-center drop-shadow-xl hover:-translate-y-0.5 transition duration-150 dark:bg-gray-800'
                >
                    <BiSolidUpArrow className='text-green-400 h-10 w-10' />
                </button>
            )}
        </div>
    )
}

export default BackTopButton