import { LinkProps } from "@/components/link";
import additionalLinkProps from "@/utils/additional-link-props";
import { cn } from "@/utils/cn";

interface ButtonLinkProps extends LinkProps {}

export default function ButtonLink(props: ButtonLinkProps) {
  return (
    <a
      {...additionalLinkProps(props)}
      href={props.href}
      className={cn(
        "hover:bg-blue-50/10",
        "active:bg-blue-50/25",
        "py-1",
        "px-2.5",
        "rounded",
        "flex",
        "items-center",
        "gap-2",
        props.className,
      )}
    >
      {props.children}
    </a>
  );
}
