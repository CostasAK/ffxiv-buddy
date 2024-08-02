import { ExternalLinkIcon } from "@/components/svg/external-link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/utils/cn";
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

export function ExternalLink({ className, variant, ...props }: LinkProps) {
  return (
    <Tooltip delayDuration={300}>
      <TooltipTrigger asChild>
        <a
          className={cn(linkVariants({ variant, className }))}
          target="_blank"
          rel="noreferrer"
          {...props}
        >
          {props.children}
        </a>
      </TooltipTrigger>
      <TooltipContent className="flex flex-row items-center gap-1">
        {props.href?.replace(/^https?:\/\/(www\.)?/i, "").split("/")[0]}
        <ExternalLinkIcon />
      </TooltipContent>
    </Tooltip>
  );
}
