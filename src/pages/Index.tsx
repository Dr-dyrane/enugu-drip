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
import MapView from '@/components/MapView';
import VaultView from '@/components/VaultView';

export type NavTab = 'feed' | 'map' | 'vendors' | 'vault';

const Index = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState<NavTab>('feed');

  const renderContent = () => {
    switch (activeTab) {
      case 'map':
        return <MapView />;
      case 'vault':
        return <VaultView />;
      case 'vendors':
        return (
          <div className="px-8 py-20 text-center animate-in fade-in">
            <h2 className="font-editorial text-4xl mb-4">Market Vendors</h2>
            <p className="text-muted-foreground">The digital directory of Enugu's finest thrift traders is coming soon.</p>
          </div>
        );
      case 'feed':
      default:
        return (
          <>
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
          </>
        );
    }
  };

  return (
    <FilterProvider>
      <div className="min-h-screen bg-background text-foreground">
        {isMobile ? (
          <MobileNav activeTab={activeTab as any} onTabChange={setActiveTab as any} />
        ) : (
          <DesktopNav activeTab={activeTab} onTabChange={setActiveTab} />
        )}

        <main className={isMobile ? 'pt-16 pb-28' : 'pt-24'}>
          {renderContent()}
          {activeTab === 'feed' && <Footer />}
        </main>
      </div>
    </FilterProvider>
  );
};

export default Index;
