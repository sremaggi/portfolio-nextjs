'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ProjectsPage() {
    const { language, translations } = useLanguage();

    return (
        <main style={{ padding: '2rem' }}>
            <h1>{translations.projects.welcome}</h1>
        </main>
    );
}
