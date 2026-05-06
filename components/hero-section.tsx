"use client";

import { useCallback, useMemo, useState } from "react";

export function HeroSection() {
  const ca = useMemo(
    () => process.env.NEXT_PUBLIC_SIGNAL_CA ?? "CA: XXXXXXXXXXXXXXXXXXXX",
    []
  );
  const rawCa = useMemo(() => ca.replace(/^CA:\s*/i, ""), [ca]);
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(rawCa);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 900);
    } catch {
      // no-op: clipboard may be blocked
    }
  }, [rawCa]);

  return (
    <div className="w-full">
      <video
        aria-label="The Signal"
        className="block h-auto w-full"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/clt.mp4" type="video/mp4" />
      </video>

      <div className="relative mt-2 md:mt-3">
        <div className="relative mx-auto overflow-hidden border border-white/[0.22] bg-black/55 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:px-4">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.55) 1px, rgba(0,0,0,0.55) 2px)",
            }}
          />

          <div className="relative z-[1] grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <span aria-hidden />

            <div className="min-w-0 text-center font-mono text-[12px] tracking-[0.24em] text-white/85">
              <span className="text-white/55">CA:</span>{" "}
              <span className="break-all">{rawCa}</span>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={onCopy}
                className="border-border hover:border-destructive/70 hover:text-destructive focus-visible:ring-destructive shrink-0 border bg-black/40 px-3 py-1.5 text-[11px] tracking-[0.42em] text-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2"
                aria-label="Copy contract address"
              >
                {copied ? "COPIED" : "COPY"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
