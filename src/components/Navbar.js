'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { useState } from 'react';
import {
    Settings,
    Sun,
    Moon,
    Languages,
    Globe,
    ChevronDown,
} from 'lucide-react';

export default function Navbar() {
    const { language, toggleLanguage, translations } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className={`w-full px-6 py-4 shadow-md transition-colors duration-300 ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}>
            <div className="max-w-5xl mx-auto flex items-center justify-between">
                {/* Left Navigation */}
                <div className="flex items-center space-x-6 text-lg font-medium ">
                    <Link href="/">{translations.navbar.home}</Link>
                    <Link href="/projects">{translations.navbar.projects}</Link>
                    <Link href="/contact">{translations.navbar.contact}</Link>
                </div>

                {/* Right Dropdown */}
                <div className="relative ">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center justify-end w-10 h-10  "
                        aria-label="Settings"
                    >
                        <Settings className="w-7 h-7 hover:bg-gray-200 dark:hover:bg-gray-500 transition" />
                    </button>

                    {dropdownOpen && (
                        <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50 py-2 transition-all duration-200 ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-800 text-white'}`}>
                            {/* Language Toggle */}
                            <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 cursor-pointer">
                                <div className="flex items-center gap-2">
                                    <Globe className="w-5 h-5" />
                                    <span>{language === 'en' ? 'English' : 'Español'}</span>
                                </div>
                                <button
                                    onClick={toggleLanguage}
                                    className="w-12 h-6 flex items-center rounded-full p-1 bg-gray-300 dark:bg-gray-600"
                                >
                                    <div className={`h-4 w-4 rounded-full bg-white shadow-md transform transition-transform ${language === 'en' ? 'translate-x-6' : ''}`} />
                                </button>
                            </div>

                            {/* Theme Toggle */}
                            <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 cursor-pointer">
                                <div className="flex items-center gap-2">
                                    {theme === 'light' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                    <span>{theme === 'light' ? 'Light' : 'Dark'}</span>
                                </div>
                                <button
                                    onClick={toggleTheme}
                                    className="w-12 h-6 flex items-center rounded-full p-1 bg-gray-300 dark:bg-gray-600"
                                >
                                    <div className={`h-4 w-4 rounded-full bg-white shadow-md transform transition-transform ${theme === 'dark' ? 'translate-x-6' : ''}`} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
