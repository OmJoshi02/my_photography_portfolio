import React, { useEffect } from 'react'
import AOS from 'aos'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Portfolio from './components/portfolio'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {

  //init aos
  useEffect(()=>{
    AOS.init(
      {
        duration:1000,
        once : false,
        offset : 100
      }
    )
    // Parallelx effect

    const handleScroll = () => {
      const scrolled = window.pageYOffset //it checks how much page has been scrolled
      const heroBg = document.querySelector('.hero-bg');

      if(heroBg){
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return ()=> window.removeEventListener('scroll', handleScroll) 
  }, [])
  return (
    <div className='bg-cream text-charcoal font-inter'>
      <Navbar />
      <Hero />
      <Stats />
      <Portfolio />
      <About />
      <Contact />
    </div>
  )
}

export default App
