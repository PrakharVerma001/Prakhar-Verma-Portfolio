import { motion } from 'framer-motion'
import Section from './Section'
import { impactStats } from '../data/resume'

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="Automating infrastructure, end to end."
      description="I'm a DevOps Engineer focused on building high-availability systems — from CI/CD pipelines and container orchestration to cloud infrastructure and observability. I care about shipping fast without breaking things in production."
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {impactStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-xl border border-border bg-surface p-5 text-center"
          >
            <p className="font-mono text-3xl font-extrabold text-accent">{stat.value}</p>
            <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
