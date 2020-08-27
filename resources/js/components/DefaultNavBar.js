import React, {Component} from 'react';
import { Link } from 'react-router-dom';


const DefaultNavbar = () => {

    return(
                
                <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                    <div className="container">
                        <div className="row">

                        {/* ---------------------------- logo -----------------------------------------------------*/}

                        <div className="col-sm-12 col-md-3 col-lg-1 col-xl-1">
                            <Link className="navbar-brand font-weight-bold text-lg-left" to="/">Bookly</Link>
                        </div>

                        {/* ---------------------------- search bar -----------------------------------------------------*/}

                        <div className="col-sm-12 col-md-9 col-lg-4 col-xl-6">
                            <form className="form-inline w-30" action="">
                                <input className="form-control mr-sm-2 w-65" type="search" placeholder="Search for a book" aria-label="Search" />
                                <button className="btn btn-warning my-2 my-sm-0 mx-2" type="submit">Search</button>
                            </form>
                        </div>

                        {/* ----------------------------links -----------------------------------------------------*/}

                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <ul className="navbar-nav mr-4 mt-2 mt-lg-0 w-30">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="#">about us</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="#">contact us</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="#">categories</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="#">services</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="#">privacy terms</Link>
                                </li>               
                            </ul>
                        </div>

                        {/* ---------------------------- signup button -----------------------------------------------------*/}

                        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1">
                            <Link className="btn btn-secondary btn-lg active" to="/signup">Signup</Link>
                        </div>

                    </div>
                </div>
            </nav>
        )
    }

export default DefaultNavbar;