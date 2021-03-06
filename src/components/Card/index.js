import "./style.scss";

import React, { useEffect, useState } from "react";
import { formatDate, formatTime } from "../../functions/formatDateTime";

import Popup from "reactjs-popup";
import { capitalizeSentence } from "../../functions/capitalizeSentence";
import { formatDuration } from "../../functions/formatDuration";
import { isPast } from "../../functions/isPast";
import maintenance_icon from "../../assets/maintenance.png";
import { nextTime } from "../../functions/nextTime";
import parse from "html-react-parser";
import { toTime } from "../../functions/toTime";
import topics_icon from "../../assets/topics.png";
import updates_icon from "../../assets/updates.png";

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const year = 365.25 * day;

const icons = {
  maintenance: maintenance_icon,
  event: topics_icon,
  reset: updates_icon,
};

export function Card(props) {
  const [end, setEnd] = useState(nextTime(props.period, toTime(props.end)));
  const [start, setStart] = useState(() => {
    let start = nextTime(props.period, toTime(props.start));
    while (props.period && end && start > end) {
      start -= props.period;
    }
    return start;
  });
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setTimeout(() => {
      setEnd(nextTime(props.period, toTime(end)));
      setNow(() => Date.now());
      setStart(() => {
        let start_temp = nextTime(props.period, toTime(start));
        while (props.period && end && start_temp >= end) {
          start_temp -= props.period;
        }
        return start_temp;
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [now, start, end, props.period]);

  let is_recurring = !!props.period;

  let started = false;
  if (isPast(start)) {
    started = true;
  }

  let ended = false;
  if (
    isPast(end) ||
    (!end && isPast(start + day)) ||
    (!is_recurring && (isPast(end) || (!end && isPast(start + day))))
  ) {
    ended = true;
  }

  if (ended) {
    return null;
  }

  let target_time = start;
  if (started && end) {
    target_time = end;
  }

  let countdown = formatDuration(target_time - now);

  let absolute_time_string;
  if (started && !end) {
    absolute_time_string = "On " + formatDate(target_time, props.hasTime);
  } else if (isPast(target_time - day)) {
    absolute_time_string = "at " + formatTime(target_time, props.hasTime);
  } else {
    absolute_time_string = "on " + formatDate(target_time, props.hasTime);
  }

  let flex_order = target_time / minute;
  if (!is_recurring) {
    flex_order -= (10 * year) / minute;
  }

  let description =
    typeof props.description === "string" || props.description instanceof String
      ? parse(props.description)
      : props.description;

  return (
    <Popup
      trigger={
        <div
          className={"Card" + (started ? " ongoing" : "") + " " + props.type}
          style={{
            order: flex_order,
          }}
        >
          <h2>
            <img src={icons[props.type]} alt={props.type} width="22px" />
            {props.name}
          </h2>
          <p>
            {capitalizeSentence(
              (is_recurring || !(started && !end) ? countdown + ", " : "") +
                absolute_time_string
            )}
          </p>
        </div>
      }
      modal
    >
      <div className="CardModal">
        <h2>
          <img src={icons[props.type]} alt={props.type} width="22px" />
          {props.name}
        </h2>
        <p>
          {capitalizeSentence(
            (is_recurring || !(started && !end) ? countdown + ", " : "") +
              absolute_time_string
          )}
        </p>
        <div className={"description"}>{description}</div>
      </div>
    </Popup>
  );
}
