import React from "react";
import "./Card.css";

function Card(){
    return(
        <>
           <div className="card-title">
           <h1>Our Services</h1>
           <div className="card-container" >
           < div className="card">
                <img src="https://img.freepik.com/free-photo/group-trucks-parked-row_342744-533.jpg?w=2000&t=st=1679380015~exp=1679380615~hmac=90a6f766573b0444bc48a04cb07f6e879ac99c58b3dfd43fd0d0c5a72818540b" alt="truck-img"/>
                <h2>Ground Shipping</h2>
                <p> Amet non Lorem nisi sit aute anim ullamco anim dolor laboris excepteur.  </p> 
  
            </div>
            < div className="card">
                <img src="https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="ocean-freight"/>
                <h2>Ocean Freight</h2>
                 <p> Amet non Lorem nisi sit aute anim ullamco anim dolor laboris excepteur.  </p> 
            </div>
            < div className="card">
                <img src="https://img.freepik.com/free-photo/airplane-flying-cloudy-sky_144627-132.jpg?w=2000&t=st=1678853985~exp=1678854585~hmac=87937b438c02ef53303c52ee193ba6dbf3ab9e6b0a36bad8fb76c23726270a98" alt="air-img"/>
                <h2>Air Freight</h2>
                <p> Amet non Lorem nisi sit aute anim ullamco anim dolor laboris excepteur.  </p> 
  
            </div>
        
        
        </div>
        </div> 
        </>
    );
}

export default Card;