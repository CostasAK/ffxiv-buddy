import { Navigation } from "@/layout/navigation";

export default function Header() {
  return (
    <header className="flex flex-col items-center bg-neutral-900 text-neutral-200">
      <title className="flex items-center justify-center gap-2 p-2 sm:gap-4 sm:p-4">
        <img src="/000047_hr1.png" alt="" className="size-8 sm:size-11"></img>
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          FFXIV Buddy
        </h1>
      </title>
      <Navigation />
    </header>
  );
}
