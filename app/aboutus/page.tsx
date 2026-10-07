

import Aboutus from './Aboutus'
import Trusted from '../components/home/Trusted'
import HowItWorks from '../components/home/HowItWorks'
import OurPartners from '../components/home/OurPartners'
import Hero from '../components/Hero'

const page = () => {
  return (
    <div>
        <Hero 
page="about"
        />
        <Aboutus/>
        <Trusted/>
        <HowItWorks/>
        <OurPartners/>
    </div>
  )
}

export default page