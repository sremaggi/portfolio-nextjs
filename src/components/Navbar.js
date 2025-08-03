'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Settings2, Sun, Moon, Globe } from 'lucide-react';

export default function Navbar() {
    const { language, toggleLanguage, translations } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Cerrar dropdown al hacer click fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className={`w-full px-6 py-3 shadow-md transition-colors duration-300 ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}>
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                {/* Left Navigation */}
                <div className="flex items-center space-x-6 text-md md:text-xl font-medium">
                    {/* Logo */}
                    <Link href="/" className="transform transition-transform hover:scale-110">
                        <Image
                            src="/img/logo3.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="rounded-sm"
                        />
                    </Link>

                    {/* Navigation Links */}
                    {[
                        { href: '/', label: translations.navbar.home },
                        { href: '/projects', label: translations.navbar.projects },
                        { href: '/contact', label: translations.navbar.contact }
                    ].map((link) => (
                        <Link key={link.href} href={link.href} className="relative group">
                            <span className="group-hover:text-[color:var(--hover-color)] transition-colors duration-200">
                                {link.label}
                            </span>
                            <span
                                className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[color:var(--hover-color)] group-hover:w-full transition-all duration-300"
                            />
                        </Link>
                    ))}
                </div>

                {/* Right Dropdown */}
                <div ref={dropdownRef} className="relative group cursor-pointer ">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={`group flex items-center justify-center w-full h-full transition-colors duration-200 cursor-pointer
    ${dropdownOpen ? 'text-[color:var(--hover-color)]' : ''}
    hover:text-[color:var(--hover-color)]
  `}
                        aria-label="Settings"
                    >
                        <Settings2 className={`w-7 h-7 md:w-8 md:h-8 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''} hover:scale-110`} />

                    </button>


                    {/* Dropdown (sin escala, solo visibilidad + opacidad) */}
                    <div
                        className={`absolute right-0 mt-2 w-48 rounded-md shadow-xl z-50 py-2 backdrop-blur-sm transition-opacity duration-200
              ${dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
              ${theme === 'light' ? 'bg-white/80 text-gray-900' : 'bg-neutral-800/80 text-white'}
            `}
                    >
                        {/* Language Toggle */}
                        <div
                            className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 cursor-pointer transition"
                            onClick={toggleLanguage}
                        >
                            <div className="flex items-center gap-2">
                                <Globe className="w-5 h-5" />
                                <span>{language === 'en' ? 'English' : 'Español'}</span>
                            </div>
                            <div className="w-12 h-6 flex items-center rounded-full p-1 bg-gray-300 dark:bg-gray-600">
                                <div className={`h-4 w-4 rounded-full bg-white shadow-md transform transition-transform ${language === 'en' ? 'translate-x-6' : ''}`} />
                            </div>
                        </div>

                        {/* Theme Toggle */}
                        <div
                            className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 cursor-pointer transition"
                            onClick={toggleTheme}
                        >
                            <div className="flex items-center gap-2">
                                {theme === 'light' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                <span>{theme === 'light' ? 'Light' : 'Dark'}</span>
                            </div>
                            <div className="w-12 h-6 flex items-center rounded-full p-1 bg-gray-300 dark:bg-gray-600">
                                <div className={`h-4 w-4 rounded-full bg-white shadow-md transform transition-transform ${theme === 'dark' ? 'translate-x-6' : ''}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
