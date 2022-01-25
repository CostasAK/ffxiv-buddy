import "./App.css";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import React from "react";
import { Timers } from "./components/Timers";

function App() {
  const [page, setPage] = React.useState(
    localStorage.getItem("page") || "Timers"
  );
  const all_pages = ["Timers", "Checklist"];

  const Page = (props) => {
    if (props.page === "Checklist") {
      return null;
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
