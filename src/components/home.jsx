import React from "react";
import FirstGrid from "./FirstGrid";
import Nav from "./nav";
import Aloy from "./Aloy";
import SecondGrid from "./SecondGrid";
import Img1 from "../assets/images/headdown.png";
import Img2 from "../assets/images/back.png";
// import Img3 from "../assets/images/back4.png"
// import Img4 from "../assets/images/back2.png"
import Img5 from "../assets/images/Bitmap Copy.png";
import "./style.scss";
import LastSection from "./FinalSection";
function Home() {
  return (
    <div>
      <main className="fullbox">
        <Nav />

        <div className="main-section">
          <section className="first-section">
            <div className="blur-img">
              <img src={Img1} alt="" />
              <img src={Img2} alt="" />
              {/* <img src={Img3} alt="" /> */}
              {/* <img src={Img4} alt="" /> */}
              {/* <img src={Img5} alt="" /> */}
            </div>

            <FirstGrid />

            <SecondGrid />

            <Aloy />
            <LastSection />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Home;
