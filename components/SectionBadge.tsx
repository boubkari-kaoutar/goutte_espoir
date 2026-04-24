interface SectionBadgeProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionBadge({ children, light = false }: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center">
      <div
        className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] border ${
          light
            ? 'border-[#327700]/30 text-[#16390d]'
            : 'border-[#327700]/20 text-[#327700]'
        }`}
        style={{
          background: light ? 'rgba(38,171,82,0.12)' : 'rgba(38,171,82,0.07)',
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
          style={{ background: light ? '#16390d' : '#327700' }}
        />
        {children}
      </div>
    </div>
  );
}
