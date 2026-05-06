"use client";

export function EyeSymbol({ className = "", size = 100 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle with crosshair */}
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
      
      {/* Crosshair lines */}
      <line x1="50" y1="0" x2="50" y2="15" stroke="currentColor" strokeWidth="2" />
      <line x1="50" y1="85" x2="50" y2="100" stroke="currentColor" strokeWidth="2" />
      <line x1="0" y1="50" x2="15" y2="50" stroke="currentColor" strokeWidth="2" />
      <line x1="85" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="2" />
      
      {/* Eye shape */}
      <ellipse cx="50" cy="50" rx="25" ry="15" stroke="currentColor" strokeWidth="2" fill="none" />
      
      {/* Inner eye circle */}
      <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
      
      {/* Pupil */}
      <circle cx="50" cy="50" r="3" fill="currentColor" />
      
      {/* Small decorative elements */}
      <circle cx="50" cy="35" r="2" fill="currentColor" />
    </svg>
  );
}

export function SmallEye({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1" fill="none" />
      <ellipse cx="8" cy="8" rx="4" ry="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="8" cy="8" r="1.5" fill="currentColor" />
    </svg>
  );
}
