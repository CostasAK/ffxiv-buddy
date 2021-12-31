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

const resets = [
  {
    name: "Weekly Reset",
    period: week,
    start: new Date("28 December 2021 8:00 GMT").getTime(),
    type: "reset",
  },
  {
    name: "Daily Reset",
    period: day,
    start: new Date("28 December 2021 15:00 GMT").getTime(),
    type: "reset",
  },
  {
    name: "Leve Refresh",
    period: day / 2,
    start: new Date("27 December 2021 12:00 GMT").getTime(),
    type: "reset",
  },
  {
    name: "Grand Company Reset",
    period: day,
    start: new Date("27 December 2021 20:00 GMT").getTime(),
    type: "reset",
  },
  {
    name: "Jumbo Cactpot",
    period: week,
    start: new Date("1 January 2022 19:00 GMT").getTime(),
    end: new Date("1 January 2022 20:00 GMT").getTime(),
    type: "reset",
  },
  {
    name: "Fashion Report",
    period: week,
    start: new Date("31 December 2021 8:00 GMT").getTime(),
    end: new Date("4 January 2022 8:00 GMT").getTime(),
    type: "reset",
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

  let cards = [...events, ...resets];

  return (
    <div className="App">
      <Header />

      <main className="main">
        <div className="container">
          {cards.map((card) => (
            <Card
              key={[card.name, card.start].join(",")}
              name={card.name}
              start={card.start}
              end={card.end}
              period={card.period}
              hasTime={card.hasTime}
              type={card.type}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
