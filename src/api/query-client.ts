import { MINUTE, SECOND, WEEK } from "@/constants/time";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { removeOldestQuery } from "@tanstack/react-query-persist-client";
import { compress, decompress } from "lz-string";

const CACHE_MAX_AGE = 2 * WEEK;
const MAX_RETRY_DELAY = 64 * SECOND;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: CACHE_MAX_AGE,
      staleTime: 5 * SECOND,
      retry: true,
      retryDelay: (attemptIndex) =>
        attemptIndex < 6
          ? Math.min(
              Math.ceil(SECOND * (2 ** attemptIndex + Math.random())),
              MAX_RETRY_DELAY,
            )
          : MAX_RETRY_DELAY,
      refetchInterval: 5 * MINUTE,
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
  retry: removeOldestQuery,
  key: "FFXIV Buddy React Query Persister",
  serialize: (data) => compress(JSON.stringify(data)),
  deserialize: (data) => JSON.parse(decompress(data)),
});

export const persistOptions = { persister, maxAge: CACHE_MAX_AGE };
