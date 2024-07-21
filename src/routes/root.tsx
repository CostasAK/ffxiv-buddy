import Footer from "@/layout/footer";
import Header from "@/layout/header";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Header />
      <main className="grow px-3 py-6 sm:px-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
