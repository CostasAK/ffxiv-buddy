import { useToggle } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { modulo } from "../utils/modulo";

export function useSyncedInterval(interval: number) {
  const [on, toggle] = useToggle();

  useEffect(() => {
    const timer = setTimeout(toggle, modulo(-Date.now(), interval));

    return () => clearTimeout(timer);
  }, [interval, on, toggle]);

  return Date.now();
}
