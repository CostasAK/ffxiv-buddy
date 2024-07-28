import { persistOptions, queryClient } from "@/api/query-client";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { PropsWithChildren } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface Props extends PropsWithChildren {}

export const RenderWrapper = ({ children }: Props) => (
  <HelmetProvider>
    <Helmet
      defaultTitle={import.meta.env.VITE_APP_NAME}
      titleTemplate={`%s · ${import.meta.env.VITE_APP_NAME}`}
    />
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={persistOptions}
    >
      <TooltipProvider delayDuration={500}>{children}</TooltipProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  </HelmetProvider>
);
