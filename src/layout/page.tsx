import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet-async";

interface PageProps extends PropsWithChildren {
  className?: string;
  title?: string;
}

export default function Page({ children, className, title }: PageProps) {
  return (
    <section className={cn("mx-auto", className)}>
      {title && (
        <Helmet>
          <title>{title}</title>
        </Helmet>
      )}
      {children}
    </section>
  );
}
