import React from 'react';

interface BrandLogoProps {
    className?: string;
}

const BrandLogo = ({ className = "" }: BrandLogoProps) => {
    return (
        <div className={`flex items-center ${className}`}>
            <svg
                viewBox="0 0 400 100"
                className="h-full w-auto"
                xmlns="http://www.w3.org/2000/svg"
            >
                <text
                    x="0"
                    y="75"
                    fontFamily="'Playfair Display', serif"
                    fontWeight="900"
                    fontSize="80"
                    className="fill-foreground tracking-widest"
                >
                    DRIP
                </text>
            </svg>
        </div>
    );
};

export default BrandLogo;
