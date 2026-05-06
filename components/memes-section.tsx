"use client";

import Image from "next/image";

const memes = [
  {
    image: "/memes/he-received-the-signal.png",
    alt: "HE RECEIVED THE SIGNAL",
    width: 237,
    height: 184,
  },
  {
    image: "/memes/you-are-late.png",
    alt: "YOU ARE LATE.",
    width: 163,
    height: 168,
  },
  {
    image: "/memes/non-believers-will-fomo.png",
    alt: "THE NON BELIEVERS WILL FOMO.",
    width: 215,
    height: 169,
  },
  {
    image: "/memes/we-do-not-follow-we-infect.png",
    alt: "WE DO NOT FOLLOW. WE INFECT.",
    width: 207,
    height: 166,
  },
  {
    image: "/memes/the-chart-is-temporary-the-signal-is-forever.png",
    alt: "THE CHART IS TEMPORARY. THE SIGNAL IS FOREVER.",
    width: 202,
    height: 166,
  },
  {
    image: "/memes/one-day-you-will-thank-us.png",
    alt: "ONE DAY YOU WILL THANK US.",
    width: 182,
    height: 167,
  },
];

function splitLeadingImages<T extends (typeof memes)[number][]>(items: T) {
  let i = 0;
  while (i < items.length && "image" in items[i] && items[i].image) i += 1;
  return { leading: items.slice(0, i), grid: items.slice(i) };
}

export function MemesSection() {
  const { leading, grid } = splitLeadingImages(memes);

  return (
    <div className="mt-8">
      <h2 className="text-2xl md:text-3xl text-center mb-6 tracking-wider">THE MEMES</h2>

      {leading.length > 0 && (
        <>
          {/* Móvil: grid (sin carril horizontal — evita scroll-x choto y peleas con el scroll vertical) */}
          <div className="mx-auto mb-6 grid max-w-md grid-cols-2 gap-x-4 gap-y-6 justify-items-center px-2 sm:max-w-lg md:hidden">
            {leading.map((m, index) =>
              "image" in m && m.image ? (
                <Image
                  key={index}
                  src={m.image}
                  alt={m.alt}
                  width={m.width}
                  height={m.height}
                  className="h-auto w-auto max-w-[min(42vw,210px)] object-contain sm:max-w-[200px]"
                  sizes="(max-width: 640px) 42vw, 200px"
                />
              ) : null
            )}
          </div>

          {/* md+: una fila repartida */}
          <div className="mb-6 hidden w-full md:flex md:min-w-0 md:flex-nowrap md:items-center md:justify-between md:gap-3 lg:gap-4">
            {leading.map((m, index) =>
              "image" in m && m.image ? (
                <Image
                  key={index}
                  src={m.image}
                  alt={m.alt}
                  width={m.width}
                  height={m.height}
                  className="h-auto w-auto shrink-0"
                  sizes="(max-width: 1408px) 16vw, 240px"
                />
              ) : null
            )}
          </div>
        </>
      )}

      {grid.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {grid.map((meme, index) => (
            <div
              key={index}
              className="border-2 border-border bg-card/50 aspect-square flex flex-col items-center justify-center p-3 text-center relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 ${"dark" in meme && meme.dark ? "bg-black/80" : "bg-gray-900/60"}`}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-16 h-20 bg-gradient-to-b from-gray-600 to-gray-900 rounded-t-full" />
              </div>
              <p className="relative z-10 text-xs md:text-sm tracking-wider leading-tight">
                {"text" in meme ? meme.text : ""}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
