import { Link } from "@/components/link";
import { DAY, WEEK } from "@/constants/time";
import { ReactNode } from "react";

type ResetType = {
  title: string;
  description?: string | ReactNode;
  period: number;
  start: number;
  end?: number;
  type: "reset";
};

export const RESETS: ResetType[] = [
  {
    title: "Weekly Reset",
    description: (
      <>
        The following things reset at this time:
        <ul>
          <li>Weekly Allagan tomestones cap.</li>
          <li>Raid rewards.</li>
          <li>Elite mark bills.</li>
          <li>Masked Carnivale.</li>
          <li>Challenge Log.</li>
          <li>Wondrous Tails.</li>
          <li>Faux Hollows.</li>
          <li>Custom Deliveries.</li>
          <li>Doman Enclave Reconstruction Effort.</li>
          <li>Squadron Priority Mission.</li>
        </ul>
      </>
    ),
    period: WEEK,
    start: new Date("28 December 2021 8:00 GMT").getTime(),
    type: "reset",
  },
  {
    title: "Daily Reset",
    description: (
      <>
        The following things reset at this time:
        <ul>
          <li>Duty Roulette bonuses.</li>
          <li>Beast Tribe Quests.</li>
          <li>Regular mark bills.</li>
        </ul>
      </>
    ),
    period: DAY,
    start: new Date("28 December 2021 15:00 GMT").getTime(),
    type: "reset",
  },
  {
    title: "Leve Refresh",
    description: "At this time, you gain 3 leve allowances.",
    period: DAY / 2,
    start: new Date("27 December 2021 12:00 GMT").getTime(),
    type: "reset",
  },
  {
    title: "Grand Company Reset",
    description: (
      <>
        The following things reset at this time:
        <ul>
          <li>Grand Company Turn-ins are available.</li>
          <li>Squadron Training Allowances.</li>
        </ul>
      </>
    ),
    period: DAY,
    start: new Date("27 December 2021 20:00 GMT").getTime(),
    type: "reset",
  },
  {
    title: "Jumbo Cactpot (NA)",
    description: (
      <>
        At this time:
        <ul>
          <li>Winning Jumbo Cactpot numbers will be drawn.</li>
          <li>During the first hour you get Early Bird bonus MGP.</li>
        </ul>
      </>
    ),
    period: WEEK,
    start: new Date("1 January 2022 19:00 PDT").getTime(),
    end: new Date("1 January 2022 20:00 PDT").getTime(),
    type: "reset",
  },
  {
    title: "Jumbo Cactpot (EU)",
    description: (
      <>
        At this time:
        <ul>
          <li>Winning Jumbo Cactpot numbers will be drawn.</li>
          <li>During the first hour you get Early Bird bonus MGP.</li>
        </ul>
      </>
    ),
    period: WEEK,
    start: new Date("1 January 2022 19:00 UTC").getTime(),
    end: new Date("1 January 2022 20:00 UTC").getTime(),
    type: "reset",
  },
  {
    title: "Jumbo Cactpot (JP)",
    description: (
      <>
        At this time:
        <ul>
          <li>Winning Jumbo Cactpot numbers will be drawn.</li>
          <li>During the first hour you get Early Bird bonus MGP.</li>
        </ul>
      </>
    ),
    period: WEEK,
    start: new Date("1 January 2022 04:00 PST").getTime(),
    end: new Date("1 January 2022 05:00 PST").getTime(),
    type: "reset",
  },
  {
    title: "Jumbo Cactpot (AU)",
    description: (
      <>
        At this time:
        <ul>
          <li>Winning Jumbo Cactpot numbers will be drawn.</li>
          <li>During the first hour you get Early Bird bonus MGP.</li>
        </ul>
      </>
    ),
    period: WEEK,
    start: new Date("1 January 2022 19:00 UTC+10").getTime(),
    end: new Date("1 January 2022 20:00 UTC+10").getTime(),
    type: "reset",
  },
  {
    title: "Fashion Report",
    description: (
      <>
        During this time you can present yourself for judging at the Gold Saucer
        for the Fashion Report Challenge.
        <Link href="https://www.reddit.com/r/ffxiv/search?q=fashion%20report%20week%20full&restrict_sr=1&t=week">
          Click here for detailed reports.
        </Link>
      </>
    ),
    period: WEEK,
    start: new Date("31 December 2021 8:00 GMT").getTime(),
    end: new Date("4 January 2022 8:00 GMT").getTime(),
    type: "reset",
  },
];
