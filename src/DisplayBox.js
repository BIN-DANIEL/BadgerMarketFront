import React from "react";
import ItemContainer from "ItemContainer.js";
/**
 * This is the Component used to display rows of Items
 */
export class DisplayBox extends React.Component {
    constructor(props) {
        super(props);
    }
    //props.itemsId 是一个储存了要被展示的商品的ID的数组
    render() {
        return (
            <ItemContainer itemId={this.props[0]}/> // 将Id传递到ItemContainer中, 由它自己来获取信息
        )
    }
}