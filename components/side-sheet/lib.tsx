import { cn } from "@/lib/utils";

// General Purpose components which can be utilized across all other components
export function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-sm font-semibold text-secondary-foreground">
      {title}
    </div>
  );
}

export function SectionCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("border rounded-xl p-4 shadow-sm", className)}>
      {children}
    </div>
  );
}
