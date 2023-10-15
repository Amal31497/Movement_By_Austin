import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";

import { LuTimer } from 'react-icons/lu';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiDollarCircle } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { LuDumbbell } from 'react-icons/lu';
import { PiWarningCircle } from 'react-icons/pi';


import "./Pricing.css"

function Pricing() {

    const [firstCard, setFirstCard] = useState("info");
    const [secondCard, setSecondCard] = useState("info");
    const [thirdCard, setThirdCard] = useState("info");
    const [fourthCard, setFourthCard] = useState("info");

    return (
        <div className="pricingWrapper">
            <h3 className="pricingTitle">Pricing</h3>
            <div className="pricingCardWrapper row">

                <div className="pricingCardShell col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="pricingCard" id="home-pt-1">
                        <div className="pricingCardHeader">
                            <p className="pricingCardTitle">In Home Personal Training</p>
                            <div className="divider"></div>
                            <p className="pricingCardTitleInfo"> <LuTimer /> 60m / <BsFillPersonFill /> </p>
                        </div>
                        {firstCard == "info" ?
                            <div className="pricingCardBody">
                                <p className="pricingCardText"><LuDumbbell /> Personalized and individualized workout program</p>
                                <p className="pricingCardText"><LuDumbbell /> My equipment and/or client's equipment</p>
                                <p className="pricingCardText"><LuDumbbell /> Instruction and demonstration on proper form</p>
                                <p className="pricingCardText"><LuDumbbell /> Guided and assisted cool down/post workout stretching</p>
                                <p className="costBreakdown" onClick={() => setFirstCard("price")}><BiDollarCircle size="40" /></p>
                            </div>
                            :
                            <div className="pricingCardBody">
                                <div className="pricingPackageWrapper">
                                    <div className="pricingPackage">
                                        <h6><b>Existing Client</b> (4 week commitment)</h6>
                                        <p>1x/week - $250 | 2x/week - $500</p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="pricingPackage">
                                        <h6><b>New Client</b> (4 week commitment)</h6>
                                        <p>1x/week - $290 | 2x/week - $570</p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="pricingPackage">
                                        <p><b>Single Session</b> - $90</p>
                                    </div>
                                </div>

                                <p className="costBreakdown" onClick={() => setFirstCard("info")}><AiOutlineInfoCircle size="40" /></p>
                            </div>
                        }
                    </div>
                </div>

                <div className="pricingCardShell col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="pricingCard" id="mobilityStretching-1">
                        <div className="pricingCardHeader">
                            <p className="pricingCardTitle">Mobility/Stretching</p>
                            <div className="divider"></div>
                            <p className="pricingCardTitleInfo"> <LuTimer />  60m / <BsFillPersonFill /></p>
                        </div>
                        {secondCard == "info" ?
                            <div className="pricingCardBody">
                                <p className="pricingCardText"><LuDumbbell /> Instruction and demonstration on active stretching and mobility</p>
                                <p className="pricingCardText"><LuDumbbell /> Construction of an at home mobility routine</p>
                                <p className="pricingCardText"><LuDumbbell /> Guidance on how to use resistance bands to aid in mobility training</p>
                                <p className="pricingCardText"><LuDumbbell /> Integration of ctive and passive stretching techniques</p>
                                <p className="costBreakdown" onClick={() => setSecondCard("price")}><BiDollarCircle size="40" /></p>
                            </div>
                            :
                            <div className="pricingCardBody">
                                <div className="pricingPackageWrapper">
                                    <div className="pricingPackage">
                                        <h6><b>Existing Client</b> (4 week commitment)</h6>
                                        <p>1x/week - $210 | 2x/week - $430</p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="pricingPackage">
                                        <h6><b>New Client</b> (4 week commitment)</h6>
                                        <p>1x/week - $250 | 2x/week - $500</p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="pricingPackage">
                                        <p><b>Single Session</b> - $80</p>
                                    </div>
                                </div>
                                <p className="costBreakdown" onClick={() => setSecondCard("info")}><AiOutlineInfoCircle size="40" /></p>
                            </div>
                        }
                    </div>
                </div>

                <div className="pricingCardShell col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="pricingCard" id="gym-1">
                        <div className="pricingCardHeader">
                            <p className="pricingCardTitle">One-on-one Personal Training</p>
                            <div className="divider"></div>
                            <p className="pricingCardTitleInfo"> <LuTimer />  60m / <BsFillPersonFill /></p>
                        </div>

                        {thirdCard == "info" ?
                            <div className="pricingCardBody">
                                <p className="pricingCardText"><LuDumbbell /> Personalized and individualized workout program</p>
                                <p className="pricingCardText"><LuDumbbell /> Full access to equipment such as: kettlebells, dumbbells, barbells, and cable systems</p>
                                <p className="pricingCardText"><LuDumbbell /> Instruction and demonstration on proper form</p>
                                <p className="pricingCardText"><LuDumbbell /> Guided and assisted cool down/post workout stretching</p>
                                <p className="costBreakdown" onClick={() => setThirdCard("price")}><BiDollarCircle size="40" /></p>
                            </div>
                            :
                            <div className="pricingCardBody">
                                <div className="pricingPackageWrapper">
                                    <div className="pricingPackage">
                                        <h6><b>Existing Client</b> (4 week commitment)</h6>
                                        <p>1x/week - $250 | 2x/week - $500</p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="pricingPackage">
                                        <h6><b>New Client</b> (4 week commitment)</h6>
                                        <p>1x/week - $290 | 2x/week - $570</p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="pricingPackage">
                                        <p><b>Single Session</b> - $90</p>
                                    </div>
                                </div>

                                <p className="costBreakdown" onClick={() => setThirdCard("info")}><AiOutlineInfoCircle size="40" /></p>
                            </div>
                        }
                    </div>
                </div>

                <div className="pricingCardShell col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="pricingCard" id="gym-2">
                        <div className="pricingCardHeader">
                            <p className="pricingCardTitle">Two-on-one Personal Training</p>
                            <div className="divider"></div>
                            <p className="pricingCardTitleInfo"> <LuTimer />  60m / <BsFillPersonFill /><BsFillPersonFill /></p>
                        </div>

                        {fourthCard == "info" ?
                            <div className="pricingCardBody">
                                <p className="pricingCardText"><LuDumbbell /> Personalized and individualized workout program</p>
                                <p className="pricingCardText"><LuDumbbell /> Full access to equipment such as: kettlebells, dumbbells, barbells, and cable systems</p>
                                <p className="pricingCardText"><LuDumbbell /> Instruction and demonstration on proper form</p>
                                <p className="pricingCardText"><LuDumbbell /> Guided and assisted cool down/post workout stretching</p>
                                <p className="costBreakdown" onClick={() => setFourthCard("price")}><BiDollarCircle size="40" /></p>
                            </div>
                            :
                            <div className="pricingCardBody">
                                <div className="pricingPackageWrapper">
                                    <div className="pricingPackage">
                                        <h6><b>Existing Client</b> (4 week commitment)</h6>
                                        <p>1x/week - $180 | 2x/week - $360</p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="pricingPackage">
                                        <h6><b>New Client</b> (4 week commitment)</h6>
                                        <p>1x/week - $210 | 2x/week - $430</p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="pricingPackage">
                                        <p><b>Single Session</b> - $70</p>
                                        <p>Prices are listed per person</p>
                                    </div>
                                </div>

                                <p className="costBreakdown" onClick={() => setFourthCard("info")}><AiOutlineInfoCircle size="40" /></p>
                            </div>
                        }
                    </div>
                </div>

            </div>
            <div className="pricingDisclaimer">
                <h4 className="pricingTitle">Disclaimer</h4>
                <div className="dividerBlack"></div>
                <div className="pricingDisclaimerBox">
                    <p className="pricingDisclaimerBoxText"><PiWarningCircle size="22"  size="22" /> Nutrition counseling sessions available upon request</p>
                    <p className="pricingDisclaimerBoxText">
                        <PiWarningCircle size="22"  /> Personal training services must be paid in full at the beginning of every 4 week period under 4 week commitments
                    </p>
                    <p className="pricingDisclaimerBoxText">
                        <PiWarningCircle size="22"  /> Personal training 4 week commitments must be paid in full 24 hours priod to the beginning of a new 4 week allotment of sessions
                    </p>
                    <p className="pricingDisclaimerBoxText"><PiWarningCircle size="22"  /> Cancellation of commitment at any time is allowed but remaining sessions will need to be serviced or surrendered</p>
                    <p className="pricingDisclaimerBoxText">
                        <PiWarningCircle size="22"  /> Cancellation policy: any personal training sessions that need to be canceled/rescheduled will be banked for future use regardless of 24 hour notice
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Pricing;