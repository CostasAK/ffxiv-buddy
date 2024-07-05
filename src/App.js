import "./App.css";

import React, { useEffect } from "react";

import roulette_icon from "./assets/chat_messengericon_dutyroulette.png";
import goldsaucer_icon from "./assets/chat_messengericon_goldsaucer.png";
import hunts_icon from "./assets/chat_messengericon_thehunt.png";
import collectables_icon from "./assets/chat_messengericon_treasurehunt.png";
import others_icon from "./assets/chat_messengericon_weeklybingo.png";
import { Checklist } from "./components/Checklist";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Timers } from "./components/Timers";

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;

const todos = [
  {
    category: "Collectables",
    icon: collectables_icon,
    todos: [
      // {
      //   name: "Allagan Tomestones of Astronomy",
      //   reset: "weekly",
      // },
      {
        name: "Treasure Map",
        period: 18 * hour,
      },
    ],
  },
  // {
  //   category: "Raids",
  //   icon: raid_icon,
  //   todos: [
  //     {
  //       name: "Abyssos: The Fifth Circle (Normal)",
  //       reset: "weekly",
  //     },
  //     {
  //       name: "Abyssos: The Sixth Circle (Normal)",
  //       reset: "weekly",
  //     },
  //     {
  //       name: "Abyssos: The Seventh Circle (Normal)",
  //       reset: "weekly",
  //     },
  //     {
  //       name: "Abyssos: The Eighth Circle (Normal)",
  //       reset: "weekly",
  //     },
  //     {
  //       name: "Unsung Blade of Abyssos",
  //       reset: "weekly",
  //     },
  //     {
  //       name: "Abyssos: The Fifth Circle (Savage)",
  //       reset: "weekly",
  //     },
  //     {
  //       name: "Abyssos: The Sixth Circle (Savage)",
  //       reset: "weekly",
  //     },
  //     {
  //       name: "Abyssos: The Seventh Circle (Savage)",
  //       reset: "weekly",
  //     },
  //     {
  //       name: "Abyssos: The Eighth Circle (Savage)",
  //       reset: "weekly",
  //     },
  //     {
  //       name: "Containment Bay S1T7 (Unreal)",
  //       reset: "weekly",
  //     },
  //     {
  //       name: "Alliance Raid: Aglaia",
  //       reset: "weekly",
  //     },
  //   ],
  // },
  {
    category: "Roulettes",
    icon: roulette_icon,
    todos: [
      {
        name: "Expert",
        reset: "daily",
      },
      {
        name: "High-level Dungeons",
        reset: "daily",
      },
      {
        name: "Leveling",
        reset: "daily",
      },
      {
        name: "Trials",
        reset: "daily",
      },
      {
        name: "Main Scenario",
        reset: "daily",
      },
      {
        name: "Guildhests",
        reset: "daily",
      },
      {
        name: "Alliance Raids",
        reset: "daily",
      },
      {
        name: "Normal Raids",
        reset: "daily",
      },
      {
        name: "Mentor",
        reset: "daily",
      },
      {
        name: "Frontline",
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
      {
        name: "Triple Triad / Verminion Tournament",
        reset: "weekly",
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

function App() {
  const all_pages = ["Timers", "Checklist"];
  const [page, setPage] = React.useState(
    localStorage.getItem("page") || "Timers"
  );

  useEffect(() => {
    localStorage.setItem("page", page);
  }, [page]);

  const Page = (props) => {
    const { page, ...leftovers } = props;
    if (props.page === "Checklist") {
      return <Checklist {...leftovers} />;
    }
    return <Timers {...leftovers} />;
  };

  return (
    <div className="App">
      <Header />
      <Navigation setPage={setPage} getPage={page} allPages={all_pages} />
      <main className="main">
        <Page page={page} todos={todos} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
