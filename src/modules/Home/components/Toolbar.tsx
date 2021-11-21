import React from "react";
import ButtonToolbar from "./ButtonToolbar";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="icon center-items">
        <i className="fab fa-pinterest-p fa-2x"></i>
      </div>
      <ButtonToolbar icon={"fas fa-user"} />
      <ButtonToolbar icon={"fas fa-bell"} />
      <ButtonToolbar icon={"fas fa-comments"} />
      <div style={{ marginTop: "1rem", marginBottom:"1rem" }}>
        <ButtonToolbar icon={"fab fa-gratipay"} />
      </div>
      <ButtonToolbar icon={"fas fa-question"} />
      <ButtonToolbar icon={"fas fa-plus"} />
    </div>
  );
};

export default Toolbar;
