import "./style.css";

import { Component } from "react";
import { FaGithub } from "react-icons/fa";
import { KofiButton } from "react-kofi-button";
import SVG from "react-inlinesvg";
import avatar from "../../assets/initialen.svg";
import { eorzeaTime } from "../../functions/eorzeaTime";
import { formatTime } from "../../functions/formatDateTime";

export class Footer extends Component {
  constructor(props) {
    super(props);

    let now = Date.now();

    this.state = {
      eorzeaTime: eorzeaTime(now),
      localTime: formatTime(now),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let now = Date.now();
      this.setState({
        eorzeaTime: eorzeaTime(now),
        localTime: formatTime(now),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer-time">
          <div>
            <span>
              <b>ET</b>
            </span>
            <span className="time">
              {this.state.eorzeaTime.padStart(5, "0")}
            </span>
          </div>
          <div>
            <span>
              <b>LT</b>
            </span>
            <span className="time">
              {this.state.localTime.padStart(5, "0")}
            </span>
          </div>
        </div>
        <div className="footer-credits">
          <div>
            <span>Made by</span>  
            <a href="https://github.com/CostasAK">
              <SVG src={avatar} className="avatar" /> <span>CostasAK</span>
            </a>
          </div>
          <KofiButton username="costasak" preset="skinny" label="Support me" />
          <div>
            <a href="https://github.com/CostasAK/ffxiv-buddy">
              <FaGithub /> <span>Source</span>
            </a>
          </div>
        </div>
        <div className="footer-legal">
          <div>© SQUARE ENIX CO., LTD. All Rights Reserved.</div>
          <div>
            FINAL FANTASY is a registered trademark of Square Enix Holdings Co.,
            Ltd.
          </div>
          <div>All material used under license.</div>
        </div>
      </footer>
    );
  }
}
