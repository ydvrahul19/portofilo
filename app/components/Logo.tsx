export default function Logo({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer dashed blueprint border */}
      <rect
        x="1.5" y="1.5" width="41" height="41" rx="5"
        stroke="#4a7fb5" strokeWidth="1.2" strokeDasharray="4 2.5"
        opacity="0.55"
      />
      {/* Inner solid corner accents — top-left */}
      <path d="M1.5 10 L1.5 1.5 L10 1.5" stroke="#4a7fb5" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
      {/* bottom-right */}
      <path d="M34 42.5 L42.5 42.5 L42.5 34" stroke="#4a7fb5" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>

      {/* Crosshair dots at centre */}
      <circle cx="22" cy="22" r="1.2" fill="#4a7fb5" opacity="0.35"/>
      {/* Thin horizontal + vertical axis lines */}
      <line x1="6" y1="22" x2="38" y2="22" stroke="#4a7fb5" strokeWidth="0.5" opacity="0.2"/>
      <line x1="22" y1="6" x2="22" y2="38" stroke="#4a7fb5" strokeWidth="0.5" opacity="0.2"/>

      {/* Large accent bar behind letters */}
      <rect x="7" y="17" width="30" height="10" rx="1.5"
        fill="#c4420a" opacity="0.08"
      />

      {/* R */}
      <text
        x="8" y="28"
        fontFamily="'DM Mono', monospace"
        fontSize="13"
        fontWeight="500"
        fill="#1a3a5c"
        letterSpacing="-0.5"
      >R</text>

      {/* K */}
      <text
        x="19" y="28"
        fontFamily="'DM Mono', monospace"
        fontSize="13"
        fontWeight="500"
        fill="#c4420a"
        letterSpacing="-0.5"
      >K</text>

      {/* Y */}
      <text
        x="30" y="28"
        fontFamily="'DM Mono', monospace"
        fontSize="13"
        fontWeight="500"
        fill="#1a3a5c"
        letterSpacing="-0.5"
      >Y</text>

      {/* Bottom micro label */}
      <text
        x="22" y="39"
        fontFamily="'DM Mono', monospace"
        fontSize="4.5"
        fill="#4a7fb5"
        textAnchor="middle"
        letterSpacing="1.2"
        opacity="0.6"
      >DEV</text>
    </svg>
  );
}
