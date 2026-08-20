import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'
import Section from './Section'
import { experience } from '../data/resume'

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Professional journey"
      description="A timeline of the roles where I've designed, automated, and scaled infrastructure."
    >
      <div className="relative">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border sm:left-[23px]" />

        <div className="space-y-12">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex gap-6 pl-2 sm:gap-8"
            >
              <div className="relative z-10 flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-full border border-border bg-white sm:h-12 sm:w-12">
                {job.logo ? (
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="h-full w-full object-contain p-1.5"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center bg-accent-soft text-accent">
                    <FiBriefcase size={18} />
                  </span>
                )}
              </div>

              <div className="min-w-0 flex-1 rounded-xl border border-border bg-surface p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-heading">{job.role}</h3>
                  <span className="flex items-center gap-2">
                    {job.current && (
                      <span className="rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[11px] font-semibold text-accent">
                        Current
                      </span>
                    )}
                    <span className="font-mono text-xs text-text-muted">{job.dateRange}</span>
                  </span>
                </div>
                <p className="mt-1 font-medium text-accent">{job.company}</p>
                <p className="mt-0.5 text-sm text-text-muted">
                  {job.location} · {job.duration}
                </p>

                <ul className="mt-4 space-y-2">
                  {job.highlights.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-text">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-bg px-3 py-1 font-mono text-xs text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
