import "./App.css";

import { Card } from "./components/Card";
import { FaGithub } from "react-icons/fa";
import React from "react";
import logo from "./assets/MainIcon47.png";

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;

const daily_reset_time = new Date("27 December 2021 15:00 GMT").getTime();
const weekly_reset_time = new Date("28 December 2021 8:00 GMT").getTime();
const leve_refresh_time = new Date("27 December 2021 12:00 GMT").getTime();
const grand_company_reset_time = new Date(
  "27 December 2021 20:00 GMT"
).getTime();

function App() {
  const events = [
    {
      name: "Starlight Celebration",
      start: "16 December 2021 08:00 GMT",
      end: "31 December 2021 15:00 GMT",
    },
    {
      name: "Heavensturn",
      start: "5 January 2022  8:00 GMT",
      end: "19 January 2022 15:00 GMT",
    },
    {
      name: "Patch 6.05: Pandæmonium (Savage)",
      start: "4 January 2022 10:00 UTC",
      hasTime: false,
    },
  ];

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

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">
          <img alt="" src={logo} height="40px" />
          &nbsp;FFXIV Timers
        </h1>

        <p className="description">
          Reset Timers and other Countdowns for Final Fantasy XIV, in your local
          time with countdowns.
        </p>
      </header>

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

      <footer className="footer">
        <div>
          By&nbsp;<a href="https://github.com/CostasAK">CostasAK</a>
        </div>
        <div>
          <a href="https://github.com/CostasAK/ffxiv-timers">
            <FaGithub />
            &nbsp;Source
          </a>
        </div>
        <div>FINAL FANTASY XIV Copyright © 2010-2021 SQUARE ENIX CO., LTD.</div>
      </footer>
    </div>
  );
}

export default App;
