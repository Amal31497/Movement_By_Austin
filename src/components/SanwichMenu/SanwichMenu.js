import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "./SanwichMenu.css";

function SanwichMenu(){

    const [sanwichMenuFirst, setSanwichMenuFirst] = useState("sanwichMenuFirst");
    const [sanwichMenuSecond, setSanwichMenuSecond] = useState("sanwichMenuSecond");
    const [sanwichMenuThird, setSanwichMenuThird] = useState("sanwichMenuThird");
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

    function menuClick(){
        if(sanwichMenuFirst == "sanwichMenuFirst"){
            setSanwichMenuFirst("sanwichMenuFirstClicked");
        } else {
            setSanwichMenuFirst("sanwichMenuFirst");
        }

        if(sanwichMenuSecond == "sanwichMenuSecond"){
            setSanwichMenuSecond("sanwichMenuSecondClicked");
        } else {
            setSanwichMenuSecond("sanwichMenuSecond");
        }

        if(sanwichMenuThird == "sanwichMenuThird"){
            setSanwichMenuThird("sanwichMenuThirdClicked");
        } else {
            setSanwichMenuThird("sanwichMenuThird");
        }
    }

    return(
        <div className="sanwichMenuWrapper" onClick={menuClick}>
            <div className="sanwichMenuEl" id={sanwichMenuFirst}></div>
            <div className="sanwichMenuEl" id={sanwichMenuSecond}></div>
            <div className="sanwichMenuEl" id={sanwichMenuThird}></div>
            {sanwichMenuFirst == "sanwichMenuFirstClicked" ?
                <div className="phoneNavigationModal">
                    <h4 className="navbar-link" id="link-home" onClick={goToHome}>Home</h4>
                    <h4 className="navbar-link" id="link-pricing" onClick={goToPricing}>Pricing</h4>
                    <h4 className="navbar-link" id="link-home-gym" onClick={goToHomeGym}>Home Gym</h4>
                    <h4 className="navbar-link" id="link-contact" onClick={goToContact}>Contact</h4>
                </div>
                :
                null
            }
        </div>
    )
}

export default SanwichMenu;