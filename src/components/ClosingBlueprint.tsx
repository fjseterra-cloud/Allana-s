import { useEffect, useRef } from 'react';

export function ClosingBlueprintBackground() {
  const layerBackRef = useRef<HTMLDivElement>(null);
  const layerFrontRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const isTouch =
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: coarse)').matches;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number | null = null;
    const maxShift = 14;

    const onMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      targetX = -nx * maxShift;
      targetY = -ny * maxShift;
    };

    const onScroll = () => {
      const scrollMax = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const progress = window.scrollY / scrollMax;
      targetY = -(progress - 0.5) * maxShift;
      targetX = Math.sin(progress * Math.PI) * (maxShift * 0.35);
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (layerBackRef.current) {
        layerBackRef.current.style.transform = `translate3d(${(currentX * 0.45).toFixed(2)}px, ${(currentY * 0.45).toFixed(2)}px, 0)`;
      }
      if (layerFrontRef.current) {
        layerFrontRef.current.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      }

      rafId = window.requestAnimationFrame(tick);
    };

    if (isTouch) {
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    } else {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
    }

    rafId = window.requestAnimationFrame(tick);

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Layer 1: Architectural Grid & Skyline / Datum Lines */}
      <div
        ref={layerBackRef}
        className="absolute -inset-4 opacity-50 will-change-transform"
      >
        <svg
          className="w-full h-full block"
          viewBox="0 0 1440 360"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <defs>
            <pattern
              id="closing-arch-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                stroke="rgba(255,255,255,0.045)"
                strokeWidth="0.7"
              />
            </pattern>
          </defs>
          <rect width="1440" height="360" fill="url(#closing-arch-grid)" />

          {/* Architectural Skyline & Elevation Profile */}
          <path
            pathLength={100}
            className="arch-draw-line arch-draw-d1"
            stroke="rgba(217,217,217,0.18)"
            strokeWidth="0.95"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 0 300 L 120 300 L 120 210 L 190 210 L 190 250 L 250 250 L 250 135 L 335 135 L 335 90 L 385 90 L 385 135 L 440 135 L 440 270 L 560 270 L 560 185 L 650 185 L 650 300 L 890 300 L 890 165 L 975 110 L 1060 165 L 1060 265 L 1140 265 L 1140 105 L 1245 105 L 1245 225 L 1335 225 L 1335 160 L 1440 160"
          />

          {/* Horizontal Red Architectural Datum Line */}
          <line
            pathLength={100}
            className="arch-draw-line arch-draw-d2"
            stroke="rgba(200,16,46,0.34)"
            strokeWidth="0.9"
            x1="60"
            y1="72"
            x2="1380"
            y2="72"
          />

          {/* Vertical Structural Axis Lines */}
          <line
            pathLength={100}
            className="arch-draw-line arch-draw-d3"
            stroke="rgba(163,139,121,0.22)"
            strokeWidth="0.75"
            x1="180"
            y1="24"
            x2="180"
            y2="336"
          />
          <line
            pathLength={100}
            className="arch-draw-line arch-draw-d4"
            stroke="rgba(163,139,121,0.22)"
            strokeWidth="0.75"
            x1="1260"
            y1="24"
            x2="1260"
            y2="336"
          />
        </svg>
      </div>

      {/* Layer 2: Colonnade Arches, Staircase & Floating Drafting Geometry */}
      <div
        ref={layerFrontRef}
        className="absolute -inset-4 opacity-55 will-change-transform"
      >
        <svg
          className="w-full h-full block"
          viewBox="0 0 1440 360"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          {/* Arched Colonnade */}
          <path
            pathLength={100}
            className="arch-draw-line arch-draw-d1"
            stroke="rgba(163,139,121,0.26)"
            strokeWidth="0.95"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 410 315 L 410 185 A 42 42 0 0 1 494 185 L 494 315 M 494 315 L 494 185 A 42 42 0 0 1 578 185 L 578 315 M 578 315 L 578 185 A 42 42 0 0 1 662 185 L 662 315"
          />
          <line
            pathLength={100}
            className="arch-draw-line arch-draw-d2"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="0.8"
            x1="395"
            y1="130"
            x2="678"
            y2="130"
          />

          {/* Stepped Architectural Staircase Elevation */}
          <path
            pathLength={100}
            className="arch-draw-line arch-draw-d3"
            stroke="rgba(200,16,46,0.36)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 730 308 L 758 308 L 758 286 L 786 286 L 786 264 L 814 264 L 814 242 L 842 242 L 842 220 L 870 220"
          />

          {/* Gently Drifting Drafting Triangle */}
          <g className="arch-drift-slow">
            <polygon
              pathLength={100}
              className="arch-draw-line arch-draw-d2"
              stroke="rgba(217,217,217,0.16)"
              strokeWidth="0.85"
              points="1030,68 1105,186 955,186"
            />
          </g>

          {/* Subtle Architectural Floor-Plan Vignette (Left Backdrop) */}
          <g transform="translate(80, 155)" opacity="0.65">
            <path
              pathLength={100}
              className="arch-plan-draw arch-plan-s1"
              stroke="rgba(217,217,217,0.28)"
              strokeWidth="1.4"
              d="M 0 0 L 180 0 L 180 110 L 0 110 Z"
            />
            <path
              pathLength={100}
              className="arch-plan-draw arch-plan-s2"
              stroke="rgba(217,217,217,0.24)"
              strokeWidth="1.2"
              d="M 105 0 L 105 42 M 105 64 L 105 110 M 105 64 L 180 64 M 0 58 L 52 58 M 74 58 L 105 58"
            />
            <path
              pathLength={100}
              className="arch-plan-draw arch-plan-s3"
              stroke="rgba(200,16,46,0.42)"
              strokeWidth="0.95"
              d="M 105 42 L 83 42 A 22 22 0 0 0 105 64 M 52 58 L 52 36 A 22 22 0 0 1 74 58"
            />
            <path
              pathLength={100}
              className="arch-plan-draw arch-plan-s4"
              stroke="rgba(163,139,121,0.3)"
              strokeWidth="0.8"
              d="M 12 72 L 12 98 L 44 98 L 44 72 Z M 20 72 L 20 98 M 28 72 L 28 98 M 36 72 L 36 98"
            />
            <path
              pathLength={100}
              className="arch-plan-draw arch-plan-s5"
              stroke="rgba(255,255,255,0.16)"
              strokeWidth="0.7"
              d="M 0 -12 L 180 -12 M 0 -16 L 0 -8 M 105 -16 L 105 -8 M 180 -16 L 180 -8"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function ArchitecturalCompass({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none select-none opacity-75 ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-24 h-24 md:w-28 md:h-28 block"
        viewBox="0 0 120 120"
        fill="none"
      >
        {/* Counter-Rotating Outer Drafting Ring */}
        <g className="arch-compass-ring">
          <circle
            cx="60"
            cy="60"
            r="53"
            stroke="rgba(217,217,217,0.22)"
            strokeWidth="0.8"
            strokeDasharray="3 4"
          />
          <circle
            cx="60"
            cy="60"
            r="46"
            stroke="rgba(163,139,121,0.38)"
            strokeWidth="0.65"
            strokeDasharray="14 6 2 6"
          />
          <path
            d="M 60 5 L 60 11 M 60 109 L 60 115 M 5 60 L 11 60 M 109 60 L 115 60 M 21 21 L 25 25 M 95 95 L 99 99 M 99 21 L 95 25 M 25 95 L 21 99"
            stroke="rgba(217,217,217,0.35)"
            strokeWidth="0.85"
          />
        </g>

        {/* Inner Fine Circle & Crosshairs */}
        <circle
          cx="60"
          cy="60"
          r="33"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="0.75"
        />
        <line
          x1="60"
          y1="22"
          x2="60"
          y2="98"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="0.6"
        />
        <line
          x1="22"
          y1="60"
          x2="98"
          y2="60"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="0.6"
        />

        {/* Cardinal Markers */}
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
          fill="rgba(217,217,217,0.65)"
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
          fill="rgba(217,217,217,0.65)"
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
          fill="rgba(217,217,217,0.65)"
          fontSize="7"
          fontWeight="600"
          letterSpacing="0.08em"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="var(--font-mono)"
        >
          W
        </text>

        {/* Slowly Settling Red / Silver Needle */}
        <g className="arch-compass-needle">
          <polygon points="60,23 64,60 60,55 56,60" fill="#c8102e" />
          <polygon
            points="60,97 63.5,60 60,64 56.5,60"
            stroke="rgba(217,217,217,0.55)"
            strokeWidth="0.8"
            fill="rgba(255,255,255,0.12)"
          />
          <circle cx="60" cy="60" r="2.2" fill="#c8102e" />
        </g>

        <circle
          cx="60"
          cy="60"
          r="4"
          stroke="rgba(217,217,217,0.5)"
          strokeWidth="0.8"
        />
      </svg>
    </div>
  );
}
