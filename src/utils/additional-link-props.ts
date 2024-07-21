import { LinkProps } from "@/components/link";
import isExternalLink from "./is-external-link";

export default function additionalLinkProps(props: LinkProps) {
  return isExternalLink(props.href)
    ? { target: "_blank", rel: "noreferrer" }
    : {};
}
