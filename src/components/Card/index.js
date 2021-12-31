import "./style.css";

import { formatDate, formatTime } from "../../functions/formatDateTime";

import Countdown from "react-countdown";
import React from "react";
import maintenance_icon from "../../assets/maintenance.png";
import { nextTime } from "../../functions/nextTime";
import { toNaturalLanguageTime } from "../../functions/toNaturalLanguageTime";
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

export class Card extends React.Component {
  constructor(props) {
    super(props);

    let start = toTime(this.props.start);
    let end = toTime(this.props.end);
    let now = Date.now();
    let next_time = nextTime(Date.now(), this.props.period, start);

    this.state = {
      started: !this.props.period && start <= Date.now(),
      ended:
        !this.props.period &&
        ((end && end <= now) || (!end && start + day < now)),
      next_time: next_time,
      expanded: false,
    };

    this.onCompleteCountdown = this.onCompleteCountdown.bind(this);
  }

  onCompleteCountdown() {
    let now = Date.now() + second;
    let start = new Date(this.props.start).getTime();
    if (this.props.period) {
      this.setState({
        next_time: nextTime(now, this.props.period, start),
      });
    } else {
      if (start <= now) {
        this.setState({ started: true });
      }
      let end = this.props.end && new Date(this.props.end).getTime();
      if (end && end <= now) {
        this.setState({ ended: true });
      }
    }
  }

  render() {
    if (this.state.ended) {
      return null;
    }

    let start = new Date(this.props.start).getTime();
    let end = this.props.end && new Date(this.props.end).getTime();
    let now = Date.now();
    let is_recurring = !!this.props.period;

    if (!is_recurring && ((end && end <= now) || (!end && start + day < now))) {
      this.setState({ ended: true });
      return null;
    }

    let target_time = start;
    if (is_recurring) {
      target_time = this.state.next_time;
    } else if (this.state.started && end) {
      target_time = end;
    }

    let countdown = (
      <span>
        {is_recurring || !end
          ? "In "
          : this.state.started
          ? "Ends in "
          : "Starts in "}
        <Countdown
          date={target_time}
          key={[this.props.name, this.props.period, target_time].join(",")}
          overtime={true}
          renderer={(props) => toNaturalLanguageTime(props.total)}
          onComplete={() => this.onCompleteCountdown()}
        />
        ,{" "}
      </span>
    );

    let absolute_time_string;
    if (this.state.started && !end) {
      absolute_time_string =
        "On " + formatDate(target_time, this.props.hasTime);
    } else if (this.props.period > day || !is_recurring) {
      absolute_time_string =
        "on " + formatDate(target_time, this.props.hasTime);
    } else {
      absolute_time_string =
        "at " + formatTime(target_time, this.props.hasTime);
    }

    let flex_order = target_time / minute;
    if (!is_recurring) {
      flex_order -= (10 * year) / minute;
    }

    return (
      <div
        className={
          "card" +
          (this.state.started ? " ongoing" : "") +
          (this.state.expanded ? " expanded" : "") +
          " " +
          this.props.type
        }
        style={{ order: flex_order }}
        onClick={() => this.setState({ expanded: !this.state.expanded })}
      >
        <h2>
          <img
            src={icons[this.props.type]}
            alt={this.props.type}
            width="22px"
          />
          {this.props.name}
        </h2>
        <p>
          {is_recurring || !(this.state.started && !end) ? countdown : ""}
          {absolute_time_string}
        </p>
      </div>
    );
  }
}

Card.defaultProps = {
  end: false,
  period: false,
  hasTime: true,
};
