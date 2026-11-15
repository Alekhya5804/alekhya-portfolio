import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools } from 'react-icons/fa';
import { SiSalesforce } from 'react-icons/si';
import { skillCategories } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const iconMap = {
  SiSalesforce: SiSalesforce,
  FaCode: FaCode,
  FaDatabase: FaDatabase,
  FaTools: FaTools,
};

function SkillCategory({ category, index }) {
  const { ref, isVisible } = useScrollAnimation();

  const Icon = iconMap[category.icon] || FaCode;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 md:p-8"
    >
      <div className="mb-6 flex items-center gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
      </div>

      <div className="space-y-5">
        {category.skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex justify-between text-sm">
              <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
              <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{ width: isVisible ? `${skill.level}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          subtitle="Proficient across Salesforce CRM, programming languages, databases, and development tools"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
