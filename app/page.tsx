import { HeroSection } from "@/components/hero-section";
import { ProphecySection } from "@/components/prophecy-section";
import { BeliefsSection } from "@/components/beliefs-section";
import { SymbolCard } from "@/components/symbol-card";
import { CultCard } from "@/components/cult-card";
import { TokenCard } from "@/components/token-card";
import { JoinCard } from "@/components/join-card";
import { TrailerTeaserSection } from "@/components/trailer-teaser-section";
import { MemesSection } from "@/components/memes-section";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-[min(88rem,calc(100vw-1rem))] bg-background p-2 md:p-4">
      {/* Top section - Hero and Prophecy/Beliefs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4 mb-2 md:mb-4">
        {/* Hero - takes 2 columns */}
        <div className="lg:col-span-2">
          <HeroSection />
        </div>
        
        {/* Right column - Prophecy and Beliefs */}
        <div className="flex flex-col gap-2 md:gap-4">
          <ProphecySection />
          <BeliefsSection />
        </div>
      </div>
      
      {/* Bottom cards section — mismo marco alto; JOIN usa contain para que no se corte */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        <div className="relative aspect-[270/292] w-full overflow-hidden bg-background">
          <SymbolCard />
        </div>
        <div className="relative aspect-[270/292] w-full overflow-hidden bg-background">
          <CultCard />
        </div>
        <div className="relative aspect-[270/292] w-full overflow-hidden bg-background">
          <TokenCard />
        </div>
        <div className="relative aspect-[270/292] w-full overflow-hidden bg-background">
          <JoinCard />
        </div>
      </div>

      <TrailerTeaserSection />

      {/* Memes section */}
      <MemesSection />
      
      {/* Footer */}
      <footer className="mt-8 text-center text-muted-foreground text-sm tracking-wider py-4 border-t border-border">
        <p>THE SIGNAL IS ETERNAL</p>
      </footer>
    </main>
  );
}
