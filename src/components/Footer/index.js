import "./style.css";

import { Component } from "react";
import { FaGithub } from "react-icons/fa";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div>
          By&nbsp;<a href="https://github.com/CostasAK">CostasAK</a>
        </div>
        <div>
          <a href="https://github.com/CostasAK/ffxiv-timers">
            <FaGithub />
            &nbsp;Source
          </a>
        </div>
        <div>FINAL FANTASY XIV Copyright © 2010-2021 SQUARE ENIX CO., LTD.</div>
      </footer>
    );
  }
}
