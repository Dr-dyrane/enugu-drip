import { Camera, X, Sparkles } from 'lucide-react';

interface ScanModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ScanModal = ({ isOpen, onClose }: ScanModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={onClose} />

            {/* Modal Content */}
            <div className="relative w-full max-w-lg glass-pane aspect-[3/4] overflow-hidden flex flex-col items-center justify-center text-center p-8">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-secondary transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="relative mb-8">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                    <Camera className="w-24 h-24 text-primary relative z-10" />
                </div>

                <h2 className="font-editorial text-3xl md:text-4xl mb-4">AI Pulse Scanner</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                    Point your camera at any item to find similar drops across Enugu's markets instantly.
                </p>

                <div className="flex flex-col gap-3 w-full max-w-xs">
                    <button className="w-full py-4 bg-foreground text-background text-utility flex items-center justify-center gap-2 group hover:bg-primary transition-colors">
                        <Sparkles className="w-4 h-4" /> START SCANNING
                    </button>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-2">
                        Powered by 042 Vision Engine
                    </p>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30" />
            </div>
        </div>
    );
};

export default ScanModal;
