interface CardProps {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
  rotation?: number;
}

export default function Card({ children, className = '', shadow = false, rotation = 0 }: CardProps) {
  const shadowClass = shadow ? "shadow-[-9px_10px_0px_0px_rgba(0,0,0,0.44)]" : "";

  return (
    <div
      className={`relative bg-white ${shadowClass} ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {children}
    </div>
  );
}
