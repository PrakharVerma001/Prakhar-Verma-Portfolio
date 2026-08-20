export default function CircuitBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <svg
        className="h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="circuit-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path
              d="M0 40 H80 M40 0 V80"
              stroke="var(--color-accent)"
              strokeOpacity="0.12"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="40" cy="40" r="2.5" fill="var(--color-accent)" fillOpacity="0.18" />
          </pattern>
        </defs>

        <rect width="1600" height="900" fill="url(#circuit-grid)" />
      </svg>
    </div>
  )
}
