function PlayTriangle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

export function TrailerTeaserSection() {
  return (
    <section
      className="relative mt-10 md:mt-14"
      aria-label="The Signal trailer — coming soon"
    >
      <h2 className="mb-6 text-center text-2xl tracking-wider md:text-3xl">
        THE MOVIE
      </h2>
      <div className="relative overflow-hidden border border-white/[0.28] bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.45) 1px, rgba(0,0,0,0.45) 2px)",
          }}
        />
        <header className="relative z-[1] border-b border-white/15 bg-black/90 px-3 py-2.5 text-center md:px-6 md:py-3">
          <p className="font-mono text-[9px] tracking-[0.42em] text-white/55 sm:text-[10px]">
            OFFICIAL TRAILER TEASER
          </p>
          <p className="mt-1.5 font-mono text-[11px] tracking-[0.65em] text-destructive sm:text-xs md:tracking-[0.75em]">
            COMING SOON
          </p>
        </header>

        <div className="relative w-full bg-black">
          <div className="relative aspect-video w-full overflow-hidden">
            <video
              aria-label="THE SIGNAL — teaser video"
              className="absolute inset-0 z-[1] h-full w-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/yss.mp4" type="video/mp4" />
            </video>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[2] shadow-[inset_0_0_120px_rgba(0,0,0,0.72)]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] bg-gradient-to-t from-black via-black/90 to-transparent pt-28 pb-6 md:pt-36 md:pb-8" />

          <div className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center bg-black/15" />

          <button
            type="button"
            className="border-border hover:border-destructive/70 absolute left-1/2 top-1/2 z-[8] flex h-[4.25rem] w-[4.25rem] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 bg-black/50 text-white backdrop-blur-[3px] transition-all hover:scale-[1.06] hover:bg-black/65 hover:text-destructive focus-visible:ring-2 focus-visible:ring-destructive focus-visible:outline-none md:h-[4.75rem] md:w-[4.75rem]"
            aria-label="Play teaser"
          >
            <PlayTriangle className="ml-[5px] h-11 w-11 md:h-[3rem] md:w-[3rem]" />
          </button>

          <div className="pointer-events-none absolute inset-x-0 bottom-[6%] z-[4] px-4 text-center md:bottom-[8%]">
            <p
              className="mx-auto max-w-5xl px-2 font-mono text-base font-normal uppercase leading-tight tracking-[0.12em] text-white sm:text-xl md:text-2xl md:tracking-[0.14em] lg:text-[1.625rem]"
              style={{
                textShadow:
                  "0 2px 32px rgb(0,0,0), 1px 0 0 rgb(210,55,55,0.22), -1px 0 0 rgb(80,140,220,0.18)",
              }}
            >
              Are you ready for{" "}
              <span className="text-destructive">the signal?</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
