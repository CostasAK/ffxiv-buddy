import { PropsWithChildren } from "react";

export interface LinkProps extends PropsWithChildren {
  className?: string | string[];
  href: string;
}
