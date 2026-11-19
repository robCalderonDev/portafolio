import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className='border-t border-slate-200 dark:border-white/10'>
            <div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-slate-500 dark:text-slate-400'>
                <p>© {new Date().getFullYear()} Robert Calderón</p>
                <div className='flex gap-4'>
                    <a href='https://github.com/robCalderonDev' target='_blank' rel='noopener noreferrer' aria-label='GitHub' className='hover:text-brand-deep dark:hover:text-brand-light transition-colors'>
                        <BsGithub className='h-6 w-6' />
                    </a>
                    <a href='https://www.linkedin.com/in/robert-calderon-vasquez/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='hover:text-brand-deep dark:hover:text-brand-light transition-colors'>
                        <BsLinkedin className='h-6 w-6' />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
