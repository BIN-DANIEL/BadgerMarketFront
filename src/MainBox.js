import React from "react";
import { render } from "react-dom";

class MainBox extends React.Component {
    container(props) {
        super(props);
        this.state = {
            category: Array(7).fill(null), // category[0] is default that displays random items
            displayingCategory: 0,
        }
    }
    categoryBoxHandler(i) {
        this.setState({
            displayingCategory: i
        })
    }
}