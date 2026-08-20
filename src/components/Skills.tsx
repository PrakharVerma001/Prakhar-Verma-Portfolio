import { motion } from 'framer-motion'
import Section from './Section'
import { skillCategories } from '../data/resume'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools of the trade"
      description="Technologies I use to design, ship, and operate infrastructure reliably."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
          >
            <h3 className="font-semibold text-heading">{cat.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-accent/20 bg-accent-soft px-3 py-1 font-mono text-xs text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
