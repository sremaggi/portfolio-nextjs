'use client';

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function HomePage() {
  const { translations } = useLanguage();

  return (
    <main className="flex flex-col items-center justify-center px-6 py-30 md:py-50 text-center">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeInUp}
        className="mb-6"
      >
        <Image
          src="/img/sremaggi.jpeg"
          alt="Sebastián Remaggi"
          width={120}
          height={120}
          className="rounded-full mx-auto shadow-md"
          priority
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeInUp}
        className="max-w-xl p-6"
      >
        <h1 className="text-2xl sm:text-4xl mb-2 leading-tight font-semibold">
          Sebastián Remaggi Flores
        </h1>

        <h2 className="text-xl sm:text-3xl mb-4 leading-tight text-neutral-500">
          <Typewriter
            words={[translations.home.welcome]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <motion.p
          className="text-base sm:text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {translations.home.description}
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="block text-sm uppercase tracking-widest mb-3 text-[color:var(--hover-color)]">
            {translations.home.social}
          </span>
          <div className="flex gap-6 justify-center">
            {[
              { href: 'https://github.com/sremaggi', icon: FaGithub, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/sebasti%C3%A1n-remaggi-flores-5a558b294/', icon: FaLinkedin, label: 'LinkedIn' },
              { href: 'https://x.com/sebarf96', icon: FaXTwitter, label: 'X (Twitter)' }
            ].map(({ href, icon: Icon, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-all transform hover:scale-110 duration-200 drop-shadow-md"
                aria-label={label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
