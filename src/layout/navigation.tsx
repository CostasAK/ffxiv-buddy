import { pages } from "@/routes/pages";
import { cn } from "@/utils/cn";
import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="grid w-fit auto-cols-fr grid-flow-col grid-rows-none items-stretch justify-center bg-neutral-900 text-center text-lg font-bold text-neutral-200">
      {pages.map((route) => (
        <NavLink
          to={route.path}
          key={route.title}
          className={({ isActive }) =>
            cn(
              "relative px-6 py-2 transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:mx-auto after:block after:h-1 after:w-5/6 after:rounded-sm after:opacity-0 after:transition-all hover:bg-white hover:text-sky-700 after:hover:bg-sky-700 after:hover:opacity-100",
              isActive && "bg-neutral-775",
            )
          }
        >
          {route.title}
        </NavLink>
      ))}
    </nav>
  );
}
