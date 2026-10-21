import React from 'react'
import OurProcess from './OurProcess'
import ProcessWork from './ProcessWork'
import Hero from '../components/Hero'
import FadeIn from '../common/components/FadeIn'

const page = () => {
  return (
    <div className="overflow-x-clip">
      <Hero page="investment" />
      <FadeIn direction="up" delay={0.1} distance={20}>
        <OurProcess />
      </FadeIn>
      <FadeIn direction="up" delay={0.15} distance={20}>
        <ProcessWork />
      </FadeIn>
    </div>
  )
}

export default page