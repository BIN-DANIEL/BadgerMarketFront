import React from "react";
import {render} from "react-dom";
import "./ItemContainer.css";
class ItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseLeave =  this.handleMouseLeave.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.state = {
            "font-style": {
                color: "black"
            }
        }
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
  render() {

      return (
          <div className={"ItemContainer"} onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                {/*<label>{this.props.itemTitle}</label>*/}
                {/*src should be this.props.itemSrc, 现在只是展示Demo作为效果*/}
                <div className={"ItemImageContainer"}>
                  <img className={"ItemImage"} src={"./src/demo.jpg"}></img>
                </div>
                {/*This should be this.props.description */}
                {/*下面采用的是 inline style, 有最高优先级, 在.css 里面修改的时候要注意*/}
                <div className={"ItemDescription"} style={this.state["font-style"]}>This is Item Description</div>
                <div className={"ItemPrice"} style={this.state["font-style"]}>This is Item Price</div>
          </div>

      )
  }
}
render(<ItemContainer/>, document.getElementById("demo"));
