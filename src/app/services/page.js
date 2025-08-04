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
import Link from 'next/link';

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
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.1, duration: 1, ease: 'easeOut' }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all hover:border-primary group transform-gpu"
                        >

                            <div className="flex items-center mb-4 space-x-4">
                                <div className="p-3 md:p-4 rounded-full bg-muted text-[color:var(--hover-color)] shadow group-hover:scale-110 transition-transform transform-gpu">
                                    <Icon className="w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <h2 className="text-lg md:text-xl font-medium">{service.title}</h2>
                            </div>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                        </motion.div>
                    );
                })}
            </div>

            <motion.div
                className="mt-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <p className="text-sm md:text-md  text-muted-foreground">
                    {translations.services.ctaMessage}
                </p>
                <motion.button

                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="px-6 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition"
                >
                    <Link key={"/contact"} href={"/contact"} className="relative group">
                        <span className="group-hover:text-[color:var(--hover-color)] transition-colors duration-200 text-[color:var(--hover-color)] ">
                            {translations.services.ctaButton}
                        </span>
                        <span
                            className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[color:var(--hover-color)] group-hover:w-full transition-all duration-300"
                        />
                    </Link>

                </motion.button>
            </motion.div>
        </main >
    );
}
