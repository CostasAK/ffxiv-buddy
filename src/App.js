import "./App.css";

import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import React from "react";

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;

const daily_reset_time = new Date("28 December 2021 15:00 GMT").getTime();
const weekly_reset_time = new Date("28 December 2021 8:00 GMT").getTime();
const leve_refresh_time = new Date("27 December 2021 12:00 GMT").getTime();
const grand_company_reset_time = new Date(
  "27 December 2021 20:00 GMT"
).getTime();

const resets = [
  { name: "Weekly Reset", period: week, start: weekly_reset_time },
  { name: "Daily Reset", period: day, start: daily_reset_time },
  { name: "Leve Refresh", period: day / 2, start: leve_refresh_time },
  {
    name: "Grand Company Reset",
    period: day,
    start: grand_company_reset_time,
  },
];

async function load(url) {
  let obj = await (await fetch(url)).json();
  return obj;
}
const event_promise = load(
  "https://raw.githubusercontent.com/CostasAK/ffxiv-timers/events/event.json"
);

function App() {
  const [events, setEvents] = React.useState([]);
  event_promise.then((result) => setEvents(result));

  return (
    <div className="App">
      <Header />

      <main className="main">
        <div className="container">
          <div className="grid">
            {events.map((event) => (
              <Card
                key={[event.name, event.start].join(",")}
                name={event.name}
                start={event.start}
                end={event.end}
                hasTime={event.hasTime}
              />
            ))}
            {resets.map((reset) => (
              <Card
                key={[reset.name, reset.start].join(",")}
                name={reset.name}
                period={reset.period}
                start={reset.start}
              />
            ))}
          </div>
        </div>
        <div className="invisible"></div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
