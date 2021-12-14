import "./App.css";

import { FaGithub } from "react-icons/fa";
import React from "react";
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

const formatCountdown = (time) => {
  let days = Math.floor(time / day);
  if (days > 0) {
    days = Math.round(time / day);
    let string = days + " day";
    if (days > 1) {
      return string + "s";
    }
    return string;
  }

  let hours = Math.floor(time / hour);
  if (hours > 0) {
    hours = Math.round(time / hour);
    let string = hours + " hour";
    if (hours > 1) {
      return string + "s";
    }
    return string;
  }

  let minutes = Math.floor(time / minute);
  if (minutes > 0) {
    minutes = Math.round(time / minute);
    let string = minutes + " minute";
    if (minutes > 1) {
      return string + "s";
    }
    return string;
  }

  return Math.round(time / second) + " seconds";
};

const formatTime = (time) => {
  return new Date(time).toLocaleTimeString();
};

const formatDate = (time) => {
  return new Date(time).toLocaleString();
};

const nextTime = (time, period, offset) => {
  let remainder = time % period || 0;
  if (remainder < offset) {
    return time - remainder + offset;
  }
  return time - remainder + offset + period;
};

function App() {
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    setTimeout(() => setNow((c) => c + second), second);
  }, [now]);

  const next_daily_reset = () => {
    return nextTime(now, day, daily_reset_offset);
  };

  const next_weekly_reset = () => {
    return nextTime(now, week, weekly_reset_offset);
  };

  const next_gc_reset = () => {
    return nextTime(now, day, grand_company_reset_offset);
  };

  const next_leve_refresh = () => {
    return nextTime(now, day / 2, leve_refresh_offset);
  };

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
        <div className="grid">
          <div className="card">
            <h2>Daily Reset</h2>
            <p>
              <div>
                In {formatCountdown(next_daily_reset() - now)}, at{" "}
                {formatTime(next_daily_reset())}
              </div>
            </p>
          </div>
        </div>

        <div className="grid">
          <div className="card">
            <h2>Weekly Reset</h2>
            <p>
              <div>
                In {formatCountdown(next_weekly_reset() - now)}, on{" "}
                {formatDate(next_weekly_reset())}
              </div>
            </p>
          </div>
        </div>

        <div className="grid">
          <div className="card">
            <h2>Leve Refresh</h2>
            <p>
              <div>
                In {formatCountdown(next_leve_refresh() - now)}, at{" "}
                {formatTime(next_leve_refresh())}
              </div>
            </p>
          </div>
        </div>

        <div className="grid">
          <div className="card">
            <h2>Grand Company Reset</h2>
            <p>
              <div>
                In {formatCountdown(next_gc_reset() - now)}, at{" "}
                {formatTime(next_gc_reset())}
              </div>
            </p>
          </div>
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
