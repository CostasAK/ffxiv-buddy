import "./style.css";

import React from "react";
import { formatDuration } from "../../functions/formatDuration";
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

  const [completion, setCompletion] = React.useState(
    parseInt(localStorage.getItem(todo_name)) || 0
  );

  React.useEffect(() => {
    localStorage.setItem(todo_name, completion);
  }, [todo_name, completion]);

  const [next_time, setNextTime] = React.useState(0);

  const [now, setNow] = React.useState(Date.now());

  React.useEffect(() => {
    const timer = setTimeout(() => setNow(() => Date.now()), 1000);

    if (now >= next_time && completion < next_time) {
      console.log("it should reset");
      setCompletion(0);
    }

    if (props.reset) {
      let next_time_after_completion = nextTime(
        resets[props.reset].period,
        resets[props.reset].start,
        completion
      );
      let next_time_after_now = nextTime(
        resets[props.reset].period,
        resets[props.reset].start
      );
      if (next_time_after_completion !== next_time_after_now) {
        setCompletion(0);
      }
      setNextTime(next_time_after_now);
    } else if (completion) {
      setNextTime(completion + props.period);
      if (next_time && next_time <= now) {
        setCompletion(0);
      }
    } else {
      setNextTime(0);
    }

    return () => clearTimeout(timer);
  }, [now, completion, next_time, props.period, props.reset]);

  const handleChange = () => {
    if (completion) {
      setCompletion(0);
    } else {
      setCompletion(Date.now());
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
      <span className="duration">{formatDuration(next_time - now)}</span>
    </label>
  );
}
