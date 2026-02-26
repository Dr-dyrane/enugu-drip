const ProductCardSkeleton = () => {
    return (
        <div className="relative overflow-hidden h-full min-h-[440px] bg-secondary/20 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/30" />

            {/* Status Badge Skeleton */}
            <div className="absolute top-4 left-4 w-24 h-8 bg-muted/30" />

            {/* Info Panel Skeleton */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="w-2/3 h-6 bg-muted/40 mb-3" />
                <div className="w-1/3 h-4 bg-muted/30 mb-6" />
                <div className="flex justify-between items-end">
                    <div className="w-1/4 h-5 bg-muted/20" />
                    <div className="w-1/5 h-8 bg-muted/40" />
                </div>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
