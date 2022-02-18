import React from 'react'
import IMG1 from "../assets/images/Rectangle.png"
import IMG2 from "../assets/images/IMG2.png"
import IMG3 from "../assets/images/Rectangle Copy 2.png"

function FirstGrid() {
    return (
        <div className="first-grid">
            <div className="left">
                <div className="img-text-left">
                    <div className="text1">
                        <div className="link">ANNOUNCEMENTS</div>
                        <h1 className="maintext">WATCH 14 MINUTES OF GAMEPLAY</h1>
                    </div>
                    <img src={IMG1} alt="" />
                </div>
            </div>

            <div className="right">
                <div className="img-text-right-1">
                    <div className="text2">
                        <div className="link">EARLY RELEASE</div>
                        <h1 className="maintext-right">EXCLUSIVELY ON PS5</h1>
                    </div>

                    <img src={IMG2} alt="" />

                </div>
                <div className="img-text-right-2">
                    <div className="text3">
                        <div className="link">EXPLORE OPEN WORLD</div>
                        <h1 className="maintext-left">IMMERSE INTO <br /> A POST-APOCALYPTIC WORLD</h1>
                    </div>

                    <img src={IMG3} alt="" />

                </div>
            </div>
        </div>
    )
}

export default FirstGrid
