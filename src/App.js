import "./App.css";

import Countdown from "react-countdown";
import { FaGithub } from "react-icons/fa";
import React from "react";
import dayjs from "dayjs";
import logo from "./assets/MainIcon47.png";

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;

const daily_reset_offset = 15 * hour;
const weekly_reset_offset = 8 * hour + 5 * day;
const leve_refresh_offset = 0;
const grand_company_reset_offset = 20 * hour;

const renderCountdown = (delta) => {
  if (delta < 0) {
    return "";
  }
  let days = Math.floor(delta / day);
  if (days > 0) {
    days = Math.round(delta / day);
    return days + " day" + (days === 1 ? "" : "s");
  }

  let hours = Math.floor(delta / hour);
  if (hours > 0) {
    hours = Math.round(delta / hour);
    return hours + " hour" + (hours === 1 ? "" : "s");
  }

  let minutes = Math.floor(delta / minute);
  if (minutes > 0) {
    minutes = Math.round(delta / minute);
    return minutes + " minute" + (minutes === 1 ? "" : "s");
  }

  let seconds = Math.round(delta / second);
  return seconds + " second" + (seconds === 1 ? "" : "s");
};

const formatTime = (time) => {
  const hourParts = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
  }).formatToParts(new Date(time));
  if (hourParts.dayPeriod !== undefined) {
    return dayjs(time).format("h:mm A");
  }
  return dayjs(time).format("H:mm");
};

const formatDate = (time) => {
  return (
    dayjs(time).format("ddd, D MMM YYYY") +
    (time % day !== 0 ? " " + formatTime(time) : "")
  );
};

const nextTime = (time, period, offset) => {
  let remainder = time % period || 0;
  if (remainder < offset) {
    return time - remainder + offset;
  }
  return time - remainder + offset + period;
};

function eventCard(name, start, stop) {
  let time = new Date(start).getTime();
  let open_string = "In ";
  let now_time = Date.now();
  if (stop !== undefined) {
    let stop_time = new Date(stop).getTime();
    if (stop_time < now_time) {
      return;
    }
    open_string = "Starts in ";
    if (time <= now_time) {
      open_string = "Ends in ";
      time = new Date(stop).getTime();
    }
  } else if (time <= now_time - day) {
    return;
  }

  let time_string;
  if (time < now_time) {
    time_string = "On " + formatDate(time);
    open_string = "";
  } else if (time - now_time < day) {
    time_string = "at " + formatTime(time);
  } else {
    time_string = "on " + formatDate(time);
  }

  return {
    jsx: (
      <div
        className={
          "card" +
          (open_string.includes("Ends in ", 0) || time < now_time
            ? " ongoing"
            : "")
        }
      >
        <h2>{name}</h2>
        <p>
          <div>
            {open_string}
            <Countdown
              date={time}
              overtime={true}
              renderer={(props) => renderCountdown(props.total)}
            />
            {time < now_time ? "" : ", "}
            {time_string}
          </div>
        </p>
      </div>
    ),
    sort: time,
  };
}

const resetCard = (name, time, period, offset) => {
  let next_time = nextTime(time, period, offset);
  let next_time_string;
  if (period > day) {
    next_time_string = "on " + formatDate(next_time);
  } else {
    next_time_string = "at " + formatTime(next_time);
  }
  return {
    jsx: (
      <div className="card">
        <h2>{name}</h2>
        <p>
          <div>
            In{" "}
            <Countdown
              date={next_time}
              overtime={true}
              renderer={(props) => renderCountdown(props.total)}
            />
            , {next_time_string}
          </div>
        </p>
      </div>
    ),
    sort: next_time,
  };
};

function App() {
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    setTimeout(() => setNow((c) => Date.now()), second - (now % second));
  }, [now]);

  let events = [
    eventCard(
      "Starlight Celebration",
      "16 December 2021 08:00 GMT",
      "31 December 2021 15:00 GMT"
    ),
    eventCard("Patch 6.01: Pandæmonium (Normal)", "21 December 2021 8:30 GMT"),
    eventCard("Patch 6.05: Pandæmonium (Savage)", "4 January 2022 UTC"),
  ].filter((a) => a !== undefined);
  events.sort((a, b) => a.sort - b.sort);

  let resets = [
    resetCard("Daily Reset", now, day, daily_reset_offset),
    resetCard("Weekly Reset", now, week, weekly_reset_offset),
    resetCard("Leve Refresh", now, day / 2, leve_refresh_offset),
    resetCard("Grand Company Reset", now, day, grand_company_reset_offset),
  ];
  resets.sort((a, b) => a.sort - b.sort);

  let cards = [events.map((a) => a.jsx), resets.map((a) => a.jsx)];

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
          <div className="grid">{cards}</div>
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
