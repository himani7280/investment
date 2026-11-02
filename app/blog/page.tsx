
import Hero from '@/components/Hero'
import LatestBlog from './LatestBlog'
import FadeIn from '@/components/common/FadeIn'

const page = () => {
  return (
    <div className="overflow-x-clip">
      <Hero page="blog" />
      <FadeIn direction="up" delay={0.1}>
        <LatestBlog />
      </FadeIn>
    </div>
  )
}

export default page