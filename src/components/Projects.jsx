import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          subtitle="Real-world projects demonstrating Salesforce development and modern web engineering"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card group relative overflow-hidden transition-all duration-300 hover:shadow-glow-lg ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div
                className={`h-2 bg-gradient-to-r ${project.color}`}
              />
              <div className="p-6 md:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
                      <HiStar className="h-3.5 w-3.5" />
                      Featured
                    </span>
                  )}
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {project.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !px-5 !py-2.5"
                  >
                    <FaGithub className="h-5 w-5" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
