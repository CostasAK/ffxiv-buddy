import Page from "@/layout/page";

import { Timer, TimerProps } from "@/components/timer";
import { RESETS } from "@/constants/resets";
import { MINUTE } from "@/constants/time";
import { useQueryBuddyData } from "@/hooks/use-query-buddy-data";
import { useSyncedInterval } from "@/hooks/use-synced-interval";
import { nextTime } from "@/utils/next-time";

interface TimerType extends Omit<TimerProps, "now"> {}

function nextSortTime(timer: TimerType, now: number) {
  if (!timer.period)
    return timer.start < now && timer.end ? timer.end : timer.start;

  if (timer.end) {
    while (timer.end < now) {
      timer.start += timer.period;
      timer.end += timer.period;
    }
    return timer.start < now ? timer.end : timer.start;
  }

  return nextTime(timer.start, timer.period);
}

function sortTimers(timers: TimerType[], now: number) {
  return timers.sort(
    (a, b) =>
      nextSortTime(a, now) - nextSortTime(b, now) ||
      new Intl.Collator().compare(a.title, b.title),
  );
}

export function Component() {
  const { data: events } = useQueryBuddyData("Timers");

  const now = useSyncedInterval(MINUTE);

  const timers = events
    ? sortTimers([...events, ...RESETS], now)
    : sortTimers(RESETS, now);

  return (
    <Page
      title="Timers"
      className="flex max-w-screen-lg flex-row flex-wrap items-stretch justify-around overflow-hidden rounded border-b-4 border-sky-700 shadow"
    >
      {timers.map((timer) => (
        <Timer
          key={timer.title}
          title={timer.title}
          description={timer.description}
          start={timer.start}
          end={timer?.end}
          period={timer?.period}
          type={timer.type}
          now={now}
          className="grow"
        />
      ))}
    </Page>
  );
}
Component.displayName = "TimersRoute";
