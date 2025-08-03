'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ServicesPage() {
    const { language, translations } = useLanguage();

    return (
        <main style={{ padding: '2rem' }}>
            <h1>{translations.services.welcome}</h1>
        </main>
    );
}
