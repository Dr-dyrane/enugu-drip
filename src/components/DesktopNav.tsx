import { Search, Bell, Camera, MapPin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { NavTab } from '@/pages/Index';
import BrandLogo from './BrandLogo';

interface DesktopNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onScanOpen: () => void;
}

const DesktopNav = ({ activeTab, onTabChange, onScanOpen }: DesktopNavProps) => {
  const items: { id: NavTab; label: string }[] = [
    { id: 'feed', label: 'Feed' },
    { id: 'map', label: 'Map' },
    { id: 'vendors', label: 'Vendors' },
    { id: 'vault', label: 'Vault' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-pane-sm">
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <div className="flex items-center gap-6 cursor-pointer" onClick={() => onTabChange('feed')}>
            <BrandLogo className="h-8" />
            <span className="text-utility text-muted-foreground hidden lg:block">
              042 DIGITAL OKIRIKA
            </span>
          </div>

          {/* Center Nav */}
          <div className="flex items-center gap-1">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`px-5 py-2 text-utility transition-all duration-300 relative ${activeTab === item.id
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary glow-acid" />
                )}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="glass-pill p-2.5 flex items-center gap-2 group">
              <MapPin className="w-4 h-4 text-drip-acid" />
              <span className="text-utility text-muted-foreground group-hover:text-foreground">Enugu</span>
            </button>
            <button className="glass-pill p-2.5">
              <Search className="w-4 h-4 text-foreground" />
            </button>
            <button className="glass-pill p-2.5 relative">
              <Bell className="w-4 h-4 text-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-drip-crimson animate-pulse-glow" />
            </button>
            <button
              onClick={onScanOpen}
              className="glass-pill px-4 py-2.5 flex items-center gap-2 glow-acid group"
            >
              <Camera className="w-4 h-4 text-drip-acid group-hover:scale-110 transition-transform" />
              <span className="text-utility text-drip-acid">SCAN</span>
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
