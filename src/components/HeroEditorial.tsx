import heroImage from '@/assets/hero-editorial.jpg';

const HeroEditorial = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden mb-2">
      {/* Hero Image */}
      <img
        src={heroImage}
        alt="DRIP Editorial"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
        <div className="max-w-3xl">
          <span className="text-utility text-drip-acid mb-4 block animate-fade-in">
            042 DIGITAL OKIRIKA WHITELIST
          </span>
          <h2
            className="text-editorial text-5xl md:text-8xl lg:text-9xl font-bold text-foreground mb-4 animate-slide-up"
          >
            The Vogue
            <br />
            <span className="italic font-normal">of Thrift</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-md animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            AI-powered renders. Map-based discovery. Turning Enugu's 
            roadside finds into world-class billboard displays.
          </p>

          {/* Location chips */}
          <div className="flex flex-wrap gap-2 mt-6 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            {['Ogbete', 'New Haven', 'Gariki', 'Abakpa'].map((loc) => (
              <span key={loc} className="glass-pill px-4 py-2 text-utility text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                📍 {loc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroEditorial;
