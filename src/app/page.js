'use client';

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { Typewriter } from 'react-simple-typewriter';

export default function HomePage() {
  const { translations } = useLanguage();

  return (
    <main className="flex flex-col items-center justify-center px-6 py-30 md:py-50 text-center">

      {/* Imagen redonda centrada */}
      <Image
        src="/img/sremaggi.jpeg"
        alt="Sebastián Remaggi"
        width={120}
        height={120}
        className="rounded-full mx-auto mb-1 shadow-md"
        priority
      />
      <div className="max-w-xl p-6 ">
        <h1 className="text-2xl sm:text-4xl  mb-2 leading-tight">
          Sebastián Remaggi Flores
        </h1>
        <h2 className="text-xl sm:text-3xl  mb-4 leading-tight text-neutral-500">
          <Typewriter
            words={[translations.home.welcome]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <p className="text-base sm:text-lg mb-6">
          {translations.home.description}
        </p>

        <div className="mt-6">
          <span className="block text-sm uppercase tracking-widest mb-3 text-[color:var(--hover-color)]">
            {translations.home.social}
          </span>
          <div className="flex gap-6 justify-center">
            {[
              { href: 'https://github.com/sremaggi', icon: FaGithub, label: 'GitHub' },
              { href: 'https://linkedin.com/in/sremaggi', icon: FaLinkedin, label: 'LinkedIn' },
              { href: 'https://x.com/sremaggi', icon: FaXTwitter, label: 'X (Twitter)' }
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-all transform hover:scale-110 duration-200 drop-shadow-md"
                aria-label={label}
              >
                <Icon size={28} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
