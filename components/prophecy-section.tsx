"use client";

export function ProphecySection() {
  return (
    <div className="w-full">
      <div className="mb-3 flex justify-center">
        <a
          href={process.env.NEXT_PUBLIC_SIGNAL_BUY_URL ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="border-border bg-card/40 hover:border-destructive/70 hover:bg-card/60 focus-visible:ring-destructive relative inline-flex w-full max-w-[32rem] items-center justify-center border px-6 py-3 text-[13px] tracking-[0.55em] text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2"
          aria-label="Buy now"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.55) 1px, rgba(0,0,0,0.55) 2px)",
            }}
          />
          <span className="relative z-[1]">
          BUY NOW
          </span>
        </a>
      </div>
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oobyPL47gwC5k9Awl3JExLsiJZQh0w.png"
        alt="The Prophecy"
        className="h-auto w-full"
      />
    </div>
  );
}
