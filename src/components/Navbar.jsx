import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { navLinks, personalInfo } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.id);
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between md:h-20">
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="group flex items-center gap-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-sm font-bold text-white shadow-lg shadow-brand-500/30">
            AR
          </span>
          <span className="hidden text-sm font-semibold text-slate-800 dark:text-white sm:block">
            {personalInfo.name.split(' ')[0]}
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-brand-600 dark:text-brand-400'
                    : 'text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="btn-primary hidden !px-4 !py-2.5 sm:inline-flex"
          >
            Hire Me
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200 bg-white/95 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95 lg:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium ${
                      activeSection === link.id
                        ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button type="button" onClick={() => scrollTo('contact')} className="btn-primary w-full">
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
