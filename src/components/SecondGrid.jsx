import React, { } from 'react'
import IMg1 from "../assets/images/IMG3.png"
import IMg2 from "../assets/images/IMG4.png"
function SecondGrid() {
    return (
        <div className="second-img-grid">
            <div className="second-img-text-1">
                <div className="text1">
                    <div className="link">GALLERY</div>
                    <h1 className="maintext-left">BROWSE HD <br /> WALLPAPERS</h1>
                </div>

                <img src={IMg1} alt="" />

            </div>
            <div className="second-img-text-2">
                <div className="text2">
                    <div className="link">WHERE TO BUY</div>
                    <h1 className="maintext-left">PRE-ORDER NOW</h1>
                </div>

                <img src={IMg2} alt="" />

            </div>

        </div>
    )
}

export default SecondGrid
