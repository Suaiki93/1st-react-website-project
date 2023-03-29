import React from "react";
import "./Footer.css";

function Footer(){

    const currentYear = new Date().getFullYear();
    return(
        <div className="footer">
            <div className="footer-contianer">
                <h1>HONGYUN SHIPPING CO., LTD.</h1>
                <p>168/1 Moo.12, Pa Daet, Mueang Chiang Mai, Chiang Mai 50100</p>
            </div>
            <div className="copyright">
                <p>Copyright © {currentYear}</p>
            </div>
        </div>

    );
        
}

export default Footer;