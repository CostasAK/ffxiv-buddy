import "./style.css";

import { Component } from "react";
import { FaGithub } from "react-icons/fa";
import { SiKofi } from "react-icons/si";
import avatar from "../../assets/initialen.svg";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-credits">
          <div>
            <span>Made by</span>  
            <a href="https://github.com/CostasAK">
              <img alt="" src={avatar} className="avatar" /> 
              <span>CostasAK</span>
            </a>
          </div>
          <div>
            <a href="https://github.com/CostasAK/ffxiv-timers">
              <FaGithub /> <span>Source</span>
            </a>
          </div>
          <div
            style={{
              background: "#00B9FE",
              padding: "calc(var(--margins) / 8) calc(var(--margins) / 2)",
            }}
          >
            <a
              href="https://ko-fi.com/costasak"
              style={{ color: "#FFFFFF", fontWeight: "bold" }}
              target="_blank"
              rel="noreferrer"
            >
              <SiKofi /> <span>Support me</span>
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
