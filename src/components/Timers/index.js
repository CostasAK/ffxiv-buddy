import "./style.css";

import React, { useState } from "react";

import { Card } from "../Card";
import { getResets } from "../../functions/getResets";

const resets = getResets();

async function load(url) {
  let obj = await (await fetch(url)).json();
  return obj;
}
const event_promise = load(
  "https://raw.githubusercontent.com/CostasAK/ffxiv-timers/events/event.json"
);

export function Timers() {
  const [events, setEvents] = useState([]);
  event_promise.then((result) => setEvents(result));

  let cards = [...events, ...resets];

  return (
    <div className="Timers">
      {cards.map((card) => (
        <Card
          key={[card.name, card.start, card.end].join(",")}
          name={card.name}
          description={card.description}
          start={card.start}
          end={card.end}
          period={card.period}
          hasTime={card.hasTime}
          type={card.type}
        />
      ))}
    </div>
  );
}
