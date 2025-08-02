'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { language, translations } = useLanguage();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{translations.home.welcome}</h1>
    </main>
  );
}
