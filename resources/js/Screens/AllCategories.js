import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../css/allcategories.css";
import Axios from "axios";

class AllCategories extends Component {
    constructor(props) {
        super(props);
        this.state = { categories: [] };
    }

    componentDidMount(event) {
        Axios.get(`http://127.0.0.1:8002/api/v1/categories/`).then(response => {
            const categories = response.data.key;
            this.setState({ categories });
        });
    }

    render() {
        return <div></div>;
    }
}

export default AllCategories;
