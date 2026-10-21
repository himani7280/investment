
import Hero from "../components/Hero";
import Faq from './Faq';
import FadeIn from '../common/components/FadeIn';

const page = () => {
  return (
    <div className="overflow-x-clip">
      <Hero page="faqs" />
      <FadeIn direction="up" delay={0.1}>
        <Faq />
      </FadeIn>
    </div>
  )
}

export default page