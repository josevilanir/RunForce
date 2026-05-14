import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  highlight?: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  children,
  highlight,
  subtitle,
  className,
  align = "center",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={cn("flex flex-col gap-3", alignClass, className)}>
      <h2 className="font-title font-bold text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight">
        {children}
        {highlight && (
          <>
            {" "}
            <span className="text-rf-red">{highlight}</span>
          </>
        )}
      </h2>
      <div className="h-1 w-16 bg-rf-red" />
      {subtitle && (
        <p className="font-body text-rf-gray text-base md:text-lg max-w-xl mt-1">{subtitle}</p>
      )}
    </div>
  );
}
