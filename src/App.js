import React from "react";
import Navbar from "./components/Navbar";
import Router from "./router";

function App() {
  return (
    <>
      <Navbar />
      <div className="py-4">
        <Router />
      </div>
    </>
  );
}

export default App;
