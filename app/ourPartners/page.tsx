
import Hero from "@/components/Hero";
import OurPartners from '@/components/home/OurPartners';
import FadeIn from '@/components/common/FadeIn';

const page = () => {
  return (
    <div className="overflow-x-clip">
      <Hero page="ourPartners" />
      <FadeIn direction="up" delay={0.1}>
        <OurPartners />
      </FadeIn>
    </div>
  )
}

export default page