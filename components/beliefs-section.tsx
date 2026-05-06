"use client";

const beliefsImage =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rqIdOIAxOGVppmO3dRZKHIVZZTylVs.png";

const xUrl =
  process.env.NEXT_PUBLIC_SIGNAL_X_URL ?? "https://x.com/";

function IconX({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function BeliefsSection() {
  return (
    <div className="flex flex-col">
      <img
        src={beliefsImage}
        alt="Our Beliefs"
        className="h-auto w-full"
      />
      <div className="mt-5 flex justify-center [&>a:not(:first-of-type)]:hidden">
        <a
          href={xUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground inline-flex items-center justify-center p-2 transition-colors hover:text-destructive md:p-1"
          aria-label="X (Twitter)"
        >
          <IconX className="size-12 md:size-9" />
        </a>
      </div>
    </div>
  );
}
