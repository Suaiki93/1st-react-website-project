import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import "./Contact.css";

function Contact(){
    return(

      <div className="contact-page">
        
        <div className="contact-container">
            <h1>Contact us</h1>
            <div className="map-section">
                <iframe title="map"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7675190.51913336!2d95.6753129077301!3d20.065029858437153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da313c71745775%3A0xc905428d92639b3c!2sThe%20Charisma%20Chiangmai%20Airport!5e0!3m2!1sen!2sth!4v1675258773711!5m2!1sen!2sth" allowFullScreen="" ></iframe>
             </div>
        
             
        <div className="contact-info">
        
             <div className="contact-detail">
                <div className="contact">
                  <FontAwesomeIcon icon={faLocationDot} size="3x"/>
                </div>
                <div>
                  <h4>Location:</h4>
                  <p>168/1 Moo.12, Pa Daet, <br /> Mueang Chiang Mai,<br />Chiang Mai 50100</p>
                </div>
              </div>

                
              <div className="contact-detail">
                <div className="contact">
                  <FontAwesomeIcon icon={faEnvelope} size="3x"/>
                </div>

                <div>
                  <h4>Email:</h4>
                  <p>hongyunshpr@gmail.com</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact">
                  <FontAwesomeIcon icon={faSquarePhone} size="3x"/>
                </div>
                <div>
                  <h4>Call:</h4>
                  <p>+66 93 361 4269<br />+66 80 223 2949</p>
                </div>
              </div>

              
         </div>
        </div>

          <div className="qrcode">
            <h4>WeChat QR Code</h4>
            <img src="./images/340174.jpg" alt="qrcode" />

          </div>

        </div>


            
        
  


    );
}

export default Contact;