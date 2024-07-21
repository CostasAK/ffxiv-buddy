import { MINUTE, SECOND, WEEK } from "@/constants/time";
import { useSyncedInterval } from "@/hooks/use-synced-interval";
import { cn } from "@/utils/cn";
import { formatDate } from "@/utils/format-time";
import { humanizeDuration } from "@/utils/humanize-duration";
import { nextTime } from "@/utils/next-time";
import { ClassNameValue } from "tailwind-merge";

const iconUrls = {
  maintenance: "https://xivapi.com/img-misc/lodestone/maintenance.png",
  event: "https://xivapi.com/img-misc/lodestone/topic.png",
  reset: "https://xivapi.com/img-misc/lodestone/updates.png",
};

type TimerIconProps = {
  type: "maintenance" | "event" | "reset";
};

function TimerIcon({ type }: TimerIconProps) {
  return <img src={iconUrls[type]} className="h-[1em] w-[1em]" alt={type} />;
}

type TimerCountdownConditionWhen = "past" | "future";

type TimerCountdownProps = {
  timestamp: number;
  prefix?: string | string[];
  conditions?:
    | boolean
    | TimerCountdownConditionWhen
    | { when: TimerCountdownConditionWhen; timestamp: number };
};

function TimerCountdown({
  timestamp,
  prefix = "",
  conditions = true,
}: TimerCountdownProps) {
  const now = useSyncedInterval(SECOND);
  if (conditions) {
    return (
      <>{`${prefix} ${formatDate(timestamp)} (${humanizeDuration(timestamp - now)})`}</>
    );
  }
  return null;
}

export interface TimerProps extends TimerIconProps {
  title: string;
  description?: string | string[];
  start: number;
  end?: number;
  period?: number;
  className?: ClassNameValue;
}

export function Timer({
  title,
  description = "",
  type = "event",
  start,
  end = 0,
  period = 0,
  className,
}: TimerProps) {
  const now = useSyncedInterval(MINUTE);
  const nextStart = nextTime(start, period);
  const nextEnd = nextTime(end, period);

  if (end && nextEnd < now) return null;

  if (!end && nextStart < now - WEEK) return null;

  return (
    <article
      className={cn(
        "mb-[-0.25rem] cursor-pointer select-none rounded-t bg-neutral-800 p-4 shadow-[inset_0_1px_0_0_hsla(0,0%,100%,.1),inset_1px_0_0_0_hsla(0,0%,100%,.1),inset_-1px_0_0_0_rgba(0,0,0,.1)] hover:bg-neutral-775",
        className,
      )}
    >
      <h3 className="flex flex-row items-center gap-1 text-lg font-bold">
        <TimerIcon type={type} />
        {title}
      </h3>
      <TimerCountdown timestamp={nextStart} />
      {description}
    </article>
  );
}
