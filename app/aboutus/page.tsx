import React from 'react'
import Aboutus from './Aboutus'
import Trusted from '../components/home/Trusted'
import HowItWorks from '../components/home/HowItWorks'
import OurPartners from '../components/home/OurPartners'
import Hero from '../components/Hero'
import FadeIn from '../common/components/FadeIn'

const page = () => {
  return (
    <div className="overflow-x-clip">
      <Hero page="about" />
      <FadeIn direction="up" delay={0.1}>
        <Aboutus />
      </FadeIn>
      <FadeIn direction="up" delay={0.15}>
        <Trusted />
      </FadeIn>
      <FadeIn direction="up" delay={0.15}>
        <HowItWorks />
      </FadeIn>
      <FadeIn direction="up" delay={0.15}>
        <OurPartners />
      </FadeIn>
    </div>
  )
}

export default page