"use client";

export default function NeuralLines() {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none opacity-60"
      viewBox="0 0 1600 900"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="goldStroke">
          <stop offset="0%" stopColor="#c9b8a0" />
          <stop offset="100%" stopColor="#a78b71" />
        </linearGradient>
      </defs>

      <path
        d="M250 180 C550 150 720 280 820 430"
        stroke="url(#goldStroke)"
        strokeWidth="2.5"
        fill="none"
      >
        <animate
          attributeName="opacity"
          values="0.3;0.8;0.3"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>

      <path
        d="M1350 220 C1180 250 1000 340 820 430"
        stroke="url(#goldStroke)"
        strokeWidth="2.5"
        fill="none"
      >
        <animate
          attributeName="opacity"
          values="0.2;0.7;0.2"
          dur="5s"
          repeatCount="indefinite"
        />
      </path>

      <path
        d="M380 700 C540 640 690 530 820 430"
        stroke="url(#goldStroke)"
        strokeWidth="2"
        strokeDasharray="8 10"
        fill="none"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="100"
          to="0"
          dur="6s"
          repeatCount="indefinite"
        />
      </path>

      <circle cx="820" cy="430" r="7" fill="#c9b8a0" />
      <circle cx="250" cy="180" r="5" fill="#a78b71" />
      <circle cx="1350" cy="220" r="5" fill="#a78b71" />
      <circle cx="380" cy="700" r="5" fill="#a78b71" />
    </svg>
  );
}