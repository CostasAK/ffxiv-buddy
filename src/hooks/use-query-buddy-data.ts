import { BuddyDataSheets, queryBuddyData } from "@/api/buddy-data";
import { useQuery } from "@tanstack/react-query";

export const useQueryBuddyData = (sheet: BuddyDataSheets) => {
  return useQuery({
    queryKey: ["buddyData", sheet],
    queryFn: () => queryBuddyData(sheet),
  });
};
