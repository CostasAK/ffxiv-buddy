import "./style.css";

import React from "react";
import { ToDo } from "../ToDo";

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;

const todos = [
  {
    category: "Collectables",
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
        name: "Elite mark bills",
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
  const [columns, setColumns] = React.useState(
    Math.floor(window.innerWidth / 470)
  );

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setColumns(Math.floor(window.innerWidth / 470));
    });
  }, []);

  return (
    <div className="Checklist" style={{ columns: columns }}>
      {todos.map((c) => (
        <div className="todo-category">
          <div className="category-header">
            <span>{c.category}</span>
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
