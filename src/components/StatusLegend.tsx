import { statusConfig } from '@/data/products';

const StatusLegend = () => {
  return (
    <div className="flex items-center gap-4 px-4 md:px-8 py-4 overflow-x-auto scrollbar-hide">
      {(Object.entries(statusConfig) as [string, { label: string; className: string }][]).map(([key, { label, className }]) => (
        <div key={key} className="flex items-center gap-2 shrink-0">
          <span className={`w-2 h-2 rounded-full ${
            key === 'new-drop' ? 'bg-drip-acid glow-acid' :
            key === 'high-demand' ? 'bg-drip-crimson glow-crimson' :
            'bg-drip-blue glow-blue'
          }`} />
          <span className="text-utility text-muted-foreground whitespace-nowrap">{label}</span>
        </div>
      ))}
      <div className="flex-1" />
      <span className="text-utility text-muted-foreground shrink-0">8 ITEMS</span>
    </div>
  );
};

export default StatusLegend;
