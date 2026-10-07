import React from 'react'
import OurValue from './OurValue'
import Hero from '@/app/components/Hero'


const page = () => {
  return (
    <div>
      <Hero page="missionVision"/>
        <OurValue />
    </div>
  )
}

export default page