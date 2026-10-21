
import OurValue from './OurValue'
import Hero from '@/app/components/Hero'
import FadeIn from '../common/components/FadeIn'

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