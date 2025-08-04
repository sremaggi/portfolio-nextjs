'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactPage() {
    const { translations } = useLanguage();
    const { theme } = useTheme();

    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('');
        const currentTime = new Date().toLocaleString();
        try {
            const result = await emailjs.send(
                'service_x16288v',
                'contact_us_template',
                {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                    time: currentTime,
                },
                'EAS_BQrgqPgK7EHWK'
            );

            console.log('Email sent:', result.text);
            setStatus('success');
            setForm({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Email error:', error);
            setStatus('error');
        }

        setTimeout(() => setStatus(''), 4000);
    };

    return (
        <main className="flex flex-col items-center justify-center px-6 py-10 md:py-20 text-center">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-xl w-full"
            >
                <h1 className="text-2xl sm:text-4xl mb-2">{translations.contact.title}</h1>
                <p className="text-neutral-500 mb-6">{translations.contact.subtitle}</p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 text-left  p-6 rounded-xl shadow-md"
                >
                    <div>
                        <label htmlFor="name" className="block mb-1 text-sm">
                            {translations.contact.name}
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm">
                            {translations.contact.email}
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-1 text-sm">
                            {translations.contact.message}
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={5}
                            required
                            className="w-full px-4 py-2 rounded-md border border-neutral-700"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 rounded-md bg-green-700 text-white hover:opacity-90 transition-all"
                    >
                        {translations.contact.send}
                    </button>

                    {status === 'success' && (
                        <p className="text-green-500 text-sm mt-2">
                            {translations.contact.success}
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-500 text-sm mt-2">
                            {translations.contact.error}
                        </p>
                    )}
                </form>
            </motion.div>
        </main>
    );
}
