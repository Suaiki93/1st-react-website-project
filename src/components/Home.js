import React from "react";
import "./Home.css";
import Card from "./Card";
import Destination from "./Destination";

function Home (){
    return(
        <>
            <div className="container">
                <h1>Shipping solutions that exceed your expectations.</h1>
                <p>From point A to point B, we've got you covered.</p>
               
            </div>
            <div>
                <Card />
                <Destination />
            </div>
        </>
        );
}

export default Home;