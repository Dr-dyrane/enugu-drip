import { Map, LayoutGrid, Archive, Camera, Search, Bell, Menu, User, ShieldCheck, Database, BarChart3, Settings } from 'lucide-react';
import { NavTab } from '@/pages/Index';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import BrandLogo from './BrandLogo';

interface MobileNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onScanOpen: () => void;
}

const MobileNav = ({ activeTab, onTabChange, onScanOpen }: MobileNavProps) => {
  return (
    <>
      {/* Top Hub */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 pt-[env(safe-area-inset-top,12px)] pb-3">
        {/* Left: Profile Sheet */}
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <button className="glass-pill p-3">
                <Menu className="w-5 h-5 text-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background/95 backdrop-blur-xl w-80 border-none p-0 overflow-y-auto">
              <div className="p-6">
                <SheetHeader className="mb-8">
                  <SheetTitle className="text-left">
                    <BrandLogo className="h-8" />
                  </SheetTitle>
                </SheetHeader>
                <ProfileSection />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Center: Logo */}
        <div onClick={() => onTabChange('feed')} className="cursor-pointer">
          <BrandLogo className="h-6" />
        </div>

        {/* Right: Search + Notifications */}
        <div className="flex items-center gap-2">
          <button className="glass-pill p-3">
            <Search className="w-5 h-5 text-foreground" />
          </button>
          <button className="glass-pill p-3 relative">
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-drip-crimson animate-pulse-glow" />
          </button>
        </div>
      </div>

      {/* Bottom Nav System */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-end justify-between px-5 pb-[env(safe-area-inset-bottom,30px)]">
        {/* Left: Nav Pills */}
        <div className="glass-pill flex items-center gap-1 p-1.5">
          {([
            { id: 'map' as NavTab, icon: Map, label: 'Map' },
            { id: 'feed' as NavTab, icon: LayoutGrid, label: 'Feed' },
            { id: 'vault' as NavTab, icon: Archive, label: 'Vault' },
          ]).map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full transition-all duration-300 ${activeTab === id
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              <Icon className="w-4 h-4" />
              {activeTab === id && (
                <span className="text-utility text-[0.6rem] font-semibold">{label}</span>
              )}
            </button>
          ))}
        </div>

        {/* Right: FAB - AI Scanner */}
        <button
          onClick={onScanOpen}
          className="glass-pill p-5 glow-acid group shadow-[0_0_20px_rgba(var(--primary),0.3)]"
        >
          <Camera className="w-6 h-6 text-drip-acid group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </>
  );
};

const ProfileSection = () => (
  <div className="space-y-8 pb-12">
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center relative overflow-hidden ring-1 ring-foreground/5">
        <User className="w-8 h-8 text-muted-foreground" />
      </div>
      <div>
        <p className="font-editorial text-xl text-foreground">Guest User</p>
        <p className="text-utility text-muted-foreground">Level 1 Stalker</p>
      </div>
    </div>

    {/* Body Features (Gradual Reveal Style) */}
    <div className="space-y-4">
      <p className="text-utility text-muted-foreground border-b border-foreground/5 pb-2">BODY FEATURES</p>
      {[
        { label: 'Height', value: 'Not set' },
        { label: 'Build', value: 'Not set' },
        { label: 'Shoulders', value: 'Not set' },
      ].map(({ label, value }) => (
        <div key={label} className="flex justify-between items-center py-1">
          <span className="text-sm text-foreground/70">{label}</span>
          <span className="text-xs text-muted-foreground font-mono bg-secondary/50 px-2 py-1 rounded">{value}</span>
        </div>
      ))}
    </div>

    {/* Admin Portal (New Section) */}
    <div className="space-y-4">
      <p className="text-utility text-primary/80 border-b border-primary/10 pb-2 flex items-center gap-2">
        <ShieldCheck className="w-3 h-3" /> ADMIN PORTAL
      </p>
      {[
        { label: 'Drop Management', icon: Database },
        { label: 'Vendor Verifier', icon: ShieldCheck },
        { label: 'Market Analytics', icon: BarChart3 },
      ].map(({ label, icon: Icon }) => (
        <button key={label} className="w-full flex items-center gap-3 py-2 text-sm text-foreground/80 hover:text-primary transition-colors group">
          <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
          {label}
        </button>
      ))}
    </div>

    {/* Quick Links */}
    <div className="space-y-4">
      <p className="text-utility text-muted-foreground border-b border-foreground/5 pb-2">QUICK LINKS</p>
      {[
        { label: 'Saved Items', icon: Archive },
        { label: 'Order History', icon: LayoutGrid },
        { label: 'Settings', icon: Settings },
      ].map(({ label, icon: Icon }) => (
        <button key={label} className="w-full flex items-center gap-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors group">
          <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
          {label}
        </button>
      ))}
    </div>
  </div>
);

export default MobileNav;
