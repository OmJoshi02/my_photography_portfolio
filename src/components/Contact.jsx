import React, { useState } from 'react'
import { contactInfo } from '../assets/assets';
import emailjs from '@emailjs/browser';



const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email : '',
    message : ''
  })

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name] : value
    }))
  }

  const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus(null);

  emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    name: formData.name,
    message: formData.message,
    email: formData.email
    
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
  .then(() => {
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  })
  .catch(() => {
    setStatus('error');
  })
  .finally(() => setLoading(false));
};

  return (
    <div id='contact' className='py-20 relative'>
      <div className='absolute inset-0 bg-linear-to-r from-champagne/20 to-cream/20 -z-10'></div>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16 '>
              <h2 className='text-4xl md:text-5xl font-bold font-playfair mb-6' data-aos="fade-up">
                Let's <span className='text-gradient-gold'>Connect</span>
              </h2>
              <p className='text-xl text-charcoal/80 max-w-3xl mx-auto' data-aos="fade-up" data-aos-delay="200">Want to contact? Get in touch to discuss some creative photographs</p>

            </div>
            {/*grid*/}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 '>
              {/*contact form*/}
              <div className='bg-white rounded-2xl p-8 shadow-xl' data-aos='fade-right'>
                <h3 className='text-2xl font-playfair font-bold mb-8'>
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className='space-y-4'>
                  {/*name and email*/}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label htmlFor="name" className='block mb-2'>Your Name</label>
                      <input type="text" name="name" id="name" value={formData.name} onChange={handleChange}
                      className='w-full px-4 py-3 border border-champagne rounded focus:outline-none focus:ring-2
                      focus:ring-gold placeholder:text-xs'
                      required
                      placeholder='Enter your name'
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className='block mb-2'>Your Email</label>
                      <input type="email" name="email" id="email" value={formData.email} onChange={handleChange}
                      className='w-full px-4 py-3 border border-champagne rounded focus:outline-none focus:ring-2
                      focus:ring-gold placeholder:text-xs'
                      required
                      placeholder='Enter your Email'
                      />
                    </div>

                    
                  </div>
                  <div className='w-full'>
                      <label htmlFor="message" className='block mb-2'>
                        Your Message
                      </label>
                      <textarea name="message" id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-champagne rounded focus:outline-none focus:ring-2
                      focus:ring-gold'
                      rows={4}
                      >
                      
                      </textarea>
                    </div>

                    <button 
                    type='submit'
                    disabled={loading}
                    className='w-full bg-gradient-gold text-white py-4 rounded-full font-medium hover:shadow-xl transition duration-300 cursor-pointer'>
                       {loading ? 'Sending...' : 'Send Message'}
                    </button>

                    {/* STATUS MESSAGE */}
                {status === 'success' && (
                  <p className="text-green-600 text-center mt-4">
                    ✅ Message sent successfully!
                  </p>
                )}

                {status === 'error' && (
                  <p className="text-red-600 text-center mt-4">
                    ❌ Failed to send message. Please try again.
                  </p>
                )}
                </form>
              </div>

              {/*contact info*/}
              <div data-aos='fade-left'>
                <h3 className='text-2xl font-playfair font-bold mb-8'>
                  Get in Touch 
                </h3>
                <div className='space-y-8'>
                  {
                    contactInfo.map((info,idx) => (
                      <div 
                      key={idx}
                      className='flex items-start gap-4'
                      >
                        <div className='bg-gradient-gold p-4 rounded-full text-white text-xl'>
                          <info.icon />
                        </div>
                        <div>
                          <h4 className='font-bold text-lg mb-2'>{info.title}</h4>
                          {info.details.map((detail, idx)=>(
                            <p key={idx}
                            className='text-charcoal/80'
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  )
}

export default Contact
