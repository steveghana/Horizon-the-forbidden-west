import React, { useRef } from "react";
const Navigation = ({ showcontent }) => {
  return (
    <nav style={{ opacity: showcontent ? "1" : "0" }} className="navigation">
      <div className="navigation_logo-name">D</div>
      <div className="navigation_list">LIST</div>
    </nav>
  );
};

export default Navigation;
