import React from "react";
import { render } from "react-dom";
import ItemContainer from "ItemExpandContainer.js"
import {DisplayBox} from "./DisplayBox";

/**
 * This is the Component responsible for displaying the main page.
 */
class MainBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: Array(7).fill(null), // category[0] is default that displays random items
            displayingCategory: 0,
            itemsIdDisplayed: Array(8).fill("") // Item id of Items to be displayed
        }
    }
    categoryBoxHandler(i) {
        this.setState({
            displayingCategory: i
        })
    }
    //By Shao Bin
    render() {
        return (
            <DisplayBox itemsId = {this.state.itemsIdDisplayed}/>
        )
    }
}