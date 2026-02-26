import { Search, Bell, Camera, MapPin } from 'lucide-react';

const DesktopNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-pane-sm">
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <h1 className="font-editorial text-3xl font-bold text-foreground tracking-wider">
              DRIP
            </h1>
            <span className="text-utility text-muted-foreground hidden lg:block">
              042 DIGITAL OKIRIKA
            </span>
          </div>

          {/* Center Nav */}
          <div className="flex items-center gap-1">
            {['Feed', 'Map', 'Vendors', 'Vault'].map((item, i) => (
              <button
                key={item}
                className={`px-5 py-2 text-utility transition-all duration-300 ${
                  i === 0
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item}
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
            <button className="glass-pill px-4 py-2.5 flex items-center gap-2 glow-acid">
              <Camera className="w-4 h-4 text-drip-acid" />
              <span className="text-utility text-drip-acid">SCAN</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
