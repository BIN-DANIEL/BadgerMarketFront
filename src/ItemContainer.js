import React from "react";
import {render} from "react-dom";
import "./ItemContainer.css";

/**
 * This Component represents the Container of Item
 */
export default class ItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseLeave =  this.handleMouseLeave.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.state = {
            "font-style": {
                color: "black"
            }
        };
        this.urlToImage = "./src/demo.jpg";
        this.itemDescription = "This is Item Description";
        this.itemPrice = "This is Item Price";
    }
    handleMouseOver() {
        this.setState({"font-style": {
                color: "orangered"
            }})
    }
    handleMouseLeave() {
        this.setState({"font-style": {
                color: "black"
            }})
    }
    componentDidMount() {
        let itemId = this.props.itemId; // 从MainBox中传递进来, 声明要被显示的Item的ID.
        /**
         * TO DO
         * 根据Item ID, 来请求 urlToImage, itemDescription, itemPrice
         * **/

    }

    render() {

      return (
          <div className={"ItemContainer"} onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                {/*<label>{this.props.itemTitle}</label>*/}
                {/*src should be this.props.itemSrc, 现在只是展示Demo作为效果*/}
                <div className={"ItemImageContainer"}>
                  <img className={"ItemImage"} src={this.urlToImage}></img>
                </div>
                {/*This should be this.props.description */}
                {/*下面采用的是 inline style, 有最高优先级, 在.css 里面修改的时候要注意*/}
                <div className={"ItemDescription"} style={this.state["font-style"]}>{this.itemDescription}</div>
                <div className={"ItemPrice"} style={this.state["font-style"]}>{this.itemPrice}</div>
          </div>

      )
  }
}
render(<ItemContainer/>, document.getElementById("demo"));
