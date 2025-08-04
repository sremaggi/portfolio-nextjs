'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import {
    Code2,
    Smartphone,
    Cloud,
    HelpingHand
} from 'lucide-react';
import { motion } from 'framer-motion';

const icons = {
    web: Code2,
    mobile: Smartphone,
    cloud: Cloud,
    consulting: HelpingHand
};

export default function ServicesPage() {
    const { translations } = useLanguage();
    const { theme } = useTheme();

    const services = [
        {
            key: 'web',
            title: translations.services.web,
            description: translations.services.webDesc,
        },
        {
            key: 'mobile',
            title: translations.services.mobile,
            description: translations.services.mobileDesc,
        },
        {
            key: 'cloud',
            title: translations.services.cloud,
            description: translations.services.cloudDesc,
        },
        {
            key: 'consulting',
            title: translations.services.consulting,
            description: translations.services.consultingDesc,
        },
    ];

    return (
        <main className="px-6 py-10 md:py-20 bg-background text-foreground transition-colors flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-center mb-4">{translations.services.title}</h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl text-center mb-12">
                {translations.services.subtitle}
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-4xl w-full">
                {services.map((service, index) => {
                    const Icon = icons[service.key];
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all hover:border-primary group"
                        >
                            <div className="flex items-center mb-4 space-x-4">
                                <div className="p-3 md:p-4 rounded-full bg-muted text-[color:var(--hover-color)] shadow group-hover:scale-110 transition-transform">
                                    <Icon className="w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <h2 className="text-lg md:text-xl font-medium">{service.title}</h2>
                            </div>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                        </motion.div>
                    );
                })}
            </div>

            <div className="mt-10 text-center">
                <p className="text-sm md:text-md mb-2 text-muted-foreground">
                    {translations.services.ctaMessage}
                </p>
                <button className="px-6 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition">
                    {translations.services.ctaButton}
                </button>
            </div>
        </main>
    );
}
