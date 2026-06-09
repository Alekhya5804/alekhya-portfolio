import { motion } from 'framer-motion';
import { HiAcademicCap, HiCheckCircle, HiLightningBolt } from 'react-icons/hi';
import { about, education } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-100/50 dark:bg-slate-900/30">
      <div className="section-container">
        <SectionHeading
          label="About Me"
          title="Who I Am"
          subtitle="A passionate engineer bridging electronics fundamentals with modern software development"
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 lg:col-span-3"
          >
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              {about.summary}
            </p>
            <ul className="mt-8 space-y-4">
              {about.highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <HiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <span className="text-slate-600 dark:text-slate-400">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="glass-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                <HiAcademicCap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Education</h3>
              <p className="mt-2 font-medium text-brand-600 dark:text-brand-400">
                {education.degree}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {education.institution} · {education.period}
              </p>
              <ul className="mt-4 space-y-2">
                {education.achievements.map((a) => (
                  <li key={a} className="text-sm text-slate-600 dark:text-slate-400">
                    • {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600">
                <HiLightningBolt className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Career Focus</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Seeking opportunities as a <strong className="text-slate-800 dark:text-slate-200">Software Engineer</strong> or{' '}
                <strong className="text-slate-800 dark:text-slate-200">Salesforce Developer</strong> at
                product companies, IT services firms, and Salesforce partners.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
