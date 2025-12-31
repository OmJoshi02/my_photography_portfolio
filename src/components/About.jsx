import React from 'react'
import { assets } from '../assets/assets'
import { FaArtstation, FaCamera } from 'react-icons/fa'
import { FaLeaf } from 'react-icons/fa6'

const about = () => {
  return (
    <section id='about' className='py-20 md:py-28 '>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center gap-12'>
          {/*Image*/}
          <div className='lg:w-1/2 relative ' data-aos = 'fade-right'>
            <div className='relative rounded-3xl overflow-hidden shadow-2xl animate-float'>
              <img src={assets.aboutImg} alt="Photographer" className='w-full h-auto'/>
            </div>
            <div className='absolute -bottom-6 -right-6 bg-gradient-rose  text-white px-6 py-3 rounded-full shadow-lg animate-float'>
              <span className='font-bold'>5+ Years Experience</span></div>
          </div>

          {/*content*/}
          <div className='lg:w-1/2' data-aos="fade-left">
            <h2 className='text-4xl md:text-4xl font-playfair font-bold mb-6'>
              Nature, <span className='text-gradient-rose'>Beautifully Captured</span>
            </h2><br />
            <p className='text-lg text-charcoal/80 mb-6'>
              Hi, I’m Om Joshi. I’m a passionate nature photographer who finds beauty in the raw, untouched moments of the natural world. I believe every landscape, sunrise, and quiet detail has a story worth preserving.
            </p> <br />
            <p className='text-lg text-charcoal/80 mb-6'>My approach blends patience with artistic vision—capturing vast scenes and subtle elements that reflect nature’s true mood and character.</p>
          
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-10'>
              <div className='flex items-start gap-4'>
                <div className='bg-gradient-gold p-3 rounded-full'>
                  <FaLeaf className='text-white text-xl'/>
                </div>
                <div>
                  <h4 className='font-bold text-lg mb-1'>Natural & Authentic</h4>
                  <p className='text-charcoal/70'>Capturing real landscapes, light, and moments just as nature intended.</p>
                </div>
              </div>
              </div> 

              <div className='flex items-start gap-4'>
                <div className='bg-gradient-gold p-3 rounded-full'>
                  <FaCamera className='text-white text-xl'/>
                </div>
                <div>
                  <h4 className='font-bold text-lg mb-1'>Artistic Vision</h4>
                  <p className='text-charcoal/70'>Focused on composition, depth, and storytelling through nature photography.</p>
                </div>
              </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default about
