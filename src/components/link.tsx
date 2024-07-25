import { cn } from "@/utils/cn";
import isExternalLink from "@/utils/is-external-link";
import { cva, VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes } from "react";

const linkVariants = cva("", {
  variants: {
    variant: {
      default:
        "underline-offset-4 hover:underline text-blue-400 hover:text-blue-300",
      ghost: "",
    },
  },
  defaultVariants: { variant: "default" },
});

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {}

function processProps(props: LinkProps) {
  return isExternalLink(props.href!)
    ? { ...props, target: "_blank", rel: "noreferrer" }
    : props;
}

export function Link({ className, variant, ...props }: LinkProps) {
  return (
    <a
      className={cn(linkVariants({ variant, className }))}
      {...processProps(props)}
    >
      {props.children}
    </a>
  );
}
