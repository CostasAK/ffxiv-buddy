import "./App.css";

import Countdown from "react-countdown";
import { FaGithub } from "react-icons/fa";
import React from "react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import logo from "./logo.png";

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
  dayjs.extend(localizedFormat);
  return dayjs(time).format("LT");
};

const formatDate = (time) => {
  dayjs.extend(localizedFormat);
  return dayjs(time).format("LLLL");
};

const nextTime = (time, period, offset) => {
  let remainder = time % period || 0;
  if (remainder < offset) {
    return time - remainder + offset;
  }
  return time - remainder + offset + period;
};

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

  let resets = [
    resetCard("Daily Reset", now, day, daily_reset_offset),
    resetCard("Weekly Reset", now, week, weekly_reset_offset),
    resetCard("Leve Refresh", now, day / 2, leve_refresh_offset),
    resetCard("Grand Company Reset", now, day, grand_company_reset_offset),
  ];
  resets.sort((a, b) => a.sort - b.sort);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">
          <img alt="" src={logo} /> FFXIV Timers
        </h1>

        <p className="description">
          Reset Timers and other Countdowns for Final Fantasy XIV, in your local
          time with countdowns.
        </p>
      </header>

      <main className="main">
        <div className="container">
          <div className="grid">{resets.map((a) => a.jsx)}</div>
        </div>
      </main>

      <footer className="footer">
        By&nbsp;<a href="https://github.com/CostasAK">CostasAK</a>
        &#8193;&bull;&#8193;
        <a href="https://github.com/CostasAK/ffxiv-timers">
          <FaGithub />
          &nbsp;Source
        </a>
      </footer>
    </div>
  );
}

export default App;
