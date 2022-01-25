import "./style.css";

import React from "react";
import { nextTime } from "../../functions/nextTime";

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;
const year = 365.25 * day;

const resets = {
  weekly: {
    period: week,
    start: new Date("28 December 2021 8:00 GMT").getTime(),
  },
  daily: {
    period: day,
    start: new Date("28 December 2021 15:00 GMT").getTime(),
  },
  "grand company": {
    period: day,
    start: new Date("27 December 2021 20:00 GMT").getTime(),
  },
  "fashion report": {
    period: week,
    start: new Date("31 December 2021 8:00 GMT").getTime(),
  },
  "jumbo cactpot": {
    period: week,
    start: new Date("1 January 2022 19:00 GMT").getTime(),
  },
};

export function ToDo(props) {
  const todo_name = "ToDo - " + props.name;
  const nexttime_name = "NextTime - " + props.name;

  const [completion, setCompletion] = React.useState(
    parseInt(localStorage.getItem(todo_name)) || 0
  );

  React.useEffect(() => {
    localStorage.setItem(todo_name, completion);
  }, [todo_name, completion]);

  const [next_time, setNextTime] = React.useState(
    parseInt(localStorage.getItem(nexttime_name)) || 0
  );

  React.useEffect(() => {
    localStorage.setItem(nexttime_name, next_time);
  }, [nexttime_name, next_time]);

  const [now, setNow] = React.useState(Date.now());
  setTimeout(() => setNow(Date.now()), 1000);

  React.useEffect(() => {
    if (now >= next_time) {
      setCompletion(0);
      if (props.reset) {
        setNextTime(
          nextTime(resets[props.reset].period, resets[props.reset].start)
        );
      } else {
        setNextTime(now + props.period);
      }
    }
  }, [now, next_time, props.period, props.reset]);

  const handleChange = () => {
    if (completion) {
      setCompletion(0);
    } else {
      setCompletion(Math.floor(Date.now() / 1000));
    }
  };

  return (
    <label
      htmlFor={props.name}
      className="ToDo"
      style={{ order: next_time / minute + (completion ? 10 * year : 0) }}
    >
      <input
        type="checkbox"
        id={props.name}
        checked={completion}
        onChange={handleChange}
      />
      <span style={{ fontStyle: completion ? "italic" : "" }}>
        {props.name}
      </span>
    </label>
  );
}
