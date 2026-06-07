export default function SectionDivider({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  return (
    <div className={`flex items-center justify-center py-2 ${variant === 'dark' ? 'bg-charcoal' : ''}`}>
      <div className={`flex items-center gap-4 ${variant === 'dark' ? 'opacity-20' : 'opacity-15'}`}>
        <div className={`w-16 h-px ${variant === 'dark' ? 'bg-warm-beige' : 'bg-soft-brown'}`} />
        <svg className={`w-4 h-4 ${variant === 'dark' ? 'text-warm-beige' : 'text-soft-brown'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
        </svg>
        <div className={`w-16 h-px ${variant === 'dark' ? 'bg-warm-beige' : 'bg-soft-brown'}`} />
      </div>
    </div>
  );
}
