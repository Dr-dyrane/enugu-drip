import React, { useState, useMemo } from 'react';
import Map, { Marker, NavigationControl, Popup } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, Navigation, Info, Clock, Users, ArrowRight } from 'lucide-react';
import { Drawer } from 'vaul';
import { useTheme } from 'next-themes';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const markets = [
    {
        id: 1,
        name: 'Ogbete Main Market',
        lat: 6.4483,
        lng: 7.5139,
        vendorCount: 12,
        status: 'High Activity',
        description: 'The heartbeat of Enugu fashion. Premium vintage drops often appear near the main entrance around 5 AM.'
    },
    {
        id: 2,
        name: 'New Haven Market',
        lat: 6.4583,
        lng: 7.5239,
        vendorCount: 8,
        status: 'Emerging',
        description: 'Boutique-adjacent finds. Known for high-quality denim and curated streetwear selections.'
    },
    {
        id: 3,
        name: 'Gariki Market',
        lat: 6.4183,
        lng: 7.5039,
        vendorCount: 15,
        status: 'Active Now',
        description: 'Maximum volume. This is where bulk drops happen. Requires patience and sharp eyes.'
    },
    {
        id: 4,
        name: 'Abakpa Market',
        lat: 6.4783,
        lng: 7.5339,
        vendorCount: 5,
        status: 'Quiet',
        description: 'Hidden gems. Less competition than Ogbete, often holding unsold treasures from mid-week drops.'
    },
];

