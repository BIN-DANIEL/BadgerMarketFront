import React from "react";
import "./UserService.css"
import ItemArea from "./ItemArea.js";
import UploadArea from "./UploadArea.js";
export default class UserService extends React.Component {
    constructor(props) {
        super(props);
        this.inUploadArea = this.inUploadArea.bind(this);
        this.inItemArea = this.inItemArea.bind(this);
        this.state = {
            area:"upload"
        }
    }
    inUploadArea(e) {
        e.preventDefault();
        // $(".UploadItem").removeClass("notSelectEffect").removeClass("hoverEffect");
        // $(".MyItem").addClass("notSelectEffect").addClass("hoverEffect");
        this.setState({area: "upload"});
    }
    inItemArea(e) {
        e.preventDefault();
        // $(".UploadItem").addClass("notSelectEffect").addClass("hoverEffect");
        // $(".MyItem").removeClass("notSelectEffect").removeClass("hoverEffect");
        this.setState({area: "item"});
    }
    render() {
        if (this.state.area === "item") {
            return(
                <div id={"UserService"}>
                    <div onClick={this.inUploadArea} className={"UploadItem notSelectEffect hoverEffect"}>Upload Items</div>
                    <div onClick={this.inItemArea} className={"MyItem "}>My Items</div>
                    <ItemArea/>
                </div>
            )
        } else if (this.state.area === "upload"){
            return(
                <div id={"UserService"}>
                    <div onClick={this.inUploadArea} className={"UploadItem"}>Upload Items</div>
                    <div onClick={this.inItemArea} className={"MyItem notSelectEffect hoverEffect"}>My Items</div>
                    <UploadArea/>
                </div>
            )
        }
    }

}