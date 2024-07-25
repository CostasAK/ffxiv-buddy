import Page from "@/layout/page";

import { Timer, TimerProps } from "@/components/timer";
import { RESETS } from "@/constants/resets";
import { MINUTE } from "@/constants/time";
import { useSyncedInterval } from "@/hooks/use-synced-interval";
import { nextTime } from "@/utils/next-time";

// async function load(url: string) {
//   const obj = await (await fetch(url)).json();
//   return obj;
// }
// const event_promise = load(
//   "https://raw.githubusercontent.com/CostasAK/ffxiv-timers/events/event.json",
// );

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
  const now = useSyncedInterval(MINUTE);

  // const [events, setEvents] = useState([]);
  // event_promise.then((result) =>
  //   setEvents(
  //     result.map((event: TimerProps) => {
  //       if (event?.start) {
  //         event.start = new Date(event.start).getTime();
  //       }
  //       if (event?.end) {
  //         event.end = new Date(event.end).getTime();
  //       }
  //       return event;
  //     }),
  //   ),
  // );

  const timers = sortTimers(RESETS, now);

  return (
    <Page className="flex max-w-screen-lg flex-row flex-wrap items-stretch justify-around overflow-hidden rounded border-b-4 border-sky-700 shadow">
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
