import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Socials from '@/components/Socials'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Socials />
      <Contact />
      <Footer />
    </main>
  )
}
