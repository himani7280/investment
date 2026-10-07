import React from 'react'
import Hero from "../components/Hero";
import OurPartners from '@/app/components/home/OurPartners';
const page = () => {
  return (
    <div>
        <Hero page="ourPartners"/>
        <OurPartners/>
    </div>
  )
}

export default page