import React from "react";
import { Link } from "react-router-dom";
import "../../css/aboutus.css";
import IntroBook2 from "../../imgs/introBook2.png";
import book1 from "../../imgs/book_1.png";
import book2 from "../../imgs/book_2.png";
import book3 from "../../imgs/book_3.png";

const AboutUs = () => {
    const imgStyle = {
        width: 600,
        height: 600
    };

    const iconImgsStyle = {
        width: 300,
        height: 300
    };

    return (
        <div className="about">
            <div className="text-center my-5">
                <h2>About Us</h2>
            </div>
            <div className="intro container">
                <div className="middle row">
                    {/*---------------------- left section -------------------------- */}

                    <div className="left col-sm-6 col-md-6">
                        <div className="top-txt mb-5">
                            <h3 className="text-left font-weight-bold text-body">
                                Who Are We ?
                            </h3>

                            <h4 className="text-left text-body text-justify">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                            </h4>
                        </div>

                        <div className="bottom-txt">
                            <h3 className="text-left font-weight-bold text-body">
                                know more about us !
                            </h3>

                            <h4 className="text-left text-body text-justify">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                            </h4>
                        </div>
                    </div>

                    {/*---------------------- right section ------------------------- */}

                    <div className="right col-sm-6 col-md-6">
                        <img
                            src={IntroBook2}
                            alt="Logo"
                            calssName="img img-responsive"
                            style={imgStyle}
                        />
                    </div>
                </div>
                {/*-------------------------------------- bottom section -------------------------------------------- */}
                <div className="row mt-4">
                    <div className="col-sm-12 col-md-4 mb-2">
                        <div class="card w-100 m-0">
                            <img
                                src={book1}
                                alt="Logo1"
                                calssName="img img-responsive"
                                style={iconImgsStyle}
                            />
                            <div class="card-body">
                                <h4 class="card-text text-justify text-center">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </h4>
                            </div>
                        </div>
                    </div>
                    {/*-------------------------------------------card2------------------------------------------------------*/}
                    <div className="col-sm-12 col-md-4 mb-2">
                        <div class="card w-100 m-0">
                            <img
                                src={book2}
                                alt="Logo1"
                                calssName="img img-responsive"
                                style={iconImgsStyle}
                            />
                            <div class="card-body">
                                <h4 class="card-text text-justify text-center">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </h4>
                            </div>
                        </div>
                    </div>
                    {/*-------------------------------------------card3------------------------------------------------------*/}
                    <div className="col-sm-12 col-md-4 mb-2">
                        <div class="card w-100 m-0">
                            <img
                                src={book3}
                                alt="Logo1"
                                calssName="img img-responsive"
                                style={iconImgsStyle}
                            />
                            <div class="card-body">
                                <h4 class="card-text text-justify text-center">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*------------------------------------------- show ------------------------------------------------------*/}
            <div className="show text-center">
                <div class="content">
                    <h2>Read Wherever You Are !</h2>
                    <div class="showbtn text-center mt-3">
                        <button type="button">Know More</button>
                    </div>
                </div>
            </div>
            {/*------------------------------------------- end ------------------------------------------------------*/}
        </div>
    );
};

export default AboutUs;
