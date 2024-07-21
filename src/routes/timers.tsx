import Page from "@/layout/page";
import { useState } from "react";

import { Timer, TimerProps } from "@/components/timer";
import { RESETS } from "@/constants/resets";

async function load(url: string) {
  const obj = await (await fetch(url)).json();
  return obj;
}
const event_promise = load(
  "https://raw.githubusercontent.com/CostasAK/ffxiv-timers/events/event.json",
);

export default function Timers() {
  const [events, setEvents] = useState([]);
  event_promise.then((result) =>
    setEvents(
      result.map((event: TimerProps) => {
        if (event?.start) {
          event.start = new Date(event.start).getTime();
        }
        if (event?.end) {
          event.end = new Date(event.end).getTime();
        }
        return event;
      }),
    ),
  );

  const timers = [...events, ...RESETS];

  return (
    <Page className="flex max-w-screen-lg flex-row flex-wrap items-stretch justify-around overflow-hidden rounded border-b-4 border-sky-700 shadow">
      {timers.map((timer) => (
        <Timer
          key={timer.name}
          title={timer.name}
          description={timer.description}
          start={timer.start}
          end={timer?.end}
          period={timer?.period}
          type={timer.type}
          className="grow"
        />
      ))}
    </Page>
  );
}
