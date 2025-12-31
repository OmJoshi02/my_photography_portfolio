import bgImg from '../assets/bgImg.jpeg';
import aboutImg from '../assets/aboutImg.jpg';
import portfolio1Img from '../assets/portfolio1.jpeg';
import portfolio2Img from '../assets/portfolio2.jpeg';
import portfolio3Img from '../assets/portfolio3.jpeg';
import portfolio4Img from '../assets/portfolio4.jpeg';
import portfolio5Img from '../assets/portfolio5.jpeg';
import portfolio6Img from '../assets/portfolio6.jpeg';
import portfolio7Img from '../assets/portfolio7.jpeg';
import portfolio8Img from '../assets/portfolio8.jpeg';
import portfolio9Img from '../assets/portfolio9.jpeg';
import testimonial2 from '../assets/testimonial2.avif';
import testimonial3 from '../assets/testimonial3.avif';


import { FaEnvelope, FaFacebook, FaHeart, FaImages, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaPinterest, FaRing, FaYoutube } from 'react-icons/fa';


export const assets = {
  bgImg,
  aboutImg,
}

export const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    // { id: 'services', label: 'Services' },
    // { id: 'pricing', label: 'Packages' },
    { id: 'contact', label: 'Contact' }
  ]

export const stats = [
    { number: 5, label: 'Years Experience' },
    { number: 25, label: 'Macro Photographs' },
    { number: 100, label: 'Moments Captured' },
    { number: 100, label: 'Client Satisfaction' }
  ];


export const portfolioItems = [
  {
    id: 1,
    image: portfolio1Img,
    category: "macro",
    title: "Macro Photography"
  },
  {
    id: 2,
    image: portfolio2Img,
    category: "nature",
    title: "Nature"
  },
  {
    id: 3,
    image: portfolio3Img,
    category: "sun-set",
    title: "Sun Set"
  },
  {
    id: 4,
    image:portfolio4Img,
    category: "sun-set",
    title: "Sun Set"
  },
  {
    id: 5,
    image: portfolio5Img,
    category: "nature",
    title: "Nature"
  },
  {
    id: 6,
    image: portfolio6Img,
    category: "macro",
    title: "Macro Photography"
  },
  {
    id: 7,
    image: portfolio7Img,
    category: "nature",
    title: "Macro Photography"
  },
  {
    id: 8,
    image: portfolio8Img,
    category: "nature",
    title: "Macro Photography"
  },
  {
    id: 9,
    image: portfolio9Img,
    category: "macro",
    title: "Macro Photography"
  }
]

export const services = [
    {
      icon: FaRing,
      title: "Full Wedding Coverage",
      description: "Complete coverage from getting ready to the last dance. We capture every moment of your special day.",
      features: ["8-10 hours of coverage", "Two photographers", "500+ edited photos"],
      color: "gold"
    },
    {
      icon: FaHeart,
      title: "Engagement Sessions",
      description: "Beautiful pre-wedding sessions to celebrate your love story before the big day.",
      features: ["2-3 hour session", "Location of your choice", "50+ edited photos"],
      color: "rose"
    },
    {
      icon: FaImages,
      title: "Album Design",
      description: "Professionally designed wedding albums to preserve your memories for generations.",
      features: ["Luxury album design", "Premium quality prints", "Custom layout options"],
      color: "gold"
    }
  ]

  export const packages = [
    {
      name: "Essential",
      price: "₹1,999",
      description: "Perfect for intimate weddings",
      features: [
        { text: "6 hours coverage", included: true },
        { text: "One photographer", included: true },
        { text: "300+ edited photos", included: true },
        { text: "Online gallery", included: true },
        { text: "No engagement session", included: false }
      ],
      featured: false,
      color: "gold"
    },
    {
      name: "Premium",
      price: "₹3,499",
      description: "Our most popular package",
      features: [
        { text: "Full day coverage", included: true },
        { text: "Two photographers", included: true },
        { text: "Engagement session", included: true },
        { text: "600+ edited photos", included: true },
        { text: "Premium album", included: true }
      ],
      featured: true,
      color: "rose"
    },
    {
      name: "Luxury",
      price: "₹5,999",
      description: "Complete wedding experience",
      features: [
        { text: "Multi-day coverage", included: true },
        { text: "Three photographers", included: true },
        { text: "Two engagement sessions", included: true },
        { text: "1000+ edited photos", included: true },
        { text: "Luxury album & prints", included: true }
      ],
      featured: false,
      color: "gold"
    }
  ]


export const testimonials = [
    {
      name: "Jessica & Michael",
      date: "June 2023 Wedding",
      avatar: aboutImg,
      quote: "Sarah captured our wedding day perfectly! Every photo tells a story and brings back all the emotions. We'll cherish these forever."
    },
    {
      name: "Alex & Ryan",
      date: "August 2023 Wedding",
      avatar: testimonial2,
      quote: "Working with EverAfter was the best decision we made for our wedding. The photos are absolutely stunning and exceeded all expectations."
    },
    {
      name: "Sophia & James",
      date: "October 2023 Wedding",
      avatar: testimonial3,
      quote: "Sarah made us feel so comfortable in front of the camera. She captured the most beautiful moments we didn't even notice on the day!"
    }
  ]

export  const faqs = [
    {
      question: "How far in advance should we book?",
      answer: "We recommend booking 9-12 months in advance for wedding dates, especially for popular seasons."
    },
    {
      question: "Do you travel for weddings?",
      answer: "Yes! We love destination weddings. Travel fees may apply outside of our local area."
    },
    {
      question: "How long until we receive our photos?",
      answer: "You'll receive a sneak peek within 48 hours and the full gallery within 6-8 weeks."
    }
  ]

export const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      details: ["Randive galli, near Mahadev Temple, Kasaba Bawada, Kolhapur"]
    },
    {
      icon: FaPhoneAlt,
      title: "Call Us",
      details: ["+91 9834535125", "Mon-Fri: 6pm-12am IST"]
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: ["omcjoshi@gmail.com", "Response within 24 hours"]
    }
  ]


export const quickLinks = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Portfolio', section: 'portfolio' },
    { label: 'Services', section: 'services' },
    { label: 'Packages', section: 'pricing' }
  ]

export const serviceLinks = [
    { label: 'Wedding Photography', section: 'services' },
    { label: 'Engagement Sessions', section: 'services' },
    { label: 'Pre-Wedding Shoots', section: 'services' },
    { label: 'Album Design', section: 'services' },
    { label: 'Destination Weddings', section: 'services' }
  ]

export const socialLinks = [
    { icon: FaInstagram , href: '#' },
    { icon: FaFacebook, href: '#' },
    { icon: FaPinterest, href: '#' },
    { icon: FaYoutube, href: '#' }
  ]
