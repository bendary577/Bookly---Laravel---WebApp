import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeView from "../ScreenSnippets/HomeView";
import AboutUs from "../ScreenSnippets/AboutUs";
import Categories from "../ScreenSnippets/Categories";
import ContactUs from "../ScreenSnippets/ContactUs";
import Footer from "../components/Footer";
import Customers from "../ScreenSnippets/Customers";

class Home extends Component {
    render() {
        return (
            <div>
                <HomeView />
                <AboutUs />
                <Categories />
                <Customers />
                <ContactUs />
                <Footer />
            </div>
        );
    }
}

export default Home;
