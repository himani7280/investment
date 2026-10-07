import React from 'react'
import Hero from '../components/Hero'
import ContactForm from './ContactForm'
import OurLocation from './OurLocation'

const page = () => {
  return (
    <div>
        <Hero page="contact"/>
        <ContactForm/>
        <OurLocation/>
    </div>
  )
}

export default page