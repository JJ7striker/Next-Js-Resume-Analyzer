import React from 'react'
import Home from '@/components/Home'
import HowItWorks from '@/components/HowItWorks'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
const Landing = () => {

  return (
    <div className='w-full min-h-screen'>
      <Home />
    <HowItWorks />
    <Services />
    <About />
    <Contact />
    </div>
  )
}

export default Landing