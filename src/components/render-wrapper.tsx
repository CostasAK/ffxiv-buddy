import { TooltipProvider } from "@/components/ui/tooltip";
import { PropsWithChildren } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface Props extends PropsWithChildren {}

export const RenderWrapper = ({ children }: Props) => (
  <HelmetProvider>
    <Helmet
      defaultTitle={import.meta.env.VITE_APP_NAME}
      titleTemplate={`%s - ${import.meta.env.VITE_APP_NAME}`}
    />

    <TooltipProvider delayDuration={500}>{children}</TooltipProvider>
  </HelmetProvider>
);
