import type { SVGProps } from "react";

//iconify line-md--close
export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeDasharray={12}
        strokeDashoffset={12}
        strokeLinecap="round"
        strokeWidth={2}
        d="M12 12L19 19M12 12L5 5M12 12L5 19M12 12L19 5"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.4s"
          values="12;0"
        ></animate>
      </path>
    </svg>
  );
}

//iconify line-md--close-small
export function CloseSmallIcon(props: SVGProps<SVGSVGElement>) {
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
        strokeDasharray={16}
        strokeDashoffset={16}
        strokeLinecap="round"
        strokeWidth={2}
      >
        <path d="M7 7L17 17">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.4s"
            values="16;0"
          ></animate>
        </path>
        <path d="M17 7L7 17">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.4s"
            dur="0.4s"
            values="16;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