const MapView = () => {
    const { resolvedTheme } = useTheme();
    const [selectedMarket, setSelectedMarket] = useState<typeof markets[0] | null>(null);
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const mapStyle = useMemo(() => {
        return resolvedTheme === 'light'
            ? "mapbox://styles/mapbox/light-v11?optimize=true"
            : "mapbox://styles/mapbox/dark-v11?optimize=true";
    }, [resolvedTheme]);

    const handleMarkerClick = (market: typeof markets[0]) => {
        setSelectedMarket(market);
        setIsSheetOpen(true);
    };

    return (
        <div className="fixed inset-0 z-0 bg-background overflow-hidden animate-in fade-in duration-1000">
            {/* Background Map Layer */}
            <div className="absolute inset-0">
                {!MAPBOX_TOKEN ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-background">
                        <div className="text-center space-y-4">
                            <p className="text-foreground/20 font-editorial text-4xl italic">Config Required</p>
                            <p className="text-[10px] tracking-[0.4em] text-foreground/40 uppercase">Mapbox Access Token Missing</p>
                        </div>
                    </div>
                ) : (
                    <Map
                        initialViewState={{
                            longitude: 7.5139,
                            latitude: 6.4483,
                            zoom: 12.5
                        }}
                        style={{ width: '100%', height: '100%' }}
                        mapStyle={mapStyle}
                        mapboxAccessToken={MAPBOX_TOKEN}
                        reuseMaps
                    >
                        <div className="absolute top-24 right-4 z-10 scale-90 opacity-60 hover:opacity-100 transition-opacity">
                            <NavigationControl showCompass={false} />
                        </div>

                        {markets.map((market) => (
                            <Marker
                                key={market.id}
                                longitude={market.lng}
                                latitude={market.lat}
                                anchor="bottom"
                                onClick={e => {
                                    e.originalEvent.stopPropagation();
                                    handleMarkerClick(market);
                                }}
                            >
                                <div className="cursor-pointer group relative">
                                    <div className={`absolute -inset-6 rounded-full blur-2xl scale-0 group-hover:scale-100 transition-transform duration-700 ${selectedMarket?.id === market.id ? 'scale-125 bg-primary/30' : 'bg-primary/20'
                                        }`} />

                                    <div className={`relative z-10 transition-all duration-500 transform hover:scale-110 ${selectedMarket?.id === market.id ? 'scale-125' : ''
                                        }`}>
                                        <div className="bg-background/80 backdrop-blur-md border border-foreground/10 rounded-full p-2.5 shadow-lg">
                                            <MapPin className={`w-5 h-5 ${selectedMarket?.id === market.id ? 'text-primary' : 'text-foreground'
                                                }`} />
                                        </div>

                                        {/* Activity Indicator Dot */}
                                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
                                    </div>
                                </div>
                            </Marker>
                        ))}
                    </Map>
                )}
            </div>

            {/* Alexander UI Overlay Elements */}
            <div className="absolute top-24 left-6 pointer-events-none">
                <div className="space-y-1">
                    <h1 className="font-editorial text-4xl md:text-6xl text-foreground/90 leading-none">Market Radar</h1>
                    <p className="text-[10px] tracking-[0.5em] text-foreground/40 uppercase font-bold">Enugu Pulse // Terminal</p>
                </div>
            </div>

            {/* Bottom Sheet UI (Vaul) */}
            <Drawer.Root open={isSheetOpen} onOpenChange={setIsSheetOpen} shouldScaleBackground={false}>
                <Drawer.Trigger asChild>
                    <div className="fixed bottom-28 left-1/2 -translate-x-1/2 z-20 pointer-events-auto cursor-pointer">
                        <button
                            className="glass-pill px-6 py-3 flex items-center gap-3 group hover:scale-105 transition-transform"
                            onClick={() => setIsSheetOpen(true)}
                        >
                            <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-foreground/90">View Locations</span>
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        </button>
                    </div>
                </Drawer.Trigger>

                <Drawer.Portal>
                    <Drawer.Overlay className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]" />
                    <Drawer.Content className="bg-background flex flex-col rounded-t-[32px] h-[85vh] fixed bottom-0 left-0 right-0 z-[101] border-t border-foreground/5 shadow-2xl outline-none">
                        <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-foreground/10 mt-4 mb-8" />

                        <div className="p-8 pt-0 flex-1 overflow-y-auto no-scrollbar">
                            <div className="max-w-xl mx-auto space-y-10">
                                {/* Header */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-primary">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        <span className="text-[10px] tracking-[0.4em] font-bold uppercase">Discovery Active</span>
                                    </div>
                                    <h2 className="font-editorial text-5xl md:text-7xl text-foreground leading-tight">
                                        {selectedMarket ? selectedMarket.name : 'Choose a Hub'}
                                    </h2>
                                </div>

                                {selectedMarket ? (
                                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                        {/* Market Details Grid */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <DetailCard
                                                icon={<Users className="w-4 h-4" />}
                                                label="Active Vendors"
                                                value={selectedMarket.vendorCount.toString()}
                                            />
                                            <DetailCard
                                                icon={<Clock className="w-4 h-4" />}
                                                label="Current Status"
                                                value={selectedMarket.status}
                                            />
                                        </div>

                                        {/* Description Section */}
                                        <div className="space-y-4">
                                            <h3 className="text-[10px] tracking-[0.3em] font-bold uppercase text-foreground/30">Briefing</h3>
                                            <p className="text-xl md:text-2xl font-light text-foreground/70 leading-relaxed font-editorial italic">
                                                "{selectedMarket.description}"
                                            </p>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-col gap-3 pt-4 pb-12">
                                            <button className="w-full py-6 bg-foreground text-background font-bold tracking-[0.2em] text-xs uppercase hover:opacity-90 transition-opacity flex items-center justify-center gap-2 rounded-none">
                                                Directions to Hub <Navigation className="w-4 h-4" />
                                            </button>
                                            <button className="w-full py-6 bg-transparent border border-foreground/10 text-foreground font-bold tracking-[0.2em] text-xs uppercase hover:bg-foreground/5 transition-colors rounded-none">
                                                View Live Feed
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="grid gap-4 pb-20">
                                        {markets.map((market) => (
                                            <button
                                                key={market.id}
                                                onClick={() => setSelectedMarket(market)}
                                                className="w-full text-left p-6 border border-foreground/5 hover:bg-foreground/[0.02] transition-colors group flex items-center justify-between"
                                            >
                                                <div className="space-y-1">
                                                    <p className="text-[10px] tracking-[0.2em] text-foreground/20 uppercase font-bold">Hub {market.id}</p>
                                                    <h4 className="font-editorial text-2xl text-foreground group-hover:text-primary transition-colors">{market.name}</h4>
                                                </div>
                                                <ArrowRight className="w-5 h-5 text-foreground/10 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>
        </div>
    );
};

const DetailCard = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <div className="p-6 bg-foreground/[0.02] border border-foreground/5 space-y-3">
        <div className="flex items-center gap-2 text-foreground/30">
            {icon}
            <span className="text-[9px] tracking-[0.3em] font-bold uppercase">{label}</span>
        </div>
        <p className="text-2xl font-editorial text-foreground">{value}</p>
    </div>
);

export default MapView;
