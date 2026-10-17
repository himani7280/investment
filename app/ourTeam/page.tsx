import React from 'react'
import OurTeam from "./OurTeam"
import Hero from '@/app/components/Hero'
import FadeIn from '../common/components/FadeIn'

const page = () => {
  return (
    <div className="overflow-x-clip">
      <Hero page="ourTeam" />
      <FadeIn direction="up" delay={0.1}>
        <OurTeam />
      </FadeIn>
    </div>
  )
}

export default page