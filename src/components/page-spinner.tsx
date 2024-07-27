import { cn } from "@/utils/cn";
import { type ClassValue } from "clsx";

import spinner from "@/assets/spinner.webp";

interface PageSpinnerProps {
  className?: ClassValue;
}

export function PageSpinner({ className }: PageSpinnerProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 flex flex-row items-center justify-center gap-1 text-4xl",
        className,
      )}
    >
      <img src={spinner} alt="" className="size-[1em]" /> Loading...
    </div>
  );
}
