import "./style.css";

import React from "react";
import { ToDo } from "../ToDo";

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;

const categories = [
  "Collectables",
  "Roulettes",
  "Raids",
  "Gold Saucer",
  // "Housing",
  // "DoH/L",
  "Grand Company and Hunts",
];

const todos = [
  { name: "Weekly Tomestones", reset: "weekly", category: "Collectables" },
  {
    name: "Asphodelos (Normal) rewards",
    reset: "weekly",
    category: "Raids",
  },
  { name: "Asphodelos (Savage) rewards", reset: "weekly", category: "Raids" },
  {
    name: "Elite mark bills",
    reset: "weekly",
    category: "Grand Company and Hunts",
  },
  { name: "Masked Carnivale", reset: "weekly" },
  { name: "Challenge Log", reset: "weekly" },
  { name: "Wondrous Tails", reset: "weekly" },
  { name: "Faux Hollows", reset: "weekly", category: "Raids" },
  { name: "Custom Deliveries", reset: "weekly" },
  {
    name: "Doman Enclave Reconstruction Effort",
    reset: "weekly",
    category: "Collectables",
  },
  {
    name: "Squadron Priority Mission",
    reset: "weekly",
    category: "Grand Company and Hunts",
  },
  { name: "Beast Tribe Quests", reset: "daily" },
  {
    name: "Regular Mark Bills",
    reset: "daily",
    category: "Grand Company and Hunts",
  },
  { name: "Expert Roulette", reset: "daily", category: "Roulettes" },
  {
    name: "Level 50/60/70/80 Dungeons Roulette",
    reset: "daily",
    category: "Roulettes",
  },
  { name: "Leveling Roulette", reset: "daily", category: "Roulettes" },
  { name: "Trials Roulette", reset: "daily", category: "Roulettes" },
  { name: "Main Scenario Roulette", reset: "daily", category: "Roulettes" },
  { name: "Guildhests Roulette", reset: "daily", category: "Roulettes" },
  { name: "Alliance Raids Roulette", reset: "daily", category: "Roulettes" },
  { name: "Normal Raids Roulette", reset: "daily", category: "Roulettes" },
  { name: "Mentor Roulette", reset: "daily", category: "Roulettes" },
  { name: "Frontline Roulette", reset: "daily", category: "Roulettes" },
  { name: "Mini Cactpot", reset: "daily", category: "Gold Saucer" },
  {
    name: "Grand Company Turn-ins",
    reset: "grand company",
    category: "Grand Company and Hunts",
  },
  { name: "Fashion Report", reset: "fashion report", category: "Gold Saucer" },
  { name: "Jumbo Cactpot", reset: "jumbo cactpot", category: "Gold Saucer" },
  { name: "Treasure Map", period: 18 * hour, category: "Collectables" },
  {
    name: "Squadron Mission",
    period: 18 * hour,
    category: "Grand Company and Hunts",
  },
];

export function Checklist() {
  const [columns, setColumns] = React.useState(1);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setColumns(Math.floor(window.innerWidth / 470));
    });
  }, []);

  return (
    <div className="Checklist" style={{ columns: columns }}>
      {categories.map((c) => (
        <div className="todo-category">
          <div className="category-header">
            <span>{c}</span>
          </div>
          <div className="todos">
            {todos
              .filter((t) => t.category === c)
              .map((t) => (
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
      <div className="todo-category">
        <div className="category-header">
          <span>Others</span>
        </div>
        <div className="todos">
          {todos
            .filter((t) => !t.category)
            .map((t) => (
              <ToDo
                name={t.name}
                reset={t.reset}
                period={t.period}
                key={t.name}
              />
            ))}
        </div>
      </div>
      {/* {todos.map((t) => (
        <ToDo name={t.name} reset={t.reset} period={t.period} key={t.name} />
      ))} */}
    </div>
  );
}
