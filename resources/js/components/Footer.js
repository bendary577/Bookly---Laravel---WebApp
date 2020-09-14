import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebook,
    faGoogle,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import "../../css/footer.css";

class Footer extends Component {
    render() {
        return (
            <div calssName="footer">
                <div calssName="foot-top">
                    <div className="bg-dark">
                        <div className="container pt-4">
                            <div className="row ">
                                {/*---------------------- first section -------------------------- */}

                                <div className="sectionOneDiv text-center text-white col-md-4 col-sm-4 col-xs-12">
                                    <h3 className="text-white">Follow Us</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book.
                                    </p>
                                    <a
                                        type="button"
                                        className="btn-floating btn-lg"
                                    >
                                        <i>
                                            <FontAwesomeIcon
                                                icon={faFacebook}
                                            />
                                        </i>{" "}
                                    </a>
                                    <a
                                        type="button"
                                        className="btn-floating btn-lg"
                                    >
                                        <i>
                                            <FontAwesomeIcon icon={faGoogle} />
                                        </i>{" "}
                                    </a>
                                    <a
                                        type="button"
                                        className="btn-floating btn-lg"
                                    >
                                        <i>
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </i>
                                    </a>
                                    <a
                                        type="button"
                                        className="btn-floating btn-lg"
                                    >
                                        {" "}
                                        <i>
                                            <FontAwesomeIcon
                                                icon={faLinkedin}
                                            />
                                        </i>
                                    </a>
                                </div>

                                {/*---------------------- second section -------------------------- */}

                                <div className="sectionTwoDiv text-center text-white col-md-4 col-sm-4 col-xs-12">
                                    <h3 className="text-white">Contact US</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book.
                                    </p>
                                </div>

                                {/*---------------------- third section -------------------------- */}

                                <div className="sectionTwoDiv text-center text-white col-md-4 col-sm-4 col-xs-12">
                                    <h3 className="text-white">Call US</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*------------------------------------newsletter subscription -------------------------------------------------------*/}
                        <div className="pb-5 text-center">
                            <form
                                className="form-inline justify-content-center"
                                action=""
                            >
                                <label>
                                    <h4 className="text-white mr-2">
                                        Subscribe to our newsletter
                                    </h4>
                                </label>
                                <input
                                    className="form-control"
                                    type="email"
                                    placeholder="email"
                                    required
                                ></input>
                                <input
                                    className="btn btn-primary"
                                    type="submit"
                                    value="subscribe"
                                ></input>
                            </form>
                        </div>
                    </div>
                </div>

                {/*---------------------------- copyrights section ---------------------------------------- */}

                <div className="footer-bottom">
                    <div className="text-center bg-success">
                        <p>© 2020 Copyrights:Bookly.com</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
