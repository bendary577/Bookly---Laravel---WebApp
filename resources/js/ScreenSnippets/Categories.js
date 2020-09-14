import React from "react";
import "../../css/categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="categories px-5 py-5 ">
            {/*---------------------- start -------------------------- */}

            <div className="text-center my-5">
                <h3>Categories</h3>
                <h3 className="mt-4">
                    Browse more than 100,000 books in a wide variety of
                    categories
                </h3>
            </div>

            <div className="grid">
                <div className="history">
                    <a href="#">History</a>
                </div>
                <div className="computerScience">
                    <a href="#">Computer Science</a>
                </div>
                <div className="midicine">
                    <a href="#">Medicine</a>
                </div>
                <div className="economy">
                    <a href="#">Economy</a>
                </div>
                <div className="engineering">
                    <a href="#">Engineering</a>
                </div>
                <div className="science">
                    <a href="#">Science</a>
                </div>
                <div className="religion">
                    <a href="#">Religion</a>
                </div>
            </div>

            <div class="text-center mt-4">
                <Link to="/categories">
                    <button type="button" class="btn btn-primary">
                        Browse All Categories
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Categories;
