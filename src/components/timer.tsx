import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { WEEK } from "@/constants/time";
import { cn } from "@/utils/cn";
import { formatDate } from "@/utils/format-time";
import { humanizeDuration } from "@/utils/humanize-duration";
import { nextTime } from "@/utils/next-time";
import { cva } from "class-variance-authority";
import { ClassValue } from "class-variance-authority/types";
import { ReactNode } from "react";

import lodestoneMaintenance from "@/assets/lodestone/maintenance.png";
import lodestoneTopic from "@/assets/lodestone/topic.png";
import lodestoneUpdates from "@/assets/lodestone/updates.png";

const iconUrls = {
  maintenance: lodestoneMaintenance,
  event: lodestoneTopic,
  reset: lodestoneUpdates,
};

export type TimerType = "maintenance" | "event" | "reset";

type TimerIconProps = {
  type: TimerType;
};

function TimerIcon({ type }: TimerIconProps) {
  return <img src={iconUrls[type]} className="h-[1em] w-[1em]" alt={type} />;
}

type ConditionType = boolean | "past" | "future";

function checkCountdownCondition(
  condition: ConditionType,
  timestamp: number | undefined,
  now: number,
) {
  if (!timestamp) return false;
  if (condition === true) return true;
  if (condition === "past") return timestamp <= now;
  if (condition === "future") return timestamp > now;
  return false;
}

type TimerCountdownProps = {
  timestamp: number;
  now: number;
  prefix?: string | string[];
  conditions?: ConditionType;
};

function TimerCountdown({
  timestamp,
  now,
  prefix = "",
  conditions = true,
}: TimerCountdownProps) {
  if (checkCountdownCondition(conditions, timestamp, now)) {
    return (
      <>{`${prefix} ${formatDate(timestamp)} (${humanizeDuration(timestamp - now, true)})`}</>
    );
  }
  return null;
}

const timerVariants = cva(
  "mb-[-0.25rem] cursor-pointer select-none rounded-t  p-4 shadow-tab transition-colors active:transition-none",
  {
    variants: {
      colors: {
        default: "bg-neutral-800  hover:bg-neutral-775 active:bg-neutral-900",
        ongoing: "bg-sky-700 text-white hover:bg-sky-600 active:bg-sky-800",
        ongoingMaintenance:
          "bg-red-800 text-white hover:bg-red-700 active:bg-red-900",
      },
    },
    defaultVariants: {
      colors: "default",
    },
  },
);

export interface TimerProps extends TimerIconProps {
  title: string;
  description?: ReactNode;
  start: number;
  end?: number;
  period?: number;
  className?: ClassValue;
  now: number;
}

export function Timer({
  title,
  description = "",
  type = "event",
  start,
  end = 0,
  period = 0,
  now,
  className,
}: TimerProps) {
  let nextStart = nextTime(start, period, now);
  const nextEnd = nextTime(end, period, now);

  if (end && nextEnd < now) return null;

  if (!end && nextStart < now - WEEK) return null;

  while (period && end && nextStart > nextEnd) {
    nextStart -= period;
  }

  const isOngoing = nextStart <= now && nextEnd > now;
  const isOngoingMaintenance = isOngoing && type === "maintenance";
  const colors = isOngoingMaintenance
    ? "ongoingMaintenance"
    : isOngoing
      ? "ongoing"
      : "default";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <article className={cn(timerVariants({ colors, className }))}>
          <h2 className="flex flex-row items-center gap-1 text-lg font-bold">
            <TimerIcon type={type} />
            {title}
          </h2>
          <TimerCountdown
            timestamp={nextStart}
            now={now}
            conditions="future"
            prefix={end ? (isOngoing ? "Started" : "Starts") : ""}
          />
          <TimerCountdown
            timestamp={nextEnd}
            now={now}
            conditions={nextStart <= now && nextEnd > now}
            prefix="Ends"
          />
        </article>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-row items-center gap-1">
            <TimerIcon type={type} />
            {title}
          </DialogTitle>
          {period > 0 && (
            <DialogDescription>
              {"Every " +
                humanizeDuration(period)
                  .replace(/^a /gi, "")
                  .replace(/^7 days$/gi, "week")}
            </DialogDescription>
          )}
          <TimerCountdown
            timestamp={nextStart}
            now={now}
            prefix={end ? (isOngoing ? "Started" : "Starts") : ""}
          />
          <br />
          <TimerCountdown timestamp={nextEnd} now={now} prefix="Ends" />
        </DialogHeader>
        {description}
      </DialogContent>
    </Dialog>
  );
}
