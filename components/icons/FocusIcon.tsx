export default function FocusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="24" cy="24" r="4" fill="currentColor"/>
      <line x1="24" y1="4" x2="24" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="24" y1="38" x2="24" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="4" y1="24" x2="10" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="38" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}
