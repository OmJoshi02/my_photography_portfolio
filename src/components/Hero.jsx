import React from 'react'
import { assets } from '../assets/assets'
import { scrollToSection } from '../utils/scrollToSection'

const Hero = () => {
  return (
    <section id='home' className='pt-20 md:pt-24 relative clip-path-hero'>
      <div className='relative h-screen flex items-center '>

        {/*background image*/}
        <div className='absolute inset-0 z-0 hero-bg'>
          <img className='h-full w-full object-cover' src = {assets.bgImg} alt = "Background Photograph" />
          <div className='absolute inset-0 bg-linear-to-r from-charcoal/70 to-charcoal/50'>

          </div>
        </div>

        {/*hero content*/}
        <div className='container mx-auto px-4 z-10 relative'>
          <div className='max-w-3xl'>
            <h1 className='text-5xl md:text-7xl lg:text-8xl font-playfair text-white mb-6 font-bold'>
              Capture the <span className='text-gradient-gold'>nature</span>
            </h1>
            <p className='text-xl md:text-2xl text-white/90  mb-10'>“Every landscape is a quiet conversation with the soul.”</p>
            <p className='text-xl md:text-2xl text-white/90 font-playfair  mb-10 translate-x-470px -translate-y-8'> - Om Joshi</p>

            <div className='flex flex-col sm:flex-row gap-4'>
              <button onClick={()=> scrollToSection('portfolio')} className='bg-gradient-gold text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl hover:shadow-gold/30 transition duration-300 cursor-pointer'>
                View Our Work
              </button>

              <button onClick={()=> scrollToSection('contact')} className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl hover:bg-white/30 transition duration-300 cursor-pointer'>
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
