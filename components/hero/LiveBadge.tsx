"use client";

export default function LiveBadge() {
  return (
    <div
      className="
      glass
      inline-flex
      items-center
      gap-3
      rounded-full
      border
      border-white/10
      px-5
      py-3
      backdrop-blur-xl
      shadow-[0_0_50px_rgba(167,139,113,.15)]
      "
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400"></span>
      </span>

      <span className="text-[10px] font-bold tracking-[0.3em] text-green-400">
        LIVE
      </span>

      <span className="text-sm text-white">
        Appointments Open Today
      </span>
    </div>
  );
}