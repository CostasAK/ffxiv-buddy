import { cn } from "../utils/cn";

export default function Header() {
  return (
    <header
      className={cn([
        "bg-neutral-900",
        "flex",
        "justify-center",
        "items-center",
        "gap-2",
        "p-2",
        "sm:gap-4",
        "sm:p-4",
      ])}
    >
      <img
        src="/android-chrome-72x72.png"
        alt=""
        className={cn(["h-8", "sm:h-14"])}
      ></img>
      <h1
        className={cn(["text-4xl", "font-bold", "leading-none", "sm:text-6xl"])}
      >
        FFXIV Buddy
      </h1>
    </header>
  );
}
