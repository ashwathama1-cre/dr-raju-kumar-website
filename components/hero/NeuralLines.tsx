"use client";

export default function NeuralLines() {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none"
      viewBox="0 0 1400 900"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c9b8a0" />
          <stop offset="100%" stopColor="#a78b71" />
        </linearGradient>
      </defs>

      <path
        d="M220 220 C520 160 650 350 780 430"
        stroke="url(#goldLine)"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />

      <path
        d="M1180 200 C950 250 860 360 780 430"
        stroke="url(#goldLine)"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />

      <path
        d="M320 700 C520 620 660 520 780 430"
        stroke="url(#goldLine)"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />

      <circle cx="780" cy="430" r="6" fill="#c9b8a0" />
      <circle cx="220" cy="220" r="5" fill="#a78b71" />
      <circle cx="1180" cy="200" r="5" fill="#a78b71" />
      <circle cx="320" cy="700" r="5" fill="#a78b71" />
    </svg>
  );
}