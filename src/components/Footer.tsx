import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data/resume'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-text-muted sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
        </p>
        <div className="flex items-center gap-5">
          {profile.socials.github && (
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-accent"
            >
              <FiGithub size={18} />
            </a>
          )}
          {profile.socials.linkedin && (
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-accent"
            >
              <FiLinkedin size={18} />
            </a>
          )}
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="transition-colors hover:text-accent"
            >
              <FiMail size={18} />
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
