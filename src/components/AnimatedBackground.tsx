export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-32 h-[36rem] w-[36rem] rounded-full bg-[oklch(0.5_0.25_300/0.25)] blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-[oklch(0.55_0.2_200/0.22)] blur-3xl animate-blob-delay" />
      <div className="absolute -bottom-40 left-1/3 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.5_0.22_350/0.18)] blur-3xl animate-blob" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
