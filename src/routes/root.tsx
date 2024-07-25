import { PageSpinner } from "@/components/page-spinner";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import { cn } from "@/utils/cn";
import { Outlet, useNavigation } from "react-router-dom";

export default function Root() {
  const isLoading = useNavigation().state === "loading";

  return (
    <>
      <Header />
      <main
        className={cn(
          "grow px-3 py-6 transition-all delay-700 sm:px-8",
          isLoading && "saturate-25 pointer-events-none opacity-75 blur",
        )}
      >
        <Outlet />
      </main>
      <Footer />
      {isLoading && <PageSpinner className="animate-late-fade-in opacity-0" />}
    </>
  );
}
