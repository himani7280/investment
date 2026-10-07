import React from 'react'
import Consultation from './Consultation'
import Hero from "../components/Hero";
const page = () => {
  return (
    <div>
        <Hero page="bookConsultation"/>
        <Consultation/>
    </div>
  )
}

export default page