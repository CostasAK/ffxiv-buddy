import "./style.css";

import { Component } from "react";
import logo from "../../assets/MainIcon47.png";

export class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="title">
          <img alt="" src={logo} height="40px" /> <span>FFXIV Timers</span>
        </h1>

        <p className="description">
          Reset Timers and other Countdowns for Final Fantasy XIV, in your local
          time with countdowns.
        </p>
      </header>
    );
  }
}
