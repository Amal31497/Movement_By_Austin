import React, {useEffect, useState} from "react";
import "./Navbar.css";
import logo from "../../resources/weights.png";
import { useHistory } from 'react-router-dom';
import SanwichMenu from "../SanwichMenu/SanwichMenu.js";


function Navbar(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    let history = useHistory ();
    function goToHome(){
        history.push("./");
    };

    function goToHomeGym(){
        history.push("./HomeGym");
    };

    function goToPricing(){
        history.push("./Pricing");
    };

    function goToContact(){
        history.push("./Contact");
    }

    const updateWidth = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    return (
        <div className="navbar-wrapper">
            <div className="navbar-logo-wrapper">
                <img className="navbar-logo" src={logo} />
                <h3><b>Movement by Austin</b></h3>
            </div>

            {windowWidth < 900 ? 
                <SanwichMenu />
                :
                <div className="navbar-links-wrapper">
                    <h4 className="navbar-link" id="link-home" onClick={goToHome}>Home</h4>
                    <h4 className="navbar-link" id="link-pricing" onClick={goToPricing}>Pricing</h4>
                    <h4 className="navbar-link" id="link-home-gym" onClick={goToHomeGym}>Home Gym</h4>
                    <h4 className="navbar-link" id="link-contact" onClick={goToContact}>Contact</h4>
                </div>
            }


        </div>
    );
}

export default Navbar;