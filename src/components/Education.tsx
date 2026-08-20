import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import Section from './Section'
import { education } from '../data/resume'

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="grid gap-5 sm:grid-cols-2">
        {education.map((edu, i) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex gap-4 rounded-xl border border-border bg-surface p-6"
          >
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-accent/40 bg-accent-soft text-accent">
              <FiAward size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-heading">{edu.school}</h3>
              <p className="mt-1 text-sm text-text-muted">{edu.degree}</p>
              <p className="mt-1 font-mono text-xs text-accent">{edu.years}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
