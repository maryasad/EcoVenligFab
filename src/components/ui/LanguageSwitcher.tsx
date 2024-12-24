'use client';

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center justify-center w-10 h-10 rounded-full ${
          language === 'en' ? 'ring-2 ring-teal-500' : ''
        }`}
        title="English"
      >
        <Image
          src="/images/flags/en.svg"
          alt="English"
          width={32}
          height={32}
          className="rounded-full"
        />
      </button>
      <button
        onClick={() => setLanguage('da')}
        className={`flex items-center justify-center w-10 h-10 rounded-full ${
          language === 'da' ? 'ring-2 ring-teal-500' : ''
        }`}
        title="Dansk"
      >
        <Image
          src="/images/flags/da.svg"
          alt="Dansk"
          width={32}
          height={32}
          className="rounded-full"
        />
      </button>
    </div>
  );
}
