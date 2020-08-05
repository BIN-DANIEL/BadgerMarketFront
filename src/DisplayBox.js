import React from "react";
import ItemContainer from "./ItemContainer.js";
import "./DisplayBox.css"
/**
 * This is the Component used to display rows of Items
 */
export default class DisplayBox extends React.Component {
    constructor(props) {
        super(props);
    }
    //props.itemsId 是一个储存了要被展示的商品的ID的数组
    render() {
        return (
            <div id={"DisplayBox"}>
                {/*将Id传递到ItemContainer中, 由它自己来获取信息<ItemContainer itemId={this.props[1]}*/}
                    <ItemContainer itemId={this.props.itemsId[0]}/>
                    <ItemContainer itemId={this.props.itemsId[1]}/>
                    <ItemContainer itemId={this.props.itemsId[2]}/>
                    <ItemContainer itemId={this.props.itemsId[3]}/>
                    <ItemContainer itemId={this.props.itemsId[4]}/>
                    <ItemContainer itemId={this.props.itemsId[5]}/>
                    <ItemContainer itemId={this.props.itemsId[6]}/>
                    <ItemContainer itemId={this.props.itemsId[7]}/>
            </div>
        )
    }
}
