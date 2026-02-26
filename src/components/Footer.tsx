import { MapPin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-pane mt-8">
      <div className="px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-editorial text-3xl font-bold text-foreground mb-3">DRIP</h3>
            <p className="text-sm text-muted-foreground max-w-sm mb-6">
              AI-powered thrift marketplace turning Enugu's roadside finds into world-class fashion discoveries.
            </p>
            <div className="flex items-center gap-3">
              <button className="glass-pill p-2.5 text-muted-foreground hover:text-foreground"><Instagram className="w-4 h-4" /></button>
              <button className="glass-pill p-2.5 text-muted-foreground hover:text-foreground"><Mail className="w-4 h-4" /></button>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-utility text-muted-foreground mb-4">SHOP</p>
            <div className="space-y-3">
              {['New Drops', 'Women', 'Men', 'Accessories', 'Footwear'].map((l) => (
                <button key={l} className="block text-sm text-foreground/80 hover:text-primary transition-colors">{l}</button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-utility text-muted-foreground mb-4">DISCOVER</p>
            <div className="space-y-3">
              {['Vendor Map', 'Virtual Try-On', 'Style Match AI', 'About DRIP'].map((l) => (
                <button key={l} className="block text-sm text-foreground/80 hover:text-primary transition-colors">{l}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-6">
          <div className="flex items-center gap-2 text-utility text-muted-foreground mb-4 md:mb-0">
            <MapPin className="w-3 h-3 text-drip-acid" />
            <span>ENUGU, NIGERIA</span>
          </div>
          <p className="font-editorial text-xl md:text-2xl font-bold text-foreground italic">
            The Vogue of Thrift
          </p>
          <p className="text-utility text-muted-foreground mt-4 md:mt-0">© 2026 DRIP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
