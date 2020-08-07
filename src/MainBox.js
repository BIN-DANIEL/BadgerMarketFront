import React from "react";
import { render } from "react-dom";
import DisplayBox from "./DisplayBox.js";
import CategoryBox from "./CategoryBox.js";
import SearchBar from "./SearchBar.js";
/**
 * This is the Component responsible for displaying the main page.
 */
export default class MainBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: Array(8).fill("category"),
            itemsIdDisplayed: Array(8).fill("") // Item id of Items to be displayed
        };
        this.categoryOnClickHanlder = this.categoryOnClickHandler.bind(this);
    }
    categoryOnClickHandler(category) {

    }

    //By Shao Bin
    render() {
        return (
            <div>
                <DisplayBox itemsId = {this.state.itemsIdDisplayed}/>
                <CategoryBox handleClick={this.categoryOnClickHandler}/>
                <SearchBar/>
            </div>
        )
    }
}