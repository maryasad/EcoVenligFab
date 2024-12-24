'use client';

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

interface Hub {
  id: number;
  name: string;
  address: string;
  hours: string;
  services: string[];
  image: string;
}

const hubs: Hub[] = [
  {
    id: 1,
    name: 'Copenhagen Central Hub',
    address: 'Vesterbrogade 45, 1620 København V',
    hours: 'Mon-Sat: 10:00-18:00',
    services: ['Sewing Machines', 'Expert Guidance', 'Upcycling Workshops', 'Material Library'],
    image: '/images/hubs/copenhagen-hub.jpg'
  },
  {
    id: 2,
    name: 'Aarhus Creative Space',
    address: 'Mejlgade 35, 8000 Aarhus C',
    hours: 'Tue-Sun: 11:00-19:00',
    services: ['Repair Stations', 'Design Consultations', 'Community Events', 'Tool Library'],
    image: '/images/hubs/aarhus-hub.jpg'
  },
  {
    id: 3,
    name: 'Odense Maker Hub',
    address: 'Vindegade 72, 5000 Odense C',
    hours: 'Wed-Sun: 12:00-20:00',
    services: ['Textile Workshop', 'Sustainable Design', 'Skills Training', 'Materials Exchange'],
    image: '/images/hubs/odense-hub.jpg'
  }
];

export default function RepairHubs() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <LanguageSwitcher />

      {/* Hero Section */}
      <div className="bg-teal-700 text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('sewingHubs.title')}</h1>
          <p className="text-xl max-w-3xl">{t('sewingHubs.description')}</p>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{t('sewingHubs.learnCreate.title')}</h3>
            <p className="text-gray-600">{t('sewingHubs.learnCreate.description')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{t('sewingHubs.repairUpcycle.title')}</h3>
            <p className="text-gray-600">{t('sewingHubs.repairUpcycle.description')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{t('sewingHubs.communitySupport.title')}</h3>
            <p className="text-gray-600">{t('sewingHubs.communitySupport.description')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{t('sewingHubs.sellItems.title')}</h3>
            <p className="text-gray-600">{t('sewingHubs.sellItems.description')}</p>
          </div>
        </div>
      </div>

      {/* Hub Locations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('sewingHubs.findHub')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hubs.map((hub) => (
            <div key={hub.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={hub.image}
                  alt={hub.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{hub.name}</h3>
                <p className="text-gray-600 mb-2">{hub.address}</p>
                <p className="text-gray-600 mb-4">{hub.hours}</p>
                <div className="space-y-2">
                  {hub.services.map((service, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
