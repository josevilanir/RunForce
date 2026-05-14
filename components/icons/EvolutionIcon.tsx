export default function EvolutionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polyline points="6,36 16,24 24,30 34,16 42,20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="34,12 42,12 42,20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="6" y1="42" x2="42" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}
