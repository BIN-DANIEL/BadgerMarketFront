import React from "react";
import { render } from "react-dom";
import DisplayBox from "./DisplayBox.js";
import CategoryBox from "./CategoryBox.js";
import SearchBar from "./SearchBar.js";
import Login from "./Login.js";
import UserService from "./UserService.js";
import "./MainBox.css";
import URLs from "./URLs.js";
/**
 * This is the Component responsible for displaying the main page.
 */
export default class MainBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: Array(8).fill("category"),
            itemsIdDisplayed: Array(8).fill(""), // Item id of Items to be displayed
            login: false
        };
        this.categoryOnClickHanlder = this.categoryOnClickHandler.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.userLogined = this.userLogined.bind(this);
        this.userLogOut = this.userLogOut.bind(this);
        this.username =  null;
        this.password = null;
        this.qq = null;
        this.weChat = null;
        this.mail = null;
        this.phone = null;
    }
    categoryOnClickHandler(category) {

    }
    validateUserInput(input) {
        let reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]");

    }
    handleSearch(e) {
        e.preventDefault();
    }
    userLogined(userInfo) {
        this.username = userInfo.username;
        this.password = userInfo.password;
        this.qq = userInfo.qq;
        this.weChat = userInfo.weChat;
        this.mail = userInfo.mail;
        this.phone = userInfo.phone;
        this.setState({login: true})
    }
    userLogOut() {
        this.username = null;
        this.password = null;
        this.qq = null;
        this.weChat = null;
        this.mail = null;
        this.phone = null;
        this.setState({login: false})
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
                        <Login userLogOut={this.userLogOut} userLogined={this.userLogined}/>
                    </div>
                    <div className={"UserService_Main"}>
                        <UserService/>
                    </div>
                </div>
            )
    }
}