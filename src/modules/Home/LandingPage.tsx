import React from "react";
import SearchBar from "./components/SearchBar";
import Toolbar from "./components/Toolbar";
import Grid from "./components/Grid";

const LandingPage = () => {
  return (
    <div className="rounded-container">
      <div className="content">
        <Toolbar />
        <div style={{ width: "100%" }}>
          <SearchBar />
          <Grid />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
