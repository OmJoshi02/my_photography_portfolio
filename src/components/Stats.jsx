import React from 'react'
import { stats } from '../assets/assets'
import Counter from './Counter'

const Stats = () => {
  return (
    <div className=' py-16 bg-linear-to-r from-champagne to-cream'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
          {stats.map((stat, index) => (
            <div key={index} className='stats-counter' data-aos='fade-up' data-aos-delay={index*100}>
              <div className='text-5xl md:text-6xl font-playfair font-bold text-gradient-gold mb-2' >
                <Counter target={stat.number} />
              </div>
              <div className='text-charcoal/80 font-medium'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats
