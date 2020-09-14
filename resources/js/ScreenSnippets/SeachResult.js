import React, { Component } from "react";
import "../../css/searchresult.css";
import BookCard from "../components/BookCard";

class Search extends Component {
    render() {
        const books = this.props.books;
        const thereIsBooks = this.props.thereIsBooks;
        let responseBooks;

        if (thereIsBooks) {
            console.log(thereIsBooks);
            console.log(books);
            responseBooks = books.map(book => (
                <BookCard key={book.id.toString()} book={book} />
            ));
        } else {
            responseBooks = (
                <div className="text-center mt-5">
                    <h2 className="text-center text-danger">
                        sorry, we couldn't help you !
                    </h2>
                </div>
            );
        }

        {
            /**----------------------------------------rendering ----------------------------------------------------------------- */
        }

        return (
            <div>
                <div className="searchResult">
                    <div className="container">
                        <div className="row">{responseBooks}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
