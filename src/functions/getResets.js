const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;

export function getResets() {
  return [
    {
      name: "Weekly Reset",
      description:
        "The following things reset at this time:<ul><li>Weekly repeatable quests.</li><li>Weekly tomestone cap.</li><li>Masked Carnival targets.</li><li>Challenge Log.</li><li>Wondrous Tails</li><li>Faux Hollows.</li><li>Custom Delivery allowances.</li><li>Doman Enclave Reconstruction Effort donations.</li><li>Squadron Priority Mission.</li></ul>",
      period: week,
      start: new Date("28 December 2021 8:00 GMT").getTime(),
      type: "reset",
    },
    {
      name: "Daily Reset",
      description:
        "The following things reset at this time:<ul><li>Duty Roulette bonuses.</li><li>Daily repeatable quests.</li><li>Beastmen quest allowances.</li></ul>",
      period: day,
      start: new Date("28 December 2021 15:00 GMT").getTime(),
      type: "reset",
    },
    {
      name: "Leve Refresh",
      description:
        "Every 12 hours.<br />At this time, you gain 3 leve allowances.",
      period: day / 2,
      start: new Date("27 December 2021 12:00 GMT").getTime(),
      type: "reset",
    },
    {
      name: "Grand Company Reset",
      description:
        "The following things reset at this time:<ul><li>Grand Company Turn-ins are available.</li><li>Squadron Training Allowances.</li></ul>",
      period: day,
      start: new Date("27 December 2021 20:00 GMT").getTime(),
      type: "reset",
    },
    {
      name: "Jumbo Cactpot",
      description:
        "Every week.<br/>At this time:<ul><li>Winning Jumbo Cactpot numbers will be drawn.</li>During the first hour you gets Early Bird bonus MGP.</ul>",
      period: week,
      start: new Date("1 January 2022 19:00 GMT").getTime(),
      end: new Date("1 January 2022 20:00 GMT").getTime(),
      type: "reset",
    },
    {
      name: "Fashion Report",
      description:
        'During this time you can present yourself for judging at the Gold Saucer for the Fashion Report Challenge.<br /><a href="https://www.reddit.com/r/ffxiv/search?q=fashion%20report%20week%20full%20report&restrict_sr=1&t=week&sort=new" target="_blank">Click here for detailed reports</a>.',
      period: week,
      start: new Date("31 December 2021 8:00 GMT").getTime(),
      end: new Date("4 January 2022 8:00 GMT").getTime(),
      type: "reset",
    },
  ];
}
