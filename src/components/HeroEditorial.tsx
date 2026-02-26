import heroImage from '@/assets/hero-editorial.jpg';

const HeroEditorial = () => {
  return (
    <div className="relative w-full h-[85vh] md:h-[80vh] overflow-hidden mb-1">
      {/* Background Image Layer */}
      <img
        src={heroImage}
        alt="DRIP Editorial Fashion"
        className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
      />

      <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-background/30" />

      {/* Massive Background Wordmark (Rule 24 & 25) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-5 select-none pointer-events-none">
        <h1 className="font-editorial text-[30vw] font-black leading-none uppercase tracking-tighter">
          DRIP
        </h1>
      </div>

      {/* Editorial Content Hub */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 flex flex-col items-start">
        <div className="max-w-4xl relative z-10">
          <p className="text-[10px] tracking-[0.5em] text-primary font-bold uppercase mb-4 animate-fade-in">
            EST. 042 // ENUGU NIGERIA
          </p>

          <h2
            className="font-editorial text-7xl md:text-9xl lg:text-[12rem] font-bold text-foreground leading-[0.8] mb-8 animate-slide-up tracking-tighter"
          >
            The Vogue
            <br />
            <span className="italic font-medium text-primary">of Thrift</span>
          </h2>

          <div className="flex flex-col md:flex-row md:items-center gap-8 mt-12 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <p className="text-sm md:text-lg text-muted-foreground max-w-sm leading-relaxed border-l border-primary/30 pl-6">
              DIGITIZING THE OKIRIKA CULTURE THROUGH STUDIO-GRADE AI RENDERS AND GEOSPATIAL MARKET TRACKING.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Ogbete', 'New Haven', 'Gariki'].map((loc) => (
                <span key={loc} className="glass-pill px-6 py-3 text-utility text-foreground hover:bg-primary hover:text-primary-foreground cursor-pointer transition-all duration-300">
                  {loc} MARKET
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Scanline Decoration */}
      <div className="absolute top-0 right-12 bottom-0 w-px bg-white/5 hidden md:block" />
      <div className="absolute top-0 right-24 bottom-0 w-px bg-white/5 hidden lg:block" />
    </div>
  );
};

export default HeroEditorial;
