

import Hero from '../components/Hero'
import LatestBlog from './LatestBlog'

const page = () => {
  return (
    <div>
      <Hero page="blog"/>
       <LatestBlog/>
    </div>
  )
}

export default page