import "./App.css";

import { Checklist } from "./components/Checklist";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import React from "react";
import { Timers } from "./components/Timers";

function App() {
  const all_pages = ["Timers", "Checklist"];
  const [page, setPage] = React.useState(
    localStorage.getItem("page") || "Timers"
  );

  React.useEffect(() => {
    localStorage.setItem("page", page);
  }, [page]);

  const Page = (props) => {
    if (props.page === "Checklist") {
      return <Checklist />;
    }
    return <Timers />;
  };

  return (
    <div className="App">
      <Header />
      <Navigation setPage={setPage} getPage={page} allPages={all_pages} />
      <main className="main">
        <Page page={page} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
