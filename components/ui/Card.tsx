import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
}

export default function Card({ children, className, bordered = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-rf-dark rounded-sm p-6",
        bordered && "border border-rf-red/35",
        className
      )}
    >
      {children}
    </div>
  );
}
