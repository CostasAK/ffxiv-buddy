import "./style.css";

import React from "react";
import { ToDo } from "../ToDo";
import collectables_icon from "../../assets/chat_messengericon_treasurehunt.png";
import goldsaucer_icon from "../../assets/chat_messengericon_goldsaucer.png";
import hunts_icon from "../../assets/chat_messengericon_thehunt.png";
import others_icon from "../../assets/chat_messengericon_weeklybingo.png";
import raid_icon from "../../assets/chat_messengericon_raids.png";
import roulette_icon from "../../assets/chat_messengericon_dutyroulette.png";

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;

const todos = [
  {
    category: "Collectables",
    icon: collectables_icon,
    todos: [
      {
        name: "Weekly Tomestones",
        reset: "weekly",
      },
      {
        name: "Treasure Map",
        period: 18 * hour,
      },
    ],
  },
  {
    category: "Raids",
    icon: raid_icon,
    todos: [
      {
        name: "Asphodelos (Normal) rewards",
        reset: "weekly",
      },
      {
        name: "Asphodelos (Savage) rewards",
        reset: "weekly",
      },
      {
        name: "Faux Hollows",
        reset: "weekly",
      },
    ],
  },
  {
    category: "Roulettes",
    icon: roulette_icon,
    todos: [
      {
        name: "Expert Roulette",
        reset: "daily",
      },
      {
        name: "Level 50/60/70/80 Dungeons Roulette",
        reset: "daily",
      },
      {
        name: "Leveling Roulette",
        reset: "daily",
      },
      {
        name: "Trials Roulette",
        reset: "daily",
      },
      {
        name: "Main Scenario Roulette",
        reset: "daily",
      },
      {
        name: "Guildhests Roulette",
        reset: "daily",
      },
      {
        name: "Alliance Raids Roulette",
        reset: "daily",
      },
      {
        name: "Normal Raids Roulette",
        reset: "daily",
      },
      {
        name: "Mentor Roulette",
        reset: "daily",
      },
      {
        name: "Frontline Roulette",
        reset: "daily",
      },
    ],
  },
  {
    category: "Grand Company and Hunts",
    icon: hunts_icon,
    todos: [
      {
        name: "Grand Company Turn-ins",
        reset: "grand company",
      },
      {
        name: "Squadron Priority Mission",
        reset: "weekly",
      },
      {
        name: "Squadron Mission",
        period: 18 * hour,
      },
      {
        name: "Elite Mark Bills",
        reset: "weekly",
      },
      {
        name: "Regular Mark Bills",
        reset: "daily",
      },
    ],
  },
  {
    category: "Gold Saucer",
    icon: goldsaucer_icon,
    todos: [
      {
        name: "Mini Cactpot",
        reset: "daily",
      },
      {
        name: "Fashion Report",
        reset: "fashion report",
      },
      {
        name: "Jumbo Cactpot",
        reset: "jumbo cactpot",
      },
    ],
  },
  {
    category: "Others",
    icon: others_icon,
    todos: [
      {
        name: "Masked Carnivale",
        reset: "weekly",
      },
      {
        name: "Challenge Log",
        reset: "weekly",
      },
      {
        name: "Wondrous Tails",
        reset: "weekly",
      },
      {
        name: "Custom Deliveries",
        reset: "weekly",
      },
      {
        name: "Doman Enclave Reconstruction Effort",
        reset: "weekly",
      },
      {
        name: "Beast Tribe Quests",
        reset: "daily",
      },
    ],
  },
];

export function Checklist() {
  const getColumns = () =>
    Math.max(Math.min(Math.floor(window.innerWidth / 480), 3), 1);
  const [columns, setColumns] = React.useState(getColumns());

  React.useEffect(() => {
    window.addEventListener("resize", () => setColumns(getColumns()));
  }, []);

  return (
    <div className="Checklist" style={{ columns: columns }}>
      {todos.map((c) => (
        <div className="todo-category">
          <div className="category-header">
            <img alt="" src={c.icon} />
            <span> {c.category}</span>
          </div>
          <div className="todos">
            {c.todos.map((t) => (
              <ToDo
                name={t.name}
                reset={t.reset}
                period={t.period}
                key={t.name}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
