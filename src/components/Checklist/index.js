import "./style.css";

import { ToDo } from "../ToDo";

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

const todos = [
  { name: "Weekly Tomestones", reset: "weekly" },
  { name: "Asphodelos (Normal) rewards", reset: "weekly" },
  { name: "Asphodelos (Savage) rewards", reset: "weekly" },
  { name: "Elite mark bills", reset: "weekly" },
  { name: "Masked Carnivale", reset: "weekly" },
  { name: "Challenge Log", reset: "weekly" },
  { name: "Wondrous Tails", reset: "weekly" },
  { name: "Faux Hollows", reset: "weekly" },
  { name: "Custom Deliveries", reset: "weekly" },
  { name: "Doman Enclave Reconstruction Effort", reset: "weekly" },
  { name: "Squadron Priority Mission", reset: "weekly" },
  { name: "Beast Tribe Quests", reset: "daily" },
  { name: "Regular Mark Bills", reset: "daily" },
  { name: "Expert Roulette", reset: "daily" },
  { name: "Level 50/60/70/80 Dungeons Roulette", reset: "daily" },
  { name: "Leveling Roulette", reset: "daily" },
  { name: "Trials Roulette", reset: "daily" },
  { name: "Main Scenario Roulette", reset: "daily" },
  { name: "Guildhests Roulette", reset: "daily" },
  { name: "Alliance Raids Roulette", reset: "daily" },
  { name: "Normal Raids Roulette", reset: "daily" },
  { name: "Mentor Roulette", reset: "daily" },
  { name: "Frontline Roulette", reset: "daily" },
  { name: "Mini Cactpot", reset: "daily" },
  { name: "Grand Company Turn-ins", reset: "grand company" },
  { name: "Fashion Report", reset: "fashion report" },
  { name: "Jumbo Cactpot", reset: "jumbo cactpot" },
  { name: "Treasure Map", period: 18 * hour },
  { name: "Squadron Mission", period: 18 * hour },
  { name: "Gardening", period: day },
];

export function Checklist() {
  return (
    <div className="Checklist">
      {todos.map((t) => (
        <ToDo name={t.name} reset={t.reset} period={t.period} key={t.name} />
      ))}
    </div>
  );
}
