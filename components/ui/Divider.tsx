import { cn } from "@/lib/utils";

interface DividerProps {
  variant?: "red" | "gray";
  className?: string;
}

export default function Divider({ variant = "gray", className }: DividerProps) {
  return (
    <hr
      className={cn(
        "border-0 h-px",
        variant === "red" ? "bg-rf-red" : "bg-white/10",
        className
      )}
    />
  );
}
