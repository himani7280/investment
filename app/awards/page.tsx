import React from 'react'
import Hero from "../components/Hero";
import Achievements from './Achievements';
const page = () => {
  return (
    <div>
        <Hero page="awards"/>
        <Achievements/>
    </div>
  )
}

export default page