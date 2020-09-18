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
       let itemInfo = {...this.props.item};
       let otherImages = Object.values({...itemInfo.otherImages});
      return (
          <div className={"ItemContainer"} onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                {/*<label>{this.props.itemTitle}</label>*/}
                {/*src should be this.props.itemSrc, 现在只是展示Demo作为效果*/}
              {/*private String title; // title of the item*/}
              {/*private String description; // Item's description*/}
              {/*private double price; // Item's price(in $)*/}
              {/*private String qq;*/}
              {/*private String weChat;*/}
              {/*private String phone;*/}
              {/*private String mail;*/}
              {/*String coverImageHttpURL;*/}
              {/*List<String> otherImages;*/}
              <div className={"ItemTitle"}><div>{itemInfo.title}</div></div>
                <div className={"ItemImageContainer"}>
                  <img className={"ItemImage"} src={itemInfo.coverImageHttpURL} onClick={(e)=>{e.preventDefault();e.stopPropagation(); this.props.zoomClick(itemInfo.coverImageHttpURL, this.props.nameOfClass)}}></img>
                    {otherImages.map((item, index) => {
                        return <img onClick={(e)=>{e.preventDefault();e.stopPropagation();this.props.zoomClick(item, this.props.nameOfClass)}} key={index} className={"ItemImage"} src={item}></img>
                    })}
                </div>
                {/*This should be this.props.description */}
                {/*下面采用的是 inline style, 有最高优先级, 在.css 里面修改的时候要注意*/}
                <div className={"ItemDescription"} style={this.state["font-style"]}>{itemInfo.description}</div>
                <div className={"ItemPrice"} style={this.state["font-style"]}>{itemInfo.price + "$"}</div>
              <div className={"ItemContact"}><p>QQ: </p>{itemInfo.qq}</div>
              <div className={"ItemContact"}><p>WeChat: </p>{itemInfo.weChat}</div>
              <div className={"ItemContact"}><p>Phone: </p>{itemInfo.phone}</div>
              <div className={"ItemContact"}><p>E-Mail: </p>{itemInfo.mail}</div>
          </div>

      )
  }
}
render(<ItemContainer/>, document.getElementById("demo"));
