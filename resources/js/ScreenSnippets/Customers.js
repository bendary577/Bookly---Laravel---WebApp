import React from "react";
import "../../css/customers.css";
import person2 from "../../imgs/person_2.jpg";
import logo1 from "../../imgs/paypal.png";
import logo2 from "../../imgs/visa.png";
import logo3 from "../../imgs/wordpress-logo.png";
import logo4 from "../../imgs/ebay-logo.png";

const Customers = () => {
    const iconImgsStyle = {
        width: 120,
        height: 120,
        borderRadius: 75
    };

    const iconImgsStyle2 = {
        width: 90,
        height: 90
    };

    return (
        <div className="customers">
            <div className="text-center">
                <h2>Our Customers</h2>
            </div>
            <div className="container mt-4">
                <div className="row">
                    {/**-------------------------------first col ------------------------------------------ */}
                    <div class="col-sm-12 col-md-4 mb-2">
                        <div class="card w-100 m-0 text-center">
                            <div class="card-header h1">
                                <div class="avatar mx-auto white mt-3">
                                    <img
                                        src={person2}
                                        alt="person2"
                                        calssName="rounded-circle img-fluid"
                                        style={iconImgsStyle}
                                    />
                                </div>
                            </div>
                            <div class="card-body">
                                <h4 class="font-weight-bold mb-4">John Doe</h4>
                                <hr></hr>

                                <p class="dark-grey-text mt-4">
                                    <i class="fas fa-quote-left pr-2"></i>Lorem
                                    ipsum dolor sit amet eos adipisci,
                                    consectetur adipisicing elit.
                                </p>
                                <div class="orange-text">
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star-half-alt"> </i>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-------------------------------------------card2------------------------------------------------------*/}
                    <div class="col-sm-12 col-md-4 mb-2">
                        <div class="card w-100 m-0 text-center">
                            <div class="card-header h1">
                                <div class="avatar mx-auto white mt-3">
                                    <img
                                        src={person2}
                                        alt="person2"
                                        calssName="rounded-circle img-fluid"
                                        style={iconImgsStyle}
                                    />
                                </div>
                            </div>
                            <div class="card-body">
                                <h4 class="font-weight-bold mb-4">John Doe</h4>
                                <hr></hr>

                                <p class="dark-grey-text mt-4">
                                    <i class="fas fa-quote-left pr-2"></i>Lorem
                                    ipsum dolor sit amet eos adipisci,
                                    consectetur adipisicing elit.
                                </p>
                                <div class="orange-text">
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star-half-alt"> </i>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-------------------------------------------card3------------------------------------------------------*/}
                    <div class="col-sm-12 col-md-4 mb-2">
                        <div class="card w-100 m-0 text-center">
                            <div class="card-header h1">
                                <div class="avatar mx-auto white mt-3">
                                    <img
                                        src={person2}
                                        alt="person2"
                                        calssName="rounded-circle img-fluid"
                                        style={iconImgsStyle}
                                    />
                                </div>
                            </div>
                            <div class="card-body">
                                <h4 class="font-weight-bold mb-4">John Doe</h4>
                                <hr></hr>

                                <p class="dark-grey-text mt-4">
                                    <i class="fas fa-quote-left pr-2"></i>Lorem
                                    ipsum dolor sit amet eos adipisci,
                                    consectetur adipisicing elit.
                                </p>
                                <div class="orange-text">
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star-half-alt"> </i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/**----------------------------------end cards---------------------------------- */}
                </div>
            </div>
            {/**----------------------------------partners ------------------------------------------- */}
            <div className="partners text-center mt-4">
                <hr></hr>
                <h3 className="mb-2 mt-4">Trusted By our partners</h3>
                <ul className="mb-4">
                    <li>
                        <img
                            src={logo1}
                            alt="logo1"
                            calssName="rounded-circle img-fluid"
                            style={iconImgsStyle2}
                        />
                    </li>
                    <li>
                        <img
                            src={logo2}
                            alt="logo2"
                            calssName="rounded-circle img-fluid"
                            style={iconImgsStyle2}
                        />
                    </li>
                    <li>
                        <img
                            src={logo3}
                            alt="logo3"
                            calssName="rounded-circle img-fluid"
                            style={iconImgsStyle2}
                        />
                    </li>
                    <li>
                        <img
                            src={logo4}
                            alt="logo4"
                            calssName="rounded-circle img-fluid"
                            style={iconImgsStyle2}
                        />
                    </li>
                </ul>
                <hr></hr>
            </div>
        </div>
    );
};

export default Customers;
