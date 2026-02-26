const VendorsView = () => {
    const vendors = [
        { name: 'Mama Nkechi Collections', market: 'Ogbete', specialty: 'Vintage Leathers', rating: 4.9 },
        { name: 'Chidi Vintage Hub', market: 'New Haven', specialty: 'Denim & Workwear', rating: 4.7 },
        { name: 'Emeka Drip Store', market: 'Gariki', specialty: 'Graphic Tees', rating: 4.8 },
        { name: 'Ada Bespoke Corner', market: 'Abakpa', specialty: 'Upcycled Dresses', rating: 4.6 },
        { name: 'Obinna Sportswear', market: 'Ogbete', specialty: 'Retro Athletics', rating: 4.5 },
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 px-4 md:px-8 py-8">
            <div className="mb-12">
                <h2 className="font-editorial text-4xl md:text-6xl font-bold text-foreground">Vendors</h2>
                <p className="text-utility text-muted-foreground mt-2 tracking-[0.2em]">042 CERTIFIED TRADERS</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {vendors.map((vendor, i) => (
                    <div
                        key={vendor.name}
                        className="glass-pane p-6 group cursor-pointer hover:bg-secondary/20 transition-colors"
                        style={{ animationDelay: `${i * 0.05}s` }}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                                {vendor.name[0]}
                            </div>
                            <div className="text-right">
                                <span className="text-utility text-primary">★ {vendor.rating}</span>
                            </div>
                        </div>
                        <h3 className="font-editorial text-2xl mb-1">{vendor.name}</h3>
                        <p className="text-utility text-muted-foreground mb-4">{vendor.market} Market</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-[10px] px-2 py-1 bg-secondary rounded uppercase tracking-wider">{vendor.specialty}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VendorsView;
