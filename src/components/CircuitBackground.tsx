const traces = [
  'M -50 90 H 260 V 190 H 620 V 40 H 980 V 260 H 1650',
  'M -50 320 H 380 V 220 H 700 V 420 H 1120 V 260 H 1650',
  'M -50 520 H 220 V 620 H 560 V 460 H 980 V 640 H 1650',
  'M -50 700 H 420 V 800 H 780 V 620 H 1200 V 760 H 1650',
]

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

        {traces.map((d, i) => {
          const color = i % 2 === 0 ? 'var(--color-accent)' : 'var(--color-accent-2)'
          return (
            <g key={d} style={{ color }}>
              {/* always-visible base trace line */}
              <path
                d={d}
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.35"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* bright pulse traveling along the trace */}
              <path
                d={d}
                className="circuit-pulse"
                style={{ animationDelay: `${i * -2.5}s` }}
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
