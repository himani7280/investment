import React from 'react'
import ServiceGoal from './ServiceGoal'
import GetInTouch from './GetInTouch'
import Hero from '../components/Hero'

const page = () => {
  return (
    <div>
      <Hero page="service"/>
        <ServiceGoal/>
        <GetInTouch/>
    </div>
  )
}

export default page