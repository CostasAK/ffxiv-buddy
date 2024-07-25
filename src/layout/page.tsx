import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";

interface PageProps extends PropsWithChildren {
  className?: string;
}

export default function Page({ children, className }: PageProps) {
  return <section className={cn("mx-auto", className)}>{children}</section>;
}
