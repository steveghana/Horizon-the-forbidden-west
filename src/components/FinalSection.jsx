import React from "react";
import xbox1 from "../assets/images/xbox.png";
import ps4 from "../assets/images/ps4.png";
import ps5 from "../assets/images/ps5.png";
import steam from "../assets/images/steam.png";
import xboxconsole from "../assets/images/series x.png";
import ps4console from "../assets/images/psconsole5.png";
import ps5console from "../assets/images/Bitmap@2x.png";
import PC from "../assets/images/pc.png";
import Teen from "../assets/images/tlogo.png";
import guerilla from "../assets/images/164px-Guerrilla_logo.svg.png";
const LastSection = () => {
  return (
    <div className="footer_container">
      <div className="footer_header link">Available for purchase</div>
      <div className="selling_brands">
        <img src={xbox1} alt="" />
        <img src={ps4} alt="" />
        <img src={ps5} alt="" />
        <img src={steam} alt="" />
      </div>
      <div className="equivalent_console_img">
        <img src={xboxconsole} alt="" />
        <img src={ps4console} alt="" />
        <img src={ps5console} alt="" />
        <img src={PC} alt="" />
      </div>
      <div className="footer_nav_copyright_section">
        <img src={Teen} alt="" />
        <div className="footer_nav">
          <ul className="footer_nav_wrapper">
            <li className="footer_nav_item">HOME</li>
            <li className="footer_nav_item">PRIVACY</li>
            <li className="footer_nav_item">TERMS</li>
            <li className="footer_nav_item">SUPPORT</li>
            <li className="footer_nav_item">CAREER</li>
            <li className="footer_nav_item">ABOUT</li>
          </ul>
          <div className="footer_copyright_text">
            FORBIDDEN WEST © 2021 ALL RIGHTS RESERVED
          </div>
        </div>
        <img src={guerilla} alt="" />
      </div>
    </div>
  );
};

export default LastSection;
