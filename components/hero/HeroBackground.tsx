"use client";

export default function HeroBackground() {
  return (
    <>
      {/* Main Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a78b71]/20 blur-[160px]" />

      {/* Top Glow */}
      <div className="absolute -top-32 right-20 h-72 w-72 rounded-full bg-[#a78b71]/10 blur-[120px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#c9b8a0]/10 blur-[120px]" />

      {/* Dot Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </>
  );
}