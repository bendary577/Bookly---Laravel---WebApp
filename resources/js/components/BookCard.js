import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../css/bookcard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Book from "../../imgs/bookdemo.jpg";

class BookCard extends Component {
    render() {
        const book = this.props.book;
        rating = book.rating.map(number => {
            <FontAwesomeIcon icon={faStar} aria-hidden="true" />;
        });
        return (
            <div class="search">
                <div class="card w-100 m-0">
                    <img src={Book} alt="book" calssName="card-img-top" />

                    <div class="card-body text-center">
                        <h4 class="card-title">{book.title}</h4>
                        <p class="price">{book.price}</p>
                        <h4 class="card-text text-justify">
                            {book.description}
                        </h4>
                        <div>{rating}</div>
                        <Link to="/">
                            <button type="button">Add to Cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookCard;
