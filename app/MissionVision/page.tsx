
import OurValue from './OurValue'
import Hero from '@/components/Hero'
import FadeIn from '@/components/common/FadeIn'

const page = () => {
  return (
    <div className="overflow-x-clip">
      <Hero page="missionVision" />
      <FadeIn direction="up" delay={0.1}>
        <OurValue />
      </FadeIn>
    </div>
  )
}

export default page