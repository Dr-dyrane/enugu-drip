import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { FilterProvider } from '@/providers/FilterProvider';
import MobileNav from '@/components/MobileNav';
import DesktopNav from '@/components/DesktopNav';
import HeroEditorial from '@/components/HeroEditorial';
import FeaturedDrops from '@/components/FeaturedDrops';
import FilterBar from '@/components/FilterBar';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

const Index = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState<'map' | 'feed' | 'vault'>('feed');

  return (
    <FilterProvider>
      <div className="min-h-screen bg-background">
        {isMobile ? (
          <MobileNav activeTab={activeTab} onTabChange={setActiveTab} />
        ) : (
          <DesktopNav />
        )}

        <main className={isMobile ? 'pt-16 pb-28' : 'pt-16'}>
          <HeroEditorial />
          <FeaturedDrops />

          {/* Full Catalog */}
          <div className="mt-4">
            <div className="px-4 md:px-8 mb-2">
              <h2 className="font-editorial text-3xl md:text-5xl font-bold text-foreground">
                Shop All
              </h2>
            </div>
            <FilterBar />
            <ProductGrid />
          </div>

          <Footer />
        </main>
      </div>
    </FilterProvider>
  );
};

export default Index;
