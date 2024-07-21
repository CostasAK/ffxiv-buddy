import { DAY, WEEK } from "@/constants/time";

type ResetType = {
  name: string;
  description?: string;
  period: number;
  start: number;
  end?: number;
  type: "reset";
};

export const RESETS: ResetType[] = [
  {
    name: "Weekly Reset",
    description:
      "The following things reset at this time:<ul><li>Weekly Allagan tomestones of astronomy cap.</li><li>Asphodelos (Normal) raid rewards.</li><li>Asphodelos (Savage) raid rewards and progression.</li><li>Elite mark bills.</li><li>Masked Carnivale.</li><li>Challenge Log.</li><li>Wondrous Tails.</li><li>Faux Hollows.</li><li>Custom Deliveries.</li><li>Doman Enclave Reconstruction Effort.</li><li>Squadron Priority Mission.</li></ul>",
    period: WEEK,
    start: new Date("28 December 2021 8:00 GMT").getTime(),
    type: "reset",
  },
  {
    name: "Daily Reset",
    description:
      "The following things reset at this time:<ul><li>Duty Roulette bonuses.</li><li>Beast Tribe Quests.</li><li>Regular mark bills.</li></ul>",
    period: DAY,
    start: new Date("28 December 2021 15:00 GMT").getTime(),
    type: "reset",
  },
  {
    name: "Leve Refresh",
    description:
      "Every 12 hours.<br />At this time, you gain 3 leve allowances.",
    period: DAY / 2,
    start: new Date("27 December 2021 12:00 GMT").getTime(),
    type: "reset",
  },
  {
    name: "Grand Company Reset",
    description:
      "Every day.<br/>The following things reset at this time:<ul><li>Grand Company Turn-ins are available.</li><li>Squadron Training Allowances.</li></ul>",
    period: DAY,
    start: new Date("27 December 2021 20:00 GMT").getTime(),
    type: "reset",
  },
  {
    name: "Jumbo Cactpot (NA)",
    description:
      "Every week.<br/>At this time:<ul><li>Winning Jumbo Cactpot numbers will be drawn.</li>During the first hour you get Early Bird bonus MGP.</ul>",
    period: WEEK,
    start: new Date("1 January 2022 19:00 PDT").getTime(),
    end: new Date("1 January 2022 20:00 PDT").getTime(),
    type: "reset",
  },
  {
    name: "Jumbo Cactpot (EU)",
    description:
      "Every week.<br/>At this time:<ul><li>Winning Jumbo Cactpot numbers will be drawn.</li>During the first hour you get Early Bird bonus MGP.</ul>",
    period: WEEK,
    start: new Date("1 January 2022 19:00 UTC").getTime(),
    end: new Date("1 January 2022 20:00 UTC").getTime(),
    type: "reset",
  },
  {
    name: "Jumbo Cactpot (JP)",
    description:
      "Every week.<br/>At this time:<ul><li>Winning Jumbo Cactpot numbers will be drawn.</li>During the first hour you get Early Bird bonus MGP.</ul>",
    period: WEEK,
    start: new Date("1 January 2022 04:00 PST").getTime(),
    end: new Date("1 January 2022 05:00 PST").getTime(),
    type: "reset",
  },
  {
    name: "Jumbo Cactpot (AU)",
    description:
      "Every week.<br/>At this time:<ul><li>Winning Jumbo Cactpot numbers will be drawn.</li>During the first hour you get Early Bird bonus MGP.</ul>",
    period: WEEK,
    start: new Date("1 January 2022 19:00 UTC+10").getTime(),
    end: new Date("1 January 2022 20:00 UTC+10").getTime(),
    type: "reset",
  },
  {
    name: "Fashion Report",
    description:
      'Every week.<br/>During this time you can present yourself for judging at the Gold Saucer for the Fashion Report Challenge.<br /><a href="https://www.reddit.com/r/ffxiv/search?q=fashion%20report%20week%20full%20report&restrict_sr=1&t=week&sort=new" target="_blank">Click here for detailed reports</a>.',
    period: WEEK,
    start: new Date("31 December 2021 8:00 GMT").getTime(),
    end: new Date("4 January 2022 8:00 GMT").getTime(),
    type: "reset",
  },
];
