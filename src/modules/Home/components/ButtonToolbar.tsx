import React from "react";

interface Props {
  icon: string;
  dark?: boolean;
}

const ButtonToolbar = ({ icon, dark }: Props) => {
  return (
    <div className="btn-toolbar">
      <i className={icon}></i>
    </div>
  );
};

export default ButtonToolbar;
