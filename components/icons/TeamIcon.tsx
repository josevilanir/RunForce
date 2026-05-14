export default function TeamIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="10" cy="20" r="5" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="38" cy="20" r="5" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M4 42C4 35.4 8.7 30 14.5 30H33.5C39.3 30 44 35.4 44 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M2 40C2 35.2 5.8 31 10.5 31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M46 40C46 35.2 42.2 31 37.5 31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}
