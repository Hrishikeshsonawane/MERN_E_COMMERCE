import React from 'react'
import Appstore from "../../../Sources/Appstore.png"
import Playstore from "../../../Sources/playstore.png"
import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="leftFooter">
                <h4>Download Our App</h4>
                <p>Download app for android and IOS devices</p>
                <img src={Appstore} alt="Appstore" />
                <img src={Playstore} alt="playstore" />

            </div>
            <div className="midFooter">
                <h1>E_commerse</h1>
                <p>High Quality is our priority</p>
                <p>Copyright @2023 &copy; Hrishi</p>

            </div>
            <div className="rightFooter">
                <h4>Follow US</h4>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>telegram</p>

            </div>
        </footer>



    )
}
