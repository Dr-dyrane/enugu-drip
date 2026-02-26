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
import ScanModal from '@/components/ScanModal';

import VendorsView from '@/components/VendorsView';

export type NavTab = 'feed' | 'map' | 'vendors' | 'vault';

const Index = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState<NavTab>('feed');
  const [isScanOpen, setIsScanOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'map':
        return <MapView />;
      case 'vault':
        return <VaultView />;
      case 'vendors':
        return <VendorsView />;
      case 'feed':
      default:
        return (
          <>
            <HeroEditorial />
            <div className="py-20">
              <FeaturedDrops />
            </div>

            {/* Full Catalog */}
            <div className="mt-12">
              <div className="px-4 md:px-8 mb-12 flex items-baseline justify-between">
                <h2 className="font-editorial text-6xl md:text-9xl font-bold text-foreground tracking-tighter">
                  The <span className="italic font-medium">Archive</span>
                </h2>
                <span className="text-utility text-muted-foreground hidden md:block tracking-[0.5em] uppercase text-[10px]">
                  042 DIGITAL OKIRIKA // CURATED SPREAD
                </span>
              </div>
              <FilterBar />
              <div className="mt-8">
                <ProductGrid />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <FilterProvider>
      <div className="min-h-screen bg-background text-foreground">
        {isMobile ? (
          <MobileNav
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onScanOpen={() => setIsScanOpen(true)}
          />
        ) : (
          <DesktopNav
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onScanOpen={() => setIsScanOpen(true)}
          />
        )}

        <main className={isMobile ? 'pt-16 pb-28' : 'pt-24'}>
          {renderContent()}
          {activeTab === 'feed' && <Footer />}
        </main>

        <ScanModal isOpen={isScanOpen} onClose={() => setIsScanOpen(false)} />
      </div>
    </FilterProvider>
  );
};

export default Index;
