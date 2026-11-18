export default function BlueprintFooter() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 bottom-0 h-[42vh] min-h-[260px] max-h-[420px] pointer-events-none overflow-hidden select-none z-[-1] text-ink/25"
    >
      {/* Persistent Bottom Blueprint Linework Overlay */}
      <svg
        className="w-full h-full block"
        viewBox="0 0 1440 360"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        <defs>
          <pattern
            id="blueprint-footer-grid"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 64 0 L 0 0 0 64"
              stroke="currentColor"
              strokeOpacity="0.25"
              strokeWidth="0.65"
            />
          </pattern>
        </defs>

        <rect width="1440" height="360" fill="url(#blueprint-footer-grid)" />

        {/* Skyline & Building Elevation Silhouettes */}
        <path
          pathLength={100}
          className="arch-draw-line arch-draw-d1"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 0 320 L 130 320 L 130 220 L 200 220 L 200 265 L 265 265 L 265 145 L 350 145 L 350 100 L 400 100 L 400 145 L 455 145 L 455 280 L 585 280 L 585 190 L 675 190 L 675 320 L 905 320 L 905 170 L 990 115 L 1075 170 L 1075 275 L 1155 275 L 1155 110 L 1260 110 L 1260 235 L 1350 235 L 1350 175 L 1440 175"
        />

        {/* Datum Reference & Structural Axis Lines */}
        <line
          pathLength={100}
          className="arch-draw-line arch-draw-d2"
          stroke="#c8102e"
          strokeOpacity="0.45"
          strokeWidth="0.95"
          x1="48"
          y1="84"
          x2="1392"
          y2="84"
        />
        <line
          pathLength={100}
          className="arch-draw-line arch-draw-d3"
          stroke="currentColor"
          strokeOpacity="0.6"
          strokeWidth="0.8"
          x1="200"
          y1="28"
          x2="200"
          y2="344"
        />
        <line
          pathLength={100}
          className="arch-draw-line arch-draw-d4"
          stroke="currentColor"
          strokeOpacity="0.6"
          strokeWidth="0.8"
          x1="1240"
          y1="28"
          x2="1240"
          y2="344"
        />

        {/* Arched Colonnade & Staircase Elevation */}
        <path
          pathLength={100}
          className="arch-draw-line arch-draw-d1"
          stroke="currentColor"
          strokeOpacity="0.7"
          strokeWidth="0.95"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 420 330 L 420 198 A 42 42 0 0 1 504 198 L 504 330 M 504 330 L 504 198 A 42 42 0 0 1 588 198 L 588 330 M 588 330 L 588 198 A 42 42 0 0 1 672 198 L 672 330"
        />
        <path
          pathLength={100}
          className="arch-draw-line arch-draw-d3"
          stroke="#c8102e"
          strokeOpacity="0.48"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 735 320 L 765 320 L 765 298 L 795 298 L 795 276 L 825 276 L 825 254 L 855 254 L 855 232 L 885 232"
        />

        {/* Floating Drafting Triangle */}
        <g className="arch-drift-slow">
          <polygon
            pathLength={100}
            className="arch-draw-line arch-draw-d2"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="0.85"
            points="1030,68 1105,188 955,188"
          />
        </g>
      </svg>

      {/* Bottom-Left Blueprint Floor Plan */}
      <div className="hidden sm:block absolute bottom-6 left-6 w-44 md:w-52 opacity-75">
        <svg className="w-full h-auto block" viewBox="0 0 220 140" fill="none">
          <path
            pathLength={100}
            className="arch-plan-draw arch-plan-s1"
            stroke="currentColor"
            strokeWidth="1.6"
            d="M 18 22 L 202 22 L 202 126 L 18 126 Z"
          />
          <path
            pathLength={100}
            className="arch-plan-draw arch-plan-s2"
            stroke="currentColor"
            strokeWidth="1.3"
            d="M 122 22 L 122 60 M 122 82 L 122 126 M 122 82 L 202 82 M 18 76 L 68 76 M 90 76 L 122 76"
          />
          <path
            pathLength={100}
            className="arch-plan-draw arch-plan-s3"
            stroke="#c8102e"
            strokeOpacity="0.7"
            strokeWidth="1"
            d="M 122 60 L 100 60 A 22 22 0 0 0 122 82 M 68 76 L 68 54 A 22 22 0 0 1 90 76"
          />
          <path
            pathLength={100}
            className="arch-plan-draw arch-plan-s4"
            stroke="currentColor"
            strokeOpacity="0.65"
            strokeWidth="0.85"
            d="M 28 90 L 28 114 L 58 114 L 58 90 Z M 35 90 L 35 114 M 43 90 L 43 114 M 50 90 L 50 114 M 136 34 L 186 34 L 186 52 L 136 52 Z"
          />
          <path
            pathLength={100}
            className="arch-plan-draw arch-plan-s5"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="0.7"
            d="M 18 10 L 202 10 M 18 6 L 18 14 M 122 6 L 122 14 M 202 6 L 202 14"
          />
        </svg>
      </div>

      {/* Bottom-Right Architectural Compass Rose */}
      <div className="absolute bottom-6 right-6 w-20 h-20 md:w-28 md:h-28 opacity-80">
        <svg className="w-full h-full block" viewBox="0 0 120 120" fill="none">
          <g className="arch-compass-ring">
            <circle
              cx="60"
              cy="60"
              r="53"
              stroke="currentColor"
              strokeOpacity="0.55"
              strokeWidth="0.8"
              strokeDasharray="3 4"
            />
            <circle
              cx="60"
              cy="60"
              r="46"
              stroke="currentColor"
              strokeOpacity="0.75"
              strokeWidth="0.65"
              strokeDasharray="14 6 2 6"
            />
            <path
              d="M 60 5 L 60 11 M 60 109 L 60 115 M 5 60 L 11 60 M 109 60 L 115 60 M 21 21 L 25 25 M 95 95 L 99 99 M 99 21 L 95 25 M 25 95 L 21 99"
              stroke="currentColor"
              strokeWidth="0.85"
            />
          </g>

          <circle
            cx="60"
            cy="60"
            r="33"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="0.75"
          />
          <line
            x1="60"
            y1="22"
            x2="60"
            y2="98"
            stroke="currentColor"
            strokeOpacity="0.4"
            strokeWidth="0.6"
          />
          <line
            x1="22"
            y1="60"
            x2="98"
            y2="60"
            stroke="currentColor"
            strokeOpacity="0.4"
            strokeWidth="0.6"
          />

          <text
            x="60"
            y="14"
            fill="#c8102e"
            fontSize="7.5"
            fontWeight="700"
            letterSpacing="0.08em"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="var(--font-mono)"
          >
            N
          </text>
          <text
            x="106"
            y="60"
            fill="currentColor"
            fontSize="7"
            fontWeight="600"
            letterSpacing="0.08em"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="var(--font-mono)"
          >
            E
          </text>
          <text
            x="60"
            y="106"
            fill="currentColor"
            fontSize="7"
            fontWeight="600"
            letterSpacing="0.08em"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="var(--font-mono)"
          >
            S
          </text>
          <text
            x="14"
            y="60"
            fill="currentColor"
            fontSize="7"
            fontWeight="600"
            letterSpacing="0.08em"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="var(--font-mono)"
          >
            W
          </text>

          <g className="arch-compass-needle">
            <polygon points="60,23 64,60 60,55 56,60" fill="#c8102e" />
            <polygon
              points="60,97 63.5,60 60,64 56.5,60"
              stroke="currentColor"
              strokeWidth="0.8"
              fill="currentColor"
              fillOpacity="0.15"
            />
            <circle cx="60" cy="60" r="2.2" fill="#c8102e" />
          </g>
        </svg>
      </div>
    </div>
  );
}
