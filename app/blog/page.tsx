import React from 'react'
import Hero from '../components/Hero'
import LatestBlog from './LatestBlog'
import FadeIn from '../common/components/FadeIn'

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