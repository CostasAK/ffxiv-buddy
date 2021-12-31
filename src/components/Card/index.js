import "./style.css";

import { formatDate, formatTime } from "../../functions/formatDateTime";

import Countdown from "react-countdown";
import React from "react";
import { isPast } from "../../functions/isPast";
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

    let start = nextTime(this.props.period, toTime(this.props.start));
    let end = nextTime(this.props.period, toTime(this.props.end));

    while (this.props.period && end && start > end) {
      start -= this.props.period;
    }

    this.state = {
      start: start,
      end: end,
      started: isPast(start),
      ended: isPast(end) || (!end && isPast(start + day)),
      expanded: false,
    };

    this.onCompleteCountdown = this.onCompleteCountdown.bind(this);
  }

  onCompleteCountdown() {
    if (this.props.period) {
      let start = nextTime(this.props.period, toTime(this.state.start));
      let end = nextTime(this.props.period, toTime(this.state.end));

      while (this.props.period && end && start > end) {
        start -= this.props.period;
      }

      this.setState({
        start: start,
        end: end,
      });
    }
    if (isPast(this.state.start)) {
      this.setState({ started: true });
    }
    if (isPast(this.state.end)) {
      this.setState({ ended: true });
    }
  }

  render() {
    if (this.state.ended) {
      return null;
    }

    let start = this.state.start;
    let end = this.state.end;
    let is_recurring = !!this.props.period;

    if (!is_recurring && (isPast(end) || (!end && isPast(start + day)))) {
      this.setState({ ended: true });
      return null;
    }

    let target_time = start;
    if (this.state.started && end) {
      target_time = end;
    }

    let countdown = (
      <span>
        {!end ? "In " : this.state.started ? "Ends in " : "Starts in "}
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
    } else if (isPast(target_time - day)) {
      absolute_time_string =
        "at " + formatTime(target_time, this.props.hasTime);
    } else {
      absolute_time_string =
        "on " + formatDate(target_time, this.props.hasTime);
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
