import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
}

export default function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-bold text-heading sm:text-4xl">{title}</h2>
        {description && <p className="mt-4 max-w-2xl text-text-muted">{description}</p>}
      </motion.div>
      {children}
    </section>
  )
}
