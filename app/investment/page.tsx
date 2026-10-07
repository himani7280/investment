import React from 'react'

import OurProcess from './OurProcess'
import ProcessWork from './ProcessWork'
import Hero from '../components/Hero'

const page = () => {
  return (
    <div>
       <Hero page="investment"/>
        <OurProcess/>
        <ProcessWork/>
    </div>
  )
}

export default page