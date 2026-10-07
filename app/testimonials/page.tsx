import React from 'react'
import Hero from "../components/Hero";
import Review from './Review';
const page = () => {
  return (
    <div>
        <Hero page="testimonials"/>
        <Review/>
    </div>
  )
}

export default page