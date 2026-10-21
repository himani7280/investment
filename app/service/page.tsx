import React from 'react'
import ServiceGoal from './ServiceGoal'
import GetInTouch from './GetInTouch'
import Hero from '../components/Hero'
import FadeIn from '../common/components/FadeIn'

const page = () => {
  return (
    <div className="overflow-x-clip">
      <Hero page="service" />
      <FadeIn direction="up" delay={0.1}>
        <ServiceGoal />
      </FadeIn>
      <FadeIn direction="up" delay={0.15}>
        <GetInTouch />
      </FadeIn>
    </div>
  )
}

export default page