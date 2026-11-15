import { motion } from 'framer-motion';
import { HiBadgeCheck } from 'react-icons/hi';
import { certifications } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-slate-100/50 dark:bg-slate-900/30">
      <div className="section-container">
        <SectionHeading
          label="Certifications"
          title="Credentials & Achievements"
          subtitle="Professional certifications and recognitions validating my technical skills"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card group p-6 transition-shadow hover:shadow-glow"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-lg font-bold text-white shadow-lg">
                  {cert.badge}
                </div>
                <HiBadgeCheck className="h-6 w-6 text-brand-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="text-base font-bold leading-snug text-slate-900 dark:text-white">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                {cert.issuer}
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{cert.year}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
