import React from 'react'
import navImg from '../assets/images/Bitmap4.png'
function Nav() {
    return (
        <header>
            <nav className="navigation">
                <ul className="navlist">
                    <li className="nav-item">
                        <a className="nav-link" href="#">NEWS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">FIGHTERS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">FEATURES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">GUIDES</a>
                    </li>
                </ul>

                <div className="logo"><img src={navImg} alt="" /></div>

                <ul className="navlist1">
                    <li className="nav-item">
                        <a className="nav-link" href="#">MEDIA</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">ESPORTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="link" href="#">BUY NOW</a>
                    </li>
                </ul>

                <button className="btn subscribe">SUBSCRIBE</button>

            </nav>
            <button className="btn buy-now">BUY NOW</button>

        </header>
    )
}

export default Nav
