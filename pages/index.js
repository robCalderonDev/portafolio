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
    <>
      <Navbar />
      <main>
        <Header />
        <Content />

        {/* Educación y habilidades blandas lado a lado en pantallas grandes */}
        <section className='mx-auto grid max-w-6xl gap-16 px-6 py-16 lg:grid-cols-2'>
          <Education />
          <Soft />
        </section>

        <Proyects />
        <Contact />
      </main>
      <Footer />
      <BackTopButton />
    </>
  )
}
