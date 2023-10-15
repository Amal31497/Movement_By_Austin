import React, { useState } from "react";
import { GrNext, GrPrevious } from 'react-icons/gr';
import Footer from "../../components/Footer/Footer";
import bands from "../../resources/bands.webp";
import barbell from "../../resources/barbell.jpeg";
import bench from "../../resources/bench.webp";
import bosu_ball from "../../resources/bosu_ball.webp";
import dumbbells from "../../resources/dumbbells.jpg";
import kettlebell from "../../resources/kettlebell.jpg";
import strength_package from "../../resources/package.webp";
import plates from "../../resources/plates.webp";
import rack from "../../resources/squat_rack.avif";
import storage from "../../resources/storage.avif";
import trx from "../../resources/trx.jpg";
import yoga_mat from "../../resources/yoga_mat.webp";
import "./HomeGym.css";




function HomeGym() {

    const [firstCard, setFirstCard] = useState(0);
    const [secondCard, setSecondCard] = useState(4);
    const [thirdCard, setThirdCard] = useState(0);
    const [fourthCard, setFourthCard] = useState(0);

    return (
        <div className="homeGymWrapper">
            <h3 className="pricingTitle">Home Gym Options</h3>
            <div className="pricingCardWrapper row">
                <div className="pricingCardShell col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="pricingCard" id="tier-1">
                        <div className="pricingCardHeader">
                            <p className="pricingCardTitleBlack">Tier 1 (Total - $480)</p>
                            <div className="dividerBlack"></div>
                        </div>

                        <p className="next" onClick={() => { setFirstCard((firstCard + 1) % 4) }}>Next <GrNext size="30" /></p>
                        <p className="prev" onClick={() => { setFirstCard((firstCard - 1) % 4) }}><GrPrevious size="30" /> Prev</p>

                        {Math.abs(firstCard) == 0 ?
                            <div className="pricingCardBody">
                                <div className="pricingCardBodyInfo">
                                    <div className="pricingCardBodyInfoText">
                                        <p className="pricingCardBodyInfoTextTitle">Adjustable Dumbbells</p>
                                        <p>Price : $300</p>
                                        <p>Brand : ProForm</p>
                                        <p>Weight : 50lbs</p>
                                        <a className="pricingCardBodyInfoLink" href={"https://a.co/d/4QsSBf4"} target="blank">Link <GrNext size="14" /></a>
                                    </div>
                                    <img className="pricingCardBodyImage" src={dumbbells} />
                                </div>
                            </div>
                            :
                            Math.abs(firstCard) == 1 ?
                                <div className="pricingCardBody">
                                    <div className="pricingCardBodyInfo">
                                        <div className="pricingCardBodyInfoText">
                                            <p className="pricingCardBodyInfoTextTitle">Bosu Ball</p>
                                            <p>Price : $90</p>
                                            <p>Brand : BOSU</p>
                                            <p>Weight : 4kg</p>
                                            <p>Max weight : 300lbs</p>
                                            <a className="pricingCardBodyInfoLink" href={"https://a.co/d/dNJo6f4"} target="blank">Link <GrNext size="14" /></a>
                                        </div>
                                        <img className="pricingCardBodyImage" src={bosu_ball} />
                                    </div>
                                </div>
                                :
                                Math.abs(firstCard) == 2 ?
                                    <div className="pricingCardBody">
                                        <div className="pricingCardBodyInfo">
                                            <div className="pricingCardBodyInfoText">
                                                <p className="pricingCardBodyInfoTextTitle">Yoga Mat</p>
                                                <p>Price : $20</p>
                                                <p>Brand : Amazon</p>
                                                <p>Dimensions : 73.2"L x 24.3"W</p>
                                                <a className="pricingCardBodyInfoLink" href="https://a.co/d/ax4Ri7G" target="blank">Link <GrNext size="14" /></a>
                                            </div>
                                            <img className="pricingCardBodyImage" src={yoga_mat} />
                                        </div>
                                    </div>
                                    :
                                    <div className="pricingCardBody">
                                        <div className="pricingCardBodyInfo">
                                            <div className="pricingCardBodyInfoText">
                                                <p className="pricingCardBodyInfoTextTitle">Multi Range Bench</p>
                                                <p>Price : $70</p>
                                                <p>Brand : Lusper</p>
                                                <a className="pricingCardBodyInfoLink" href="https://a.co/d/blPiQ4E" target="blank">Link <GrNext size="14" /></a>
                                            </div>
                                            <img className="pricingCardBodyImage" src={bench} />
                                        </div>
                                    </div>
                        }

                    </div>
                </div>

                <div className="pricingCardShell col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="pricingCard" id="tier-2">
                        <div className="pricingCardHeader">
                            <p className="pricingCardTitleBlack">Tier 2 (Total - $910)</p>
                            <div className="dividerBlack"></div>
                        </div>

                        <p className="next" onClick={() => { setSecondCard((secondCard + 1) % 6) }}>Next <GrNext size="30" /></p>
                        <p className="prev" onClick={() => { setSecondCard((secondCard - 1) % 6) }}><GrPrevious size="30" /> Prev</p>

                        {Math.abs(secondCard) == 0 ?
                            <div className="pricingCardBody">
                                <div className="pricingCardBodyInfo">
                                    <div className="pricingCardBodyInfoText">
                                        <p className="pricingCardBodyInfoTextTitle">Adjustable Dumbbells</p>
                                        <p>Price : $300</p>
                                        <p>Brand : ProForm</p>
                                        <p>Weight : 50lbs</p>
                                        <a className="pricingCardBodyInfoLink" href="https://a.co/d/4QsSBf4" target="blank">Link <GrNext size="14" /></a>
                                    </div>
                                    <img className="pricingCardBodyImage" src={dumbbells} />
                                </div>
                            </div>
                            :
                            Math.abs(secondCard) == 1 ?
                                <div className="pricingCardBody">
                                    <div className="pricingCardBodyInfo">
                                        <div className="pricingCardBodyInfoText">
                                            <p className="pricingCardBodyInfoTextTitle">Bosu Ball</p>
                                            <p>Price : $90</p>
                                            <p>Brand : BOSU</p>
                                            <p>Weight : 4kg</p>
                                            <p>Max weight : 300lbs</p>
                                            <a className="pricingCardBodyInfoLink" href={"https://a.co/d/dNJo6f4"} target="blank">Link <GrNext size="14" /></a>
                                        </div>
                                        <img className="pricingCardBodyImage" src={bosu_ball} />
                                    </div>
                                </div>
                                :
                                Math.abs(secondCard) == 2 ?
                                    <div className="pricingCardBody">
                                        <div className="pricingCardBodyInfo">
                                            <div className="pricingCardBodyInfoText">
                                                <p className="pricingCardBodyInfoTextTitle">Yoga Mat</p>
                                                <p>Price : $20</p>
                                                <p>Brand : Amazon</p>
                                                <p>73.2"L x 24.3"W</p>
                                                <a className="pricingCardBodyInfoLink" href="https://a.co/d/ax4Ri7G" target="blank">Link <GrNext size="14" /></a>
                                            </div>
                                            <img className="pricingCardBodyImage" src={yoga_mat} />
                                        </div>
                                    </div>
                                    :
                                    Math.abs(secondCard) == 3 ?
                                        <div className="pricingCardBody">
                                            <div className="pricingCardBodyInfo">
                                                <div className="pricingCardBodyInfoText">
                                                    <p className="pricingCardBodyInfoTextTitle">Multi Range Bench</p>
                                                    <p>Price : $70</p>
                                                    <p>Brand : Lusper</p>
                                                    <a className="pricingCardBodyInfoLink" href="https://a.co/d/blPiQ4E" target="blank">Link <GrNext size="14" /></a>
                                                </div>
                                                <img className="pricingCardBodyImage" src={bench} />
                                            </div>
                                        </div>
                                        :
                                        Math.abs(secondCard) == 4 ?
                                            <div className="pricingCardBody">
                                                <div className="pricingCardBodyInfo">
                                                    <div className="pricingCardBodyInfoText">
                                                        <p className="pricingCardBodyInfoTextTitle">Kettlebell Set</p>
                                                        <p>Price : $200-300</p>
                                                        <p>Brand : PowerBlock</p>
                                                        <p>Weight : 18-62lbs</p>
                                                        <a className="pricingCardBodyInfoLink" href="https://www.roguefitness.com/powerblock-adjustable-kettlebell" target="blank">Link <GrNext size="14" /></a>
                                                    </div>
                                                    <img className="pricingCardBodyImage" src={kettlebell} />
                                                </div>
                                            </div>
                                            :
                                            <div className="pricingCardBody">
                                                <div className="pricingCardBodyInfo">
                                                    <div className="pricingCardBodyInfoText">
                                                        <p className="pricingCardBodyInfoTextTitle">Resistance Bands</p>
                                                        <p>Price : $20</p>
                                                        <p>Brand : VEICK</p>
                                                        <p>Weight : 10-150lbs</p>
                                                        <a className="pricingCardBodyInfoLink" href="https://a.co/d/522nbhe" target="blank">Link <GrNext size="14" /></a>
                                                    </div>
                                                    <img className="pricingCardBodyImage" src={bands} />
                                                </div>
                                            </div>
                        }
                    </div>
                </div>
                <div className="pricingCardShell col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="pricingCard" id="tier-3">
                        <div className="pricingCardHeader">
                            <p className="pricingCardTitleBlack">Tier 3 (Total - $1970)</p>
                            <div className="dividerBlack"></div>
                        </div>

                        <p className="next" onClick={() => { setThirdCard((thirdCard + 1) % 6) }}>Next <GrNext size="30" /></p>
                        <p className="prev" onClick={() => { setThirdCard((thirdCard - 1) % 6) }}><GrPrevious size="30" /> Prev</p>

                        {Math.abs(thirdCard) == 0 ?
                            <div className="pricingCardBody">
                                <div className="pricingCardBodyInfo">
                                    <div className="pricingCardBodyInfoText">
                                        <p className="pricingCardBodyInfoTextTitle">Yoga Mat</p>
                                        <p>Price : $20</p>
                                        <p>Brand : Amazon</p>
                                        <p>73.2"L x 24.3"W</p>
                                        <a className="pricingCardBodyInfoLink" href="https://a.co/d/ax4Ri7G" target="blank">Link <GrNext size="14" /></a>
                                    </div>
                                    <img className="pricingCardBodyImage" src={yoga_mat} />
                                </div>
                            </div>
                            :
                            Math.abs(thirdCard) == 1 ?
                                <div className="pricingCardBody">
                                    <div className="pricingCardBodyInfo">
                                        <div className="pricingCardBodyInfoText">
                                            <p className="pricingCardBodyInfoTextTitle">Multi Range Bench</p>
                                            <p>Price : $70</p>
                                            <p>Brand : Lusper</p>
                                            <a className="pricingCardBodyInfoLink" href="https://a.co/d/blPiQ4E" target="blank">Link <GrNext size="14" /></a>
                                        </div>
                                        <img className="pricingCardBodyImage" src={bench} />
                                    </div>
                                </div>
                                :
                                Math.abs(thirdCard) == 2 ?
                                    <div className="pricingCardBody">
                                        <div className="pricingCardBodyInfo">
                                            <div className="pricingCardBodyInfoText">
                                                <p className="pricingCardBodyInfoTextTitle">Weight Storage</p>
                                                <p>Price : $645</p>
                                                <p>Brand : Rogue</p>
                                                <p>L : 76.5"</p>
                                                <p>W : 23.75"</p>
                                                <p>Wheels included</p>
                                                <a className="pricingCardBodyInfoLink" href="https://www.roguefitness.com/rogue-universal-storage-system-2-0?sku=RF0772-K
B-DB-DB&gclid=EAIaIQobChMIqfiSsqnRgQMVZ9DCBB2bUQErEAQYAiAB
EgI2dPD_BwE" target="blank">Link <GrNext size="14" /></a>
                                            </div>
                                            <img className="pricingCardBodyImage" src={storage} />
                                        </div>
                                    </div>
                                    :
                                    Math.abs(thirdCard) == 3 ?
                                        <div className="pricingCardBody">
                                            <div className="pricingCardBodyInfo">
                                                <div className="pricingCardBodyInfoText">
                                                    <p className="pricingCardBodyInfoTextTitle">Squat Rack</p>
                                                    <p>Price : $595</p>
                                                    <p>Brand : Rogue</p>
                                                    <p>H : 	73"</p>
                                                    <p>50" x 54"</p>
                                                    <p>Weight : 168lbs</p>
                                                    <a className="pricingCardBodyInfoLink" href="https://www.roguefitness.com/rogue-sm-1-squat-stand-2-0" target="blank">Link <GrNext size="14" /></a>
                                                </div>
                                                <img className="pricingCardBodyImage" src={rack} />
                                            </div>
                                        </div>
                                        :
                                        Math.abs(thirdCard) == 4 ?
                                            <div className="pricingCardBody">
                                                <div className="pricingCardBodyInfo">
                                                    <div className="pricingCardBodyInfoText">
                                                        <p className="pricingCardBodyInfoTextTitle">Barbell</p>
                                                        <p>Price : $150</p>
                                                        <p>Brand : Titan</p>
                                                        <p>Weight : 45lbs</p>
                                                        <p>L : 86.6-in</p>
                                                        <a className="pricingCardBodyInfoLink" href="https://www.titan.fitness/strength/barbells/olympic/performance-series-olympic-bar
bell/430367.html" target="blank">Link <GrNext size="14" /></a>
                                                    </div>
                                                    <img className="pricingCardBodyImage" src={barbell} />
                                                </div>
                                            </div>
                                            :
                                            <div className="pricingCardBody">
                                                <div className="pricingCardBodyInfo">
                                                    <div className="pricingCardBodyInfoText">
                                                        <p className="pricingCardBodyInfoTextTitle">Barbell Bumper Plate Set</p>
                                                        <p>Price : $420</p>
                                                        <p>Brand : Titan</p>
                                                        <p>Diameter : 17.75-in</p>
                                                        <p>Total Weight : 230lbs</p>
                                                        <p>Rubber/Steel</p>
                                                        <a className="pricingCardBodyInfoLink" href="https://www.titan.fitness/strength/weight-plates/bumper-plates/230-lb-set-economy
-bumper-plates/430372.html" target="blank">Link <GrNext size="14" /></a>
                                                    </div>
                                                    <img className="pricingCardBodyImage" src={plates} />
                                                </div>
                                            </div>
                        }
                    </div>
                </div>
                <div className="pricingCardShell col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="pricingCard" id="tier-4">
                        <div className="pricingCardHeader">
                            <p className="pricingCardTitleBlack">Tier 4 (Total - $4735)</p>
                            <div className="dividerBlack"></div>
                        </div>

                        <p className="next" onClick={() => { setFourthCard((fourthCard + 1) % 5) }}>Next <GrNext size="30" /></p>
                        <p className="prev" onClick={() => { setFourthCard((fourthCard - 1) % 5) }}><GrPrevious size="30" /> Prev</p>

                        {Math.abs(fourthCard) == 0 ?
                            <div className="pricingCardBody">
                                <div className="pricingCardBodyInfo">
                                    <div className="pricingCardBodyInfoText">
                                        <p className="pricingCardBodyInfoTextTitle">Strength Rack Package</p>
                                        <p>Price : $3800</p>
                                        <p>Brand : PRx Perf.</p>
                                        <p>H : 89"-95"</p>
                                        <p>Bench included</p>
                                        <p>Bar/plates included</p>
                                        <a className="pricingCardBodyInfoLink" href="https://prxperformance.com/products/indy-prime-package-1" target="blank">Link <GrNext size="14" /></a>
                                    </div>
                                    <img className="pricingCardBodyImage" src={strength_package} />
                                </div>
                            </div>
                            :
                            Math.abs(fourthCard) == 1 ?
                                <div className="pricingCardBody">
                                    <div className="pricingCardBodyInfo">
                                        <div className="pricingCardBodyInfoText">
                                            <p className="pricingCardBodyInfoTextTitle">Weight Storage</p>
                                            <p>Price : $645</p>
                                            <p>Brand : Rogue</p>
                                            <p>L : 76.5"</p>
                                            <p>W : 23.75"</p>
                                            <p>Wheels included</p>
                                            <a className="pricingCardBodyInfoLink" href="https://www.roguefitness.com/rogue-universal-storage-system-2-0?sku=RF0772-K
B-DB-DB&gclid=EAIaIQobChMIqfiSsqnRgQMVZ9DCBB2bUQErEAQYAiAB
EgI2dPD_BwE" target="blank">Link <GrNext size="14" /></a>
                                        </div>
                                        <img className="pricingCardBodyImage" src={storage} />
                                    </div>
                                </div>
                                :
                                Math.abs(fourthCard) == 2 ?
                                    <div className="pricingCardBody">
                                        <div className="pricingCardBodyInfo">
                                            <div className="pricingCardBodyInfoText">
                                                <p className="pricingCardBodyInfoTextTitle">TRX</p>
                                                <p>Price : $140</p>
                                                <p>Brand : TRX</p>
                                                <a className="pricingCardBodyInfoLink" href="https://a.co/d/a3rUqjl" target="blank">Link <GrNext size="14" /></a>
                                            </div>
                                            <img className="pricingCardBodyImage" src={trx} />
                                        </div>
                                    </div>
                                    :
                                    Math.abs(fourthCard) == 3 ?
                                        <div className="pricingCardBody">
                                            <div className="pricingCardBodyInfo">
                                                <div className="pricingCardBodyInfoText">
                                                    <p className="pricingCardBodyInfoTextTitle">Bosu Ball</p>
                                                    <p>Price : $90</p>
                                                    <p>Brand : BOSU</p>
                                                    <p>Weight : 4kg</p>
                                                    <p>Max weight : 300lbs</p>
                                                    <a className="pricingCardBodyInfoLink" href={"https://a.co/d/dNJo6f4"} target="blank">Link <GrNext size="14" /></a>
                                                </div>
                                                <img className="pricingCardBodyImage" src={bosu_ball} />
                                            </div>
                                        </div>
                                        :
                                        <div className="pricingCardBody">
                                            <div className="pricingCardBodyInfo">
                                                <div className="pricingCardBodyInfoText">
                                                    <p className="pricingCardBodyInfoTextTitle">Yoga Mat</p>
                                                    <p>Price : $20</p>
                                                    <p>Brand : Amazon</p>
                                                    <p>73.2"L x 24.3"W</p>
                                                    <a className="pricingCardBodyInfoLink" href="https://a.co/d/ax4Ri7G" target="blank">Link <GrNext size="14" /></a>
                                                </div>
                                                <img className="pricingCardBodyImage" src={yoga_mat} />
                                            </div>
                                        </div>
                        }
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default HomeGym;