import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload } from 'react-icons/fi'
import { profile } from '../data/resume'

const terminalLines = [
  '$ whoami',
  profile.name,
  '$ role --current',
  profile.role,
  '$ status',
  'Available for opportunities',
]

export default function Hero() {
  const initials = profile.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[320px] w-[320px] rounded-full bg-accent-2/10 blur-[100px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
            Hi, I'm {profile.name.split(' ')[0]}
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-heading sm:text-5xl lg:text-6xl">
            {profile.role} building
            <span className="text-accent"> reliable</span>, automated infrastructure.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-text-muted">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-105"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-heading transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted transition-colors hover:text-accent"
              >
                <FiDownload /> Resume
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          {profile.photo ? (
            <div className="overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/40">
              <img
                src={profile.photo}
                alt={profile.name}
                className="aspect-square w-full object-cover object-[50%_20%]"
              />
            </div>
          ) : (
            <div className="flex aspect-square w-full items-center justify-center rounded-2xl border border-border bg-surface shadow-2xl shadow-black/40">
              <span className="font-mono text-6xl font-bold text-accent">{initials}</span>
            </div>
          )}

          <div className="absolute -bottom-8 -left-8 hidden w-64 rounded-xl border border-border bg-surface/95 p-4 shadow-xl backdrop-blur sm:block">
            <div className="mb-2 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            </div>
            <div className="space-y-1 font-mono text-xs">
              {terminalLines.map((line, i) => (
                <p
                  key={i}
                  className={line.startsWith('$') ? 'text-accent-2' : 'pl-2 text-text-muted'}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted transition-colors hover:text-accent"
      >
        <FiArrowDown className="animate-bounce" size={22} />
      </a>
    </section>
  )
}
