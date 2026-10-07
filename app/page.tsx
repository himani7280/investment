import React from 'react'
import HeroSection from './components/home/HeroSection'
import AboutSection from './components/home/AboutSection'
import ServiceSection from './components/home/ServiceSection'
import Whychoose from './components/home/Whychoose'
import HowItWorks from './components/home/HowItWorks';
import Trusted from './components/home/Trusted'
import Testimonials from './components/home/Testimonials'
import BlogsSection from './components/home/BlogsSection'
import OurPartners from './components/home/OurPartners'
import MotionReveal from './common/components/MotionReveal'

const page = () => {
  return (
    <div className="overflow-x-clip">
      <MotionReveal distance={0}><HeroSection/></MotionReveal>
      <MotionReveal direction="left"><AboutSection/></MotionReveal>
      <MotionReveal direction="right"><ServiceSection/></MotionReveal>
      <MotionReveal><Whychoose/></MotionReveal>
      <MotionReveal direction="left"><HowItWorks/></MotionReveal>
      <MotionReveal direction="right"><Trusted/></MotionReveal>
      <MotionReveal><OurPartners/></MotionReveal>
      <MotionReveal direction="left"><Testimonials/></MotionReveal>
      <MotionReveal direction="right"><BlogsSection/></MotionReveal>
    </div>
  )
}

export default page