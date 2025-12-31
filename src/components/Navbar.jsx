import React, { useEffect, useState } from 'react'
import { navLinks } from '../assets/assets'
import { FaXmark, FaBars } from 'react-icons/fa6'
import { scrollToSection } from '../utils/scrollToSection'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (linkId) => {
    setActiveLink(linkId)
    scrollToSection(linkId)
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="text-3xl font-playfair font-bold text-gradient-gold cursor-pointer"
          >
            Pixel & Light
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`nav-link relative font-medium transition duration-300 cursor-pointer
                  ${activeLink === link.id
                    ? 'text-gold'
                    : 'text-charcoal hover:text-gold'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-gradient-gold text-white px-6 py-3 rounded-full font-medium hover:shadow-gold/30 transition duration-300"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-charcoal text-xl"
          >
            {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left font-medium
                    ${activeLink === link.id
                      ? 'text-gold'
                      : 'text-charcoal hover:text-gold'
                    }`}
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={() => handleNavClick('contact')}
                className="bg-gradient-gold text-white px-6 py-3 rounded-full font-medium text-center mt-2"
              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
