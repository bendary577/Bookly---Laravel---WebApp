import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../../css/profilenavbar.css";
import Axios from "axios";

class ProfileNavPar extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", books: [], thereIsBooks: false };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({ name: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const name = this.state.name;

        Axios.get(`http://127.0.0.1:8002/api/v1/books?name=${name}`).then(
            response => {
                console.log(response.data.key);
                console.log(response.data.status);
                const books = response.data.key;
                const thereIsBooks = response.data.status;
                console.log(books);
                console.log(thereIsBooks);
                this.setState({ books, thereIsBooks });
                this.props.middleFnction(books, status);
            }
        );
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-info">
                {/* ---------------------------- logo -----------------------------------------------------*/}

                <Link className="navbar-brand text-white" to="/">
                    <h2>Bookly</h2>
                </Link>

                {/* ---------------------------- toggler collapsing button -----------------------------------------------------*/}

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* ---------------------------- collapsable content -----------------------------------------------------*/}
                <div
                    className="collapse navbar-collapse"
                    id="collapsibleNavbar"
                >
                    {/* --------------- form -------------------*/}
                    <form
                        className="form-inline md-form active-cyan active-cyan-2 w-50"
                        onSubmit={this.handleSubmit}
                    >
                        <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
                        <input
                            className="form-control form-control-sm ml-3 w-75"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={this.handleChange}
                            value={this.state.name}
                        ></input>
                    </form>
                    {/* --------------- links -------------------*/}
                    <ul className="navbar-nav w-50">
                        <li className="nav-item">
                            <Link className="nav-link text-white mt-2" to="#">
                                categories
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white mt-2" to="#">
                                privacy terms
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                <div className="divicon d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon
                                        icon={faShoppingCart}
                                        aria-hidden="true"
                                    />
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="#">
                                <div className="divicon d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon
                                        icon={faBook}
                                        aria-hidden="true"
                                    />
                                </div>
                            </Link>
                        </li>
                        {/* --------------- dropdown -------------------*/}
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="#">
                                <div className="divicon d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        aria-hidden="true"
                                    />
                                </div>
                            </Link>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <Link className="dropdown-item" to="#">
                                    Update Profile
                                </Link>
                                <Link className="dropdown-item" to="#">
                                    Your Payments
                                </Link>
                                <Link className="dropdown-item" to="#">
                                    Logout
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* ---------------------------- end navbar -----------------------------------------------------*/}
            </nav>
        );
    }
}

export default ProfileNavPar;
