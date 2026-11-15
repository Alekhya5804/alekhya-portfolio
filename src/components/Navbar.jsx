import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { navLinks, personalInfo } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';

const HEADER_OFFSET = 80;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 140;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Runs when any nav link is clicked: stops the browser's default jump,
  // closes the mobile menu, then smooth-scrolls to the section.
  const goTo = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    // Wait for the mobile menu to start closing, otherwise the scroll can get cancelled
    setTimeout(() => {
      const section = document.getElementById(id);

      if (!section) {
        console.error(`Section not found: ${id}`);
        return;
      }

      const top = section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
      setActiveSection(id);
    }, 150);
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
        <a
          href="#home"
          onClick={(e) => goTo(e, 'home')}
          className="group flex items-center gap-2"
          aria-label="Go to Home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-sm font-bold text-white shadow-lg shadow-brand-500/30">
            AB
          </span>
          <span className="hidden text-sm font-semibold text-slate-800 dark:text-white sm:block">
            {personalInfo.name.split(' ')[0]}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => goTo(e, link.id)}
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-brand-600 dark:text-brand-400'
                    : 'text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href="#contact"
            onClick={(e) => goTo(e, 'contact')}
            className="btn-primary hidden !px-4 !py-2.5 sm:inline-flex"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300 lg:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
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
            transition={{ duration: 0.2 }}
            className="border-t border-slate-200 bg-white/95 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95 lg:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => goTo(e, link.id)}
                    className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-medium ${
                      activeSection === link.id
                        ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => goTo(e, 'contact')}
                  className="btn-primary w-full"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}