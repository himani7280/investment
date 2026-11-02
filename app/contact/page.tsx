import React from 'react'
import Hero from '@/components/Hero'
import ContactForm from './ContactForm'
import OurLocation from './OurLocation'
import FadeIn from '@/components/common/FadeIn'

const page = () => {
  return (
    <div className="overflow-x-clip">
      <Hero page="contact" />
      <FadeIn direction="up" delay={0.1}>
        <ContactForm />
      </FadeIn>
      <FadeIn direction="up" delay={0.15}>
        <OurLocation />
      </FadeIn>
    </div>
  )
}

export default page