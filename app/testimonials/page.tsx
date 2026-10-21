
import Hero from "../components/Hero";
import Review from './Review';
import FadeIn from '../common/components/FadeIn';

const page = () => {
  return (
    <div className="overflow-x-clip">
      <Hero page="testimonials" />
      <FadeIn direction="up" delay={0.1}>
        <Review />
      </FadeIn>
    </div>
  )
}

export default page