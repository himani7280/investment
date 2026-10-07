import React from 'react'
import Hero from '../components/Hero'

const SitemapPage = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/aboutus", label: "About Us" },
    { href: "/awards", label: "Awards" },
    { href: "/blog", label: "Blog" },
    { href: "/bookConsultation", label: "Book Consultation" },
    { href: "/contact", label: "Contact Us" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/faqs", label: "FAQs" },
    { href: "/investment", label: "Investment" },
    { href: "/MissionVision", label: "Mission & Vision" },
    { href: "/ourPartners", label: "Our Partners" },
    { href: "/ourTeam", label: "Our Team" },
    { href: "/privacyPolicy", label: "Privacy Policy" },
    { href: "/service", label: "Services" },
    { href: "/sitemap2", label: "Sitemap" },
    { href: "/teamDetails", label: "Team Details" },
    { href: "/termsConditions", label: "Terms & Conditions" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/thankyou", label: "Thank You" },
    { href: "/whyChooseUs", label: "Why Choose Us" },
  ];

  return (
    <div>
      <Hero page="sitemap" />
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mt-8 mb-4">Site Map</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-disc list-inside">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-blue-600 hover:underline">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SitemapPage