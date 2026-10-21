import Whychoose from '../components/home/Whychoose'

import HowItWorks from '../components/home/HowItWorks'
import Hero from '@/app/components/Hero'
import FadeIn from '../common/components/FadeIn'

const page = () => {
  return (
    <div className="overflow-x-clip">
      <Hero page="whyChooseUs" />
      <FadeIn direction="up" delay={0.1}>
        <HowItWorks />
      </FadeIn>
      <FadeIn direction="up" delay={0.15}>
        <Whychoose />
      </FadeIn>
    </div>
  )
}

export default page