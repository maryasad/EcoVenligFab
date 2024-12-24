'use client';

import { LanguageProvider } from '@/context/LanguageContext';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <main className="flex min-h-screen flex-col">
        {children}
      </main>
    </LanguageProvider>
  );
}
