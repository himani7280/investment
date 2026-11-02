import React from 'react'
import Hero from "@/components/Hero";
import Achievements from './Achievements';
import FadeIn from '@/components/common/FadeIn';

const page = () => {
  return (
    <div className="overflow-x-clip">
      <Hero page="awards" />
      <FadeIn direction="up" delay={0.1}>
        <Achievements />
      </FadeIn>
    </div>
  )
}

export default page