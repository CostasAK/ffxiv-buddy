import type { SVGProps } from "react";

// Iconify: line-md:external-link, 0.75 duration
export function ExternalLinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path strokeDasharray={42} strokeDashoffset={42} d="M11 5H5V19H19V13">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.45s"
            values="42;0"
          ></animate>
        </path>
        <path strokeDasharray={12} strokeDashoffset={12} d="M13 11L20 4">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.45s"
            dur="0.225s"
            values="12;0"
          ></animate>
        </path>
        <path strokeDasharray={8} strokeDashoffset={8} d="M21 3H15M21 3V9">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.675s"
            dur="0.15s"
            values="8;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
