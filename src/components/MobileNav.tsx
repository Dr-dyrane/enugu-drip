import { Map, LayoutGrid, Archive, Camera, Search, Bell, Menu, User } from 'lucide-react';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

type NavTab = 'map' | 'feed' | 'vault';

interface MobileNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

const MobileNav = ({ activeTab, onTabChange }: MobileNavProps) => {
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
            <SheetContent side="left" className="bg-background/95 backdrop-blur-xl border-none w-80">
              <SheetHeader>
                <SheetTitle className="font-editorial text-2xl text-foreground">DRIP</SheetTitle>
              </SheetHeader>
              <div className="mt-8 space-y-6">
                <ProfileSection />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Center: Logo */}
        <h1 className="font-editorial text-xl font-bold text-foreground tracking-wider">
          DRIP
        </h1>

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
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full transition-all duration-300 ${
                activeTab === id
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
        <button className="glass-pill p-5 glow-acid group">
          <Camera className="w-6 h-6 text-drip-acid group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </>
  );
};

const ProfileSection = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
        <User className="w-7 h-7 text-muted-foreground" />
      </div>
      <div>
        <p className="font-editorial text-lg text-foreground">Guest User</p>
        <p className="text-utility text-muted-foreground">Set up your profile</p>
      </div>
    </div>

    <div className="space-y-1">
      <p className="text-utility text-muted-foreground mb-3">BODY FEATURES</p>
      {[
        { label: 'Height', value: 'Not set' },
        { label: 'Build', value: 'Not set' },
        { label: 'Shoulders', value: 'Not set' },
      ].map(({ label, value }) => (
        <div key={label} className="flex justify-between py-3 border-b-0">
          <span className="text-sm text-foreground">{label}</span>
          <span className="text-sm text-muted-foreground">{value}</span>
        </div>
      ))}
    </div>

    <div className="space-y-1">
      <p className="text-utility text-muted-foreground mb-3">QUICK LINKS</p>
      {['Saved Items', 'Order History', 'Nearby Vendors', 'Settings'].map((link) => (
        <button key={link} className="w-full text-left py-3 text-sm text-foreground hover:text-primary transition-colors border-b border-secondary">
          {link}
        </button>
      ))}
    </div>
  </div>
);

export default MobileNav;
