import React from "react";
import { render } from "react-dom";
import DisplayBox from "./DisplayBox.js";
import CategoryBox from "./CategoryBox.js";
import SearchBar from "./SearchBar.js";
import Login from "./Login";
import "./MainBox.css";
/**
 * This is the Component responsible for displaying the main page.
 */
export default class MainBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: Array(8).fill("category"),
            itemsIdDisplayed: Array(8).fill(""), // Item id of Items to be displayed
            userId: null
        };
        this.categoryOnClickHanlder = this.categoryOnClickHandler.bind(this);
        this.loginOnClickHandler = this.loginOnClickHandler.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    categoryOnClickHandler(category) {

    }
    handleSearch(e) {
        e.preventDefault();
    }
    loginOnClickHandler(e) {
        e.preventDefault();
        let username = $("#Username").val();
        username = username.trim();
        let password = $("#Password").val();
        password = password.trim()
        if (username === "") {
            $(".WarningArea").text("Please Enter The Username!");
            $(".WarningArea").css("visibility", "visible");
            return;
        }
        if (password === "") {
            $(".WarningArea").text("Please Enter The Password!");
            $(".WarningArea").css("visibility", "visible");
            return;
        }
    }
    //By Shao Bin
    render() {
        return (
            <div className={"MainBox"}>
                <div className={"DisplayBox_Main"}>
                    <DisplayBox itemsId = {this.state.itemsIdDisplayed}/>
                </div>
                <div className={"CategoryBox_Main"}>
                    <CategoryBox handleClick={this.categoryOnClickHandler}/>
                </div>
                <div className={"SearchBar_Main"}>
                    <SearchBar handleSearch = {this.handleSearch} />
                </div>
                <div className={"Login_Main"}>
                    <Login handleLogin={this.loginOnClickHandler}/>
                </div>
            </div>
        )
    }
}