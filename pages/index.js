
import Navbar from '@/components/navbar/Navbar'
import Header from '@/components/Header'
import Content from '@/components/Content'
import Education from '@/components/Education'
import Soft from '@/components/Soft'
import Proyects from '@/components/Proyects'
import Footer from '@/components/info/Footer'
import Contact from '@/components/Contact'
import BackTopButton from '@/components/BackTopButton'


export default function Home() {
  return (
    <main className='bg-slate-100 dark:bg-[#080F17]  dark:text-white'

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
