import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

const page = () => {
  return (
    <>
      {/* <div>Page</div> */}
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </>
  )
}

export default page