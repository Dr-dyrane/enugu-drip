import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileNav from '@/components/MobileNav';
import DesktopNav from '@/components/DesktopNav';
import HeroEditorial from '@/components/HeroEditorial';
import StatusLegend from '@/components/StatusLegend';
import ZigZagFeed from '@/components/ZigZagFeed';

const Index = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState<'map' | 'feed' | 'vault'>('feed');

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - Hardware breakpoint rendering */}
      {isMobile ? (
        <MobileNav activeTab={activeTab} onTabChange={setActiveTab} />
      ) : (
        <DesktopNav />
      )}

      {/* Main Content */}
      <main className={isMobile ? 'pt-16 pb-28' : 'pt-16'}>
        {/* Hero Editorial */}
        <HeroEditorial />

        {/* Status Legend */}
        <StatusLegend />

        {/* Zig-Zag Product Feed */}
        <ZigZagFeed />

        {/* Footer tagline */}
        <div className="py-16 px-6 text-center">
          <p className="text-utility text-muted-foreground mb-2">
            BRIDGING LOCAL STREET-WEAR GRIT & GLOBAL LUXURY AESTHETICS
          </p>
          <p className="font-editorial text-3xl md:text-5xl font-bold text-foreground italic">
            No containers. No borders.
            <br />
            <span className="text-drip-acid not-italic">Just Drip.</span>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
