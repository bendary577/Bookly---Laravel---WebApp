import React from "react";
import { Link } from "react-router-dom";
import "../../css/defaultnavbar.css";

const DefaultNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            {/* ---------------------------- logo -----------------------------------------------------*/}

            <Link className="navbar-brand text-white" to="/">
                <h2>Bookly</h2>
            </Link>

            {/* ---------------------------- toggler collapsing button -----------------------------------------------------*/}

            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            {/* ---------------------------- links -----------------------------------------------------*/}
            <div
                class="collapse navbar-collapse d-flex justify-content-end pr-5"
                id="collapsibleNavbar"
            >
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="#">
                            about us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="#">
                            contact us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="#">
                            categories
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="#">
                            services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="#">
                            privacy terms
                        </Link>
                    </li>
                </ul>
            </div>
            {/* ---------------------------- signup button -----------------------------------------------------*/}

            <Link
                className="btn btn-secondary btn-md btn-success active"
                to="/signup"
            >
                Signup
            </Link>

            {/* ---------------------------- end navbar -----------------------------------------------------*/}
        </nav>
    );
};

export default DefaultNavbar;
