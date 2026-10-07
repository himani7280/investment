import React from 'react'
import Hero from "../components/Hero";
import Faq from './Faq';
const page = () => {
  return (
    <div>
        <Hero page="faqs"/>
        <Faq/>
    </div>
  )
}

export default page