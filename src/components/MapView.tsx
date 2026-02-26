import { MapPin } from 'lucide-react';

const MapView = () => {
    const markets = [
        { name: 'Ogbete Main Market', coords: { x: '45%', y: '40%' }, vendorCount: 12 },
        { name: 'New Haven Market', coords: { x: '60%', y: '35%' }, vendorCount: 8 },
        { name: 'Gariki Market', coords: { x: '35%', y: '70%' }, vendorCount: 15 },
        { name: 'Abakpa Market', coords: { x: '70%', y: '55%' }, vendorCount: 5 },
    ];

    return (
        <div className="animate-in fade-in duration-700 h-[calc(100vh-120px)] relative overflow-hidden bg-background">
            {/* Liquid Map Background (Stylized) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative h-full flex items-center justify-center">
                <div className="w-full max-w-4xl aspect-video glass-pane relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="font-editorial text-4xl text-muted-foreground/30 select-none">ENUGU 042</p>
                    </div>

                    {/* Interactive Market Pins */}
                    {markets.map((market) => (
                        <div
                            key={market.name}
                            className="absolute group cursor-pointer"
                            style={{ left: market.coords.x, top: market.coords.y }}
                        >
                            <div className="relative">
                                <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform duration-500" />
                                <MapPin className="w-8 h-8 text-primary relative z-10 transition-transform group-hover:scale-110" />

                                {/* Info Label revealed on hover (Rule 16) */}
                                <div className="absolute left-10 top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 whitespace-nowrap z-20">
                                    <div className="glass-pane-sm p-3">
                                        <p className="font-editorial text-lg text-foreground">{market.name}</p>
                                        <p className="text-utility text-muted-foreground">{market.vendorCount} VENDORS DROPPING</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Map Controls */}
                    <div className="absolute bottom-8 right-8 flex flex-col gap-2">
                        {['+', '-'].map((btn) => (
                            <button key={btn} className="glass-pill w-12 h-12 flex items-center justify-center text-xl text-foreground font-medium">
                                {btn}
                            </button>
                        ))}
                    </div>

                    {/* Floating Discovery Card */}
                    <div className="absolute top-8 left-8 w-64 glass-pane p-5 animate-slide-up">
                        <h3 className="font-editorial text-xl mb-2">Market Discovery</h3>
                        <p className="text-sm text-muted-foreground mb-4">Real-time drops from local fashion hubs in Enugu State.</p>
                        <button className="w-full py-2 bg-foreground text-background text-utility">VIEW ALL TRADERS</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapView;
