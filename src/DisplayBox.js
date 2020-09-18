import React from "react";
import ItemContainer from "./ItemContainer.js";
import "./DisplayBox.css";
/**
 * This is the Component used to display rows of Items
 */
export default class DisplayBox extends React.Component {
    constructor(props) {
        super(props);
        this.zoomClick = this.zoomClick.bind(this);
    }
    zoomClick(url, className) {
        console.log("a");

        let img = '<img class="zoomClick"src=' + url + '>';
        $("."+className).prepend(img);
        $("."+className + " .zoomClick").click(() => {
            $("." + className + " .zoomClick").remove();
        })
    }
    //props.itemsId 是一个储存了要被展示的商品的ID的数组
    render() {
        let items = this.props.itemsToBeDisplayed;
        let pages = this.props.pages;
        return (
            <div id={"DisplayBox_"}>
            <div id={"DisplayBox"}>
                {items.map((item, index) => {
                    return(<div key={index} className={"ItemContainer" + index}>
                        <ItemContainer zoomClick={this.zoomClick}  nameOfClass={"ItemContainer" + index}  item={item}/>
                    </div>)
                })}
            </div>
                <div id={"selectionBar"}>
                    {
                    pages.map((item, index) => {
                        return <button key={index} onClick={()=>{this.props.setPage(index + 1)}}>{index + 1}</button>
                    })
                }

                </div>
            </div>
        )
    }
}

