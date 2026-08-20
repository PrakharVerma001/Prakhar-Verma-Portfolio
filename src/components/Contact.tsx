import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import Section from './Section'
import { profile } from '../data/resume'

export default function Contact() {
  const cards = [
    profile.email && {
      icon: FiMail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    profile.socials.linkedin && {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: profile.socials.linkedin,
    },
    profile.socials.github && {
      icon: FiGithub,
      label: 'GitHub',
      value: 'See my code',
      href: profile.socials.github,
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: profile.location,
    },
  ].filter(Boolean) as { icon: typeof FiMail; label: string; value: string; href?: string }[]

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something reliable together"
      description="Open to DevOps, cloud, and infrastructure roles. Reach out through any of the channels below."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => {
          const Icon = card.icon
          const content = (
            <>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-accent-soft text-accent">
                <Icon size={18} />
              </div>
              <p className="mt-4 text-sm text-text-muted">{card.label}</p>
              <p className="mt-1 break-words font-medium text-heading">{card.value}</p>
            </>
          )

          const className =
            'block rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40'

          return (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              {card.href ? (
                <a href={card.href} target="_blank" rel="noreferrer" className={className}>
                  {content}
                </a>
              ) : (
                <div className={className}>{content}</div>
              )}
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
