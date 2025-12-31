import React, { useState } from 'react'
import { portfolioItems } from '../assets/assets'

const portfolio = () => {

  const [filter, setFilter] = useState('all')

  const filterItems = filter === 'all'
    ? portfolioItems
    :portfolioItems.filter(item => item.category === filter)
  const filters = [
    {id: 'all', label : "All Photos"},
    {id: 'sun-set', label : "Sun Set"},
    {id: 'nature', label : "Nature"},
    {id: 'macro', label : "Macro"}
  ]
  return (
    <section id='portfolio' className='py-20 bg-champagne/30'>
      <div className='container mx-auto px-4'>
        {/*section header*/}
        <div className='text-center mb-16'>
          <h2 
          data-aos = 'fade-up'
          className='text-4xl md:text-5xl font-playfair font-bold mb-6 '>
            Our <span className='text-gradient-gold'>Portfolio</span>
          </h2>
          <p 
          data-aos = 'fade-up' 
          data-aos-delay = '200'
          className='text-xl text-charcoal/80 max-w-3xl mx-auto'>A glimpse into the world where beauty born </p>
        </div>

        {/*filter buttons*/}
        <div 
        data-aos = 'fade-up'
        className='flex flex-wrap justify-center gap-4 mb-12 '>
          {filters.map((filterItem)=> (
            <button key={filterItem.id}
            onClick={()=> setFilter(filterItem.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer
            ${filter === filterItem.id ? 'bg-gradient-gold text-white' : 'bg-white text-charcoal hover-gradient-gold'}`}>
              {filterItem.label}
              
            </button>
          ))}
        </div>

        {/*portfolio grid*/}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            filterItems.map((item, index) => (
              <div
              key={index}
              className='group image-overlay rounded-2xl overflow-hidden shadow-lg cursor-pointer relative'
              data-aos = 'fade-up'
              data-aos-delay = {index*100}
              >
                <img 
                className='w-full h-96 object-cover rounded-3xl group-hover:scale-110 transition duration-700'
                src={item.image} alt={item.title} />

                <div className='absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500'>
                  <div
                  className='absolute bottom-0 left-0 right-0 p-6'
                  >
                    <h4 className='text-white text-xl font-bold'>{item.title}</h4>
                    <span className='inline-block mt-2 px-3 py-1 bg-gradient-gold text-charcoal text-sm rounded-full'>
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        {/*view more button*/}
        {/* <div className='text-center mt-12' data-aos = 'fade-up'>
          <button className='inline-block border-2 border-gold text-gold px-8 py-4 rounded-full font-medium hover-gradient-gold transition duration-300 cursor-pointer'>
            View Full Portfolio
          </button>
        </div> */}
      </div>
    </section>
  )
}

export default portfolio
