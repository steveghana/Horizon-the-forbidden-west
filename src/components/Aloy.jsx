import React from "react";
import Text from "../assets/images/CHARACTERS.png";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import aloy from "../assets/images/Bitmap2.png";
import greenBg from "../assets/images/Bitmap Copy.png";
import underwaterRobots from "../assets/images/Bitmapcopy.png";
import connected from "../assets/images/STAYCONNECTED.png";
import ALOY from "../assets/images/S8.png";
import EMMA from "../assets/images/S2.png";
import MUCHA from "../assets/images/S4.png";
import KARNOV from "../assets/images/S5.png";
import weapon1 from "../assets/images/weapon1.png";
import weapon2 from "../assets/images/wepons2.png";
import JUN from "../assets/images/S7.png";
import { Boss, cosplay, Fanversion, underwater, massiveWorld } from "./export";
function Aloy() {
  const characters = ["ALOY", "EMMA", "MUCHA", "KARNOV", "JUN"];
  const characterDisplay = (i) =>
    i === 0 ? ALOY : i === 1 ? EMMA : i === 2 ? MUCHA : i === 3 ? KARNOV : JUN;
  return (
    <div className="alloy">
      <div className="character-text">
        <img src={Text} alt="CHARACTERS" />
      </div>
      <div className="character_aloy">
        <img src={aloy} alt="Aloy" />
        <div className="characters">
          {characters.map((img, i) => (
            <div
              style={{ backgroundImage: `url(${characterDisplay(i)})` }}
              className="small_ch_img"
            >
              {img}
            </div>
          ))}
          <div className="protagonist_character btn">Protagonist</div>
        </div>
        <h1 className="character_name">
          ALOY <div className="more_info">More Info</div>
        </h1>
        <div className="yellow_text">Think You Can Stop Me</div>
        <div className="twin_bow">
          <img src={weapon1} alt="" />
          <img src={weapon2} alt="" />
        </div>
      </div>

      <div className="green_bg">
        <div className="green_bg_text">
          <img src={connected} alt="Stay connected" />
        </div>
        <img src={greenBg} alt="Bg" />
        <img src={underwaterRobots} alt="Bg" />
        <img className="green_bg" src={greenBg} alt="Bg" />
      </div>
      <div className="social_views_links_container">
        <div className="social_llnks_container">
          <div className="social_links">
            <Facebook
              fontSize="large"
              color="primary"
              style={{
                color: "#36558C",
              }}
            />
            <Twitter
              fontSize="large"
              style={{
                color: "#149CE8",
              }}
            />
            <Instagram
              fontSize="large"
              style={{
                color: "#D92A67",
              }}
            />
          </div>
          <div className="text_social">
            <div className="active btn">All</div>
            <div>News</div>
            <div>Twitter</div>
            <div>Facebook</div>
          </div>
          <div className="subscribe_section">
            <div>More News</div>
            <div className="active btn">Subscribe</div>
          </div>
        </div>
        <div className="social_views">
          <div className="social_views_wrapper">
            <div className="social_views_container">
              <img src={Boss} alt="boss" />
            </div>
            <div className="social_views_inner-text">
              <div className="social_views_yellow_text link">news</div>
              <h1>world bosses are awesome</h1>
            </div>
          </div>
          <div className="social_views_wrapper">
            <div className="social_views_container">
              {/* <img src={Boss} alt="boss" /> */}
              <img src={cosplay} alt="cosplay" />
            </div>
            <div className="social_views_inner-text">
              <div className="social_views_yellow_text link">twitter</div>
              <h1>most liked cosplay of aloy</h1>
            </div>
          </div>
          <div className="social_views_wrapper">
            <div className="social_views_container">
              <img src={Fanversion} alt="fans" />
            </div>
            <div className="social_views_inner-text">
              <div className="social_views_yellow_text link">facebook</div>
              <h1>Fans version of Alloy looks nice</h1>
            </div>
          </div>
          <div className="social_views_wrapper">
            <div className="social_views_container">
              <img src={underwater} alt="underwater" />
            </div>
            <div className="social_views_inner-text">
              <div className="social_views_yellow_text link">twitter</div>
              <h1>underwater looks mesmarizing</h1>
            </div>
          </div>
          <div className="social_views_wrapper">
            <div className="social_views_container">
              <img src={massiveWorld} alt="massiveWorld" />
            </div>
            <div className="social_views_inner-text">
              <div className="social_views_yellow_text link">news</div>
              <h1>massive world</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aloy;
