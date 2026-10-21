
import type { Metadata } from 'next';
import Policy from './Policy';
import Hero from '../components/Hero';
import { investmentContent } from '../data/investmentContent';

export const metadata: Metadata = {
  title: `${investmentContent.privacyPolicy.badge} | ${investmentContent.siteChrome.brandName}`,
  description: investmentContent.privacyPolicy.description,
};

const page = () => {
  return (
    <div>
      <Hero page="privacyPolicy" />
      <Policy />
    </div>
  );
};

export default page;