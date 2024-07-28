import { SHEETS } from "@/api/buddy-data-sheets";
import { queryClient } from "@/api/query-client";
import axios from "axios";
import { parse } from "papaparse";

export type BuddyDataSheets = keyof typeof SHEETS;

const buddyData = axios.create({
  baseURL:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vT6RyWZRbuYrNfSnbHEa2PBXgETOgZtfhYgN6QlTqDr5PRVM9IlG93otgT_S_cppwdxAhoIqTc_EAsM",
  method: "GET",
  headers: {},
});

const urlParams = (gid: number) => `pub?single=true&output=csv&gid=${gid}`;

export const queryBuddyData = async (sheet: BuddyDataSheets) => {
  const { data } = await buddyData({
    url: urlParams(SHEETS[sheet].gid),
  });

  console.log(parse(data, { header: true }).data);

  return SHEETS[sheet].schema.parse(parse(data, { header: true }).data);
};

export const ensureBuddyData = async (sheet: BuddyDataSheets) =>
  await queryClient.ensureQueryData({
    queryKey: ["buddyData", sheet],
    queryFn: () => queryBuddyData(sheet),
  });
