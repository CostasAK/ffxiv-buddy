import { ensureBuddyData } from "@/api/buddy-data";
import { Component } from "@/routes/timers/timers";

export const loader = async () => await ensureBuddyData("Timers");

export { Component };
