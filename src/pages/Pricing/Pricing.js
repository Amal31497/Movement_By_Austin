import React, { useState } from "react";
import "./Pricing.css"

function Pricing(){

    return (
        <div className="pricingWrapper">
            <h3 className="pricingTitle">Pricing</h3>
            <div className="pricingCardWrapper row">

                <div className="pricingCardShell col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="pricingCard" id="home-pt-1">
                        <p className="pricingCardTitle">Home Personal Training</p>
                        <div className="divider"></div>
                        <p>60 min / 1-on-1</p>
                        <p className="pricingCardText">* Personalized and individualized workout program</p>
                        <p className="pricingCardText">* My equipment and/or client's equipment</p>
                        <p className="pricingCardText">* Instruction and demonstration on proper form</p>
                        <p className="pricingCardText">* Workout programming and structure</p>
                        <p className="pricingCardText">* Guided and assisted cool down/post workout stretching</p>
                        <p className="costBreakdown">Cost Breakdown {">"}</p>
                    </div>
                </div>

                <div className="pricingCardShell col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="pricingCard" id="mobilityStretching-1">
                        <p className="pricingCardTitle">Home Mobility/Stretching</p>
                        <div className="divider"></div>
                        <p>60 min / 1-on-1</p>
                        <p className="pricingCardText">* Instruction and demonstration on active stretching and mobility</p>
                        <p className="pricingCardText">* Construction of an at home mobility routine the client can do on their own time</p>
                        <p className="pricingCardText">* Guidance on how to use resistance bands to aid in mobility training</p>
                        <p className="pricingCardText">* Proper use of both active and passive stretching techniques</p>
                        <p className="costBreakdown">Cost Breakdown {">"}</p>
                    </div>
                </div>

                <div className="pricingCardShell col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="pricingCard" id="gym-1">
                        <p className="pricingCardTitle">Gym Personal Training</p>
                        <div className="divider"></div>
                        <p>60 min / 1-on-1</p>
                    </div>
                </div>

                <div className="pricingCardShell col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="pricingCard" id="gym-2">
                        <p className="pricingCardTitle">Gym Personal Training</p>
                        <div className="divider"></div>
                        <p>60 min / 2-on-1</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;