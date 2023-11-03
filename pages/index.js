import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Content from '@/components/Content'
import Education from '@/components/Education'
import Soft from '@/components/Soft'
import Proyects from '@/components/Proyects'
import Footer from '@/components/info/Footer'
import Contact from '@/components/Contact'
import BackTopButton from '@/components/BackTopButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-gray-50 dark:bg-neutral-900 dark:text-white'

    >

      <Navbar />
      <Header />
      <Content />
      <Education />
      <Soft />
      <Proyects />
      <Contact />
      <Footer />
      <BackTopButton />
    </main >
  )
}
