import React, { Component } from "react";
import "../../css/search.css";
import ProfileNavPar from "../components/ProfileNavBar";
import SearchResult from "../ScreenSnippets/SeachResult";
import Footer from "../components/Footer";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            thereIsBooks: false
        };
        this.middleFnction = this.middleFnction.bind(this);
    }

    middleFnction(books, thereIsBooks) {
        this.setState({
            books,
            thereIsBooks
        });
    }

    componentWillUpdate(newProp, newState) {
        console.log("newProp is ", newProp);
        console.log("newState is ", newState);
        this.setState({
            newState
        });
    }

    componentDidUpdate(prevprop, prevState) {
        console.log("prevpropis ", prevprop);
        console.log("prevState is ", prevState);
    }

    render() {
        return (
            <div>
                <ProfileNavPar middleFnction={this.middleFnction.bind(this)} />
                <SearchResult
                    books={this.state.books}
                    thereIsBooks={this.state.thereIsBooks}
                />
                <Footer />
            </div>
        );
    }
}

export default Search;
