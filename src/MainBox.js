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
            itemsToBeDisplayed: [],
            login: false,
            pages: [],
            category: "Clothes",
            curKeyWord: "",
            userItems: []
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.userLogined = this.userLogined.bind(this);
        this.userLogOut = this.userLogOut.bind(this);
        this.getUserName = this.getUserName.bind(this);
        this.displayItemOfCategory = this.displayItemOfCategory.bind(this);
        this.setPage = this.setPage.bind(this);
        this.displayItemMatchKeyWord = this.displayItemMatchKeyWord.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.containSpecialChar = this.containSpecialChar.bind(this);
        this.username =  null;
        this.password = null;
        this.qq = null;
        this.weChat = null;
        this.mail = null;
        this.phone = null;
    }

    handleSearch(e) {
        e.preventDefault();
    }
    getUserName() {
        return this.username;
    }
    userLogined(userInfo, data) {
        this.username = userInfo.username;
        this.password = userInfo.password;
        this.qq = userInfo.qq;
        this.weChat = userInfo.weChat;
        this.mail = userInfo.mail;
        this.phone = userInfo.phone;
        //TODO: query user Item.
        //itemId: "FDCDE99ACFFD4B33A0C586FA7486CE00", title: "NS", description: "awdawdawd", price: 111, username: "StanDou"
        //coverImageHttpURL: "localhost:8080/665e40d0e00c4d47808cb9d9d2649726.png", otherImages: Array(1)
        let newUserItems = [];
        for (let i = 0; i < data.itemInfo.length; i++) {
            let itemInfo = data.itemInfo[i];
            let itemImageResource = data.itemImageResource[i];
            let item = {
                itemId: itemInfo.itemId,
                title: itemInfo.title,
                description: itemInfo.description,
                price: itemInfo.price,
                coverImageHttpURL: itemImageResource.coverImageHttpURL,
                otherImages: itemImageResource.otherImages
            };
            newUserItems.push(item);
        }
        this.setState({login: true, userItems: newUserItems})
    }
    userLogOut() {
        this.username = null;
        this.password = null;
        this.qq = null;
        this.weChat = null;
        this.mail = null;
        this.phone = null;
        this.setState({login: false, userItems:[]})
    }
    componentDidMount() {
        $.ajax({
            url: URLs.buildFetchItemURL("Clothes", 8, 1),
            method: "GET",
            dataType: "json",
            error: (jqXHR, textStatus, errorThrown) => {
                console.log(errorThrown)
            }
        }).done((data, textStatus, jqXHR)=>{
            this.setState({itemsToBeDisplayed: data[1], pages: data[0]});

        })
    }
    deleteItem(itemId) {
        $.ajax({
            url: URLs.buildDeleteItemURL(itemId),
            method: "PUT",
            error: (jqXHR, textStatus, errorThrown) => {
                console.log(errorThrown)
            }
        }).done((data, textStatus, jqXHR)=>{
            if (data) { // data is success or false
                let userItems = [...this.state.userItems];
                userItems = userItems.filter((item) => {
                    return item.itemId != itemId;
                });
                this.setState({userItems: userItems});
            } else {
                alert("DELETE FAILED, TRY LATER");
            }
        })
    }
    addItem(item) {
        let userItems = [...this.state.userItems];
        userItems.push(item);
        this.setState({userItems: userItems});
    }
    setPage(page) {
        if (this.state.curKeyWord == "") {
            this.displayItemOfCategory(this.state.category, page);
        } else {
            this.displayItemMatchKeyWord(this.state.curKeyWord, page);
        }
    }
    displayItemMatchKeyWord(keyword, page=1) {
        $.ajax({
            url: URLs.buildFindKeyWordURL(keyword, 8, page),
            method: "GET",
            dataType: "json",
            error: (jqXHR, textStatus, errorThrown) => {
                console.log(errorThrown)
            }
        }).done((data, textStatus, jqXHR)=>{
            this.setState({itemsToBeDisplayed: data[1], pages: data[0], curKeyWord: keyword});
        })
    }
    displayItemOfCategory(category, page=1) {
        $.ajax({
            url: URLs.buildFetchItemURL(category, 8, page),
            method: "GET",
            dataType: "json",
            error: (jqXHR, textStatus, errorThrown) => {
                console.log(errorThrown)
            }
        }).done((data, textStatus, jqXHR)=>{
            this.setState({itemsToBeDisplayed: data[1], pages: data[0], category:category, curKeyWord: ""});
        })
    }
    containSpecialChar(text) {
        let regEN = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
        let regCN = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
        return regCN.test(text) || regEN.test(text);
    }
    //By Shao Bin
    render() {
        if (this.state.login) {
            return (
                <div className={"MainBox"}>
                    <div className={"DisplayBox_Main"}>
                        <DisplayBox  setPage={this.setPage} pages={this.state.pages} itemsToBeDisplayed = {this.state.itemsToBeDisplayed}/>
                    </div>
                    <div className={"CategoryBox_Main"}>
                        <CategoryBox displayItemOfCategory={this.displayItemOfCategory}/>
                    </div>
                    <div className={"SearchBar_Main"}>
                        <SearchBar containSpecialChar={this.containSpecialChar} displayItemMatchKeyWord = {this.displayItemMatchKeyWord} handleSearch = {this.handleSearch} />
                    </div>
                    <div className={"Login_Main"}>
                        <Login containSpecialChar={this.containSpecialChar} userLogOut={this.userLogOut} userLogined={this.userLogined}/>
                    </div>
                    <div className={"UserService_Main"}>
                        <UserService containSpecialChar={this.containSpecialChar} addItem={this.addItem} deleteItem={this.deleteItem} userItems={this.state.userItems} getUserName={this.getUserName}/>
                    </div>
                </div>
            )
        } else {
             return (
                 <div className={"MainBox"}>
                     <div className={"DisplayBox_Main"}>
                         <DisplayBox setPage={this.setPage} pages={this.state.pages} itemsToBeDisplayed = {this.state.itemsToBeDisplayed}/>
                     </div>
                     <div className={"CategoryBox_Main"}>
                         <CategoryBox displayItemOfCategory={this.displayItemOfCategory}/>
                     </div>
                     <div className={"SearchBar_Main"}>
                         <SearchBar containSpecialChar={this.containSpecialChar} displayItemMatchKeyWord = {this.displayItemMatchKeyWord} handleSearch = {this.handleSearch} />
                     </div>
                     <div className={"Login_Main"}>
                         <Login containSpecialChar={this.containSpecialChar} userLogOut={this.userLogOut} userLogined={this.userLogined}/>
                     </div>
                 </div>
             )
        }
    }
}