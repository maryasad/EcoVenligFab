'use client';

import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function About() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <LanguageSwitcher />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">About echoVenlig</h1>
          <p className="text-lg text-gray-600 mb-12">
            echoVenlig is a Danish startup passionate about revolutionizing the fashion industry through sustainability
            and community engagement. We believe in a future where style and responsibility go hand-in-hand, where
            clothes are cherished and reused, and where textile waste is minimized.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-teal-50 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600">
              We aim to create a vibrant platform that connects conscious consumers with high-quality second-hand
              clothing, promotes innovative solutions for textile reuse, and empowers individuals to make eco-friendly
              fashion choices.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to reducing the environmental impact of the fashion industry by promoting circularity
                and responsible consumption.
              </p>
              <a
                href="https://evaresource.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 text-sm mt-4 block"
              >
                Source: The Environmental Impact of the Fashion Industry - EVA re-source
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                We believe in the power of community to drive positive change. Our sewing hubs foster collaboration,
                skill-sharing, and a shared commitment to sustainable fashion.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-600">
                We are open and honest about our practices, sourcing, and the impact of our choices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Empowerment</h3>
              <p className="text-gray-600">
                We provide consumers with the knowledge and resources they need to make informed decisions about their
                fashion choices.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p className="text-lg text-gray-600">
              echoVenlig is driven by a team of passionate individuals dedicated to making a difference in the fashion
              industry. We bring together expertise in sustainable fashion, technology, and community building to create
              a platform that is both impactful and user-friendly.
            </p>
          </div>
        </div>

        {/* Join Movement Section */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join the Movement</h2>
          <p className="text-lg text-gray-600 mb-8">
            We invite you to join us on our journey towards a more sustainable fashion future. Explore our marketplace,
            learn about eco-conscious choices, and be part of a community that cares about the planet.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-teal-50 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-lg text-gray-600">
              We would love to hear from you! If you have any questions, feedback, or ideas, please don't hesitate to
              contact us.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
