import Whychoose from '@/components/home/Whychoose'

import HowItWorks from '@/components/home/HowItWorks'
import Hero from '@/components/Hero'
import FadeIn from '@/components/common/FadeIn'

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