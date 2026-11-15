import { motion } from 'framer-motion';
import { HiArrowDown, HiDownload, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import TypingEffect from './TypingEffect';

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="section-container relative z-10 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {personalInfo.openToWork && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Open to Work
                </span>
              </motion.div>
            )}

            <p className="mb-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              {personalInfo.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-slate-600 dark:text-slate-300 sm:text-2xl">
              <TypingEffect words={personalInfo.typingRoles} />
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {personalInfo.tagline}. B.Tech ECE graduate building enterprise Salesforce
              solutions and modern web applications — ready to deliver value from day one.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={personalInfo.resumePath} download className="btn-primary">
                <HiDownload className="h-5 w-5" />
                Download Resume
              </a>
              <button type="button" onClick={() => scrollTo('contact')} className="btn-secondary">
                <HiMail className="h-5 w-5" />
                Contact Me
              </button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:border-brand-400 hover:text-brand-600 hover:shadow-glow dark:border-slate-700 dark:text-slate-400 dark:hover:border-brand-500 dark:hover:text-brand-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:border-brand-400 hover:text-brand-600 hover:shadow-glow dark:border-slate-700 dark:text-slate-400 dark:hover:border-brand-500 dark:hover:text-brand-400"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-brand-500/30 to-accent-500/30 blur-2xl" />
              <div className="glass-card relative overflow-hidden p-8 shadow-glow-lg">
                <div className="mx-auto mb-6 h-48 w-48 overflow-hidden rounded-2xl shadow-xl sm:h-56 sm:w-56">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="h-full w-full object-cover" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="mt-1 text-sm text-brand-600 dark:text-brand-400">
                    {personalInfo.title}
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {[
                      { label: 'Projects', value: '2+' },
                      { label: 'Skills', value: '15+' },
                      { label: 'Certs', value: '4+' },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl bg-slate-100/80 py-3 dark:bg-slate-800/80"
                      >
                        <div className="text-lg font-bold text-brand-600 dark:text-brand-400">
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.button
          type="button"
          onClick={() => scrollTo('about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 transition-colors hover:text-brand-500 md:flex"
          aria-label="Scroll to about"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <HiArrowDown className="h-5 w-5 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
