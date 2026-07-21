import About from '@/components/About'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'

const page = () => {
  return (
    <>
      {/* <div>Page</div> */}
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Experience />
    </>
  )
}

export default page