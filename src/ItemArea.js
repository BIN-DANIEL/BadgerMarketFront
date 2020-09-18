import React from "react";
import "./UserService.css";
export default class ItemArea extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id={"ItemArea"}>

                {this.props.userItems.map((item, index) => {
                    let urlToCover = item.coverImageHttpURL;
                    return (
                        <div key={index} className={"MyItemWrapper"}>
                        {/*<label>{this.props.itemTitle}</label>*/}
                        {/*src should be this.props.itemSrc, 现在只是展示Demo作为效果*/}
                        <div className={"ItemTitle"}>{item.title}</div>
                        <div className={"ItemImageContainer"}>
                            <img className={"ItemImage"} src={urlToCover}></img>
                        </div>
                        {/*This should be this.props.description */}
                        {/*下面采用的是 inline style, 有最高优先级, 在.css 里面修改的时候要注意*/}
                        <div className={"ItemDescription"} >{item.description}</div>
                        <div className={"ItemPrice"} >{item.price + "$"}</div>
                    </div>
                    )
                }) }
            </div>
        )
    }
}