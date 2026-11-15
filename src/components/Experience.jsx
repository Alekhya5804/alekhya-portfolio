import { motion } from 'framer-motion';
import { HiBriefcase } from 'react-icons/hi';
import { experiences } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-100/50 dark:bg-slate-900/30">
      <div className="section-container">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          subtitle="Internship experiences that shaped my technical and analytical skills"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-brand-500 via-accent-500 to-transparent md:left-1/2 md:block md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 flex flex-col md:mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="hidden w-1/2 md:block" />
              <div className="absolute left-6 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-brand-500 shadow-glow dark:border-slate-950 md:left-1/2 md:flex" />

              <div className={`w-full pl-14 md:w-1/2 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-card p-6 md:p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-600 dark:text-brand-400">
                      {exp.type}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{exp.period}</span>
                  </div>
                  <div className="mb-3 flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400">
                      <HiBriefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                      <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {exp.description}
                  </p>
                  <ul className="mb-4 space-y-2">
                    {exp.responsibilities.map((r) => (
                      <li
                        key={r}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
