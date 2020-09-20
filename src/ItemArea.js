import React from "react";
import "./UserService.css";
export default class ItemArea extends React.Component {
    constructor(props) {
        super(props);
        this.zoomClick =  this.zoomClick.bind(this);
    }
    zoomClick(url, className) {
        let img = '<img class="ZoomClick"src=' + url + '>';
        $("."+className).prepend(img);
        $("."+className + " .ZoomClick").click(() => {
            $("." + className + " .ZoomClick").remove();
        })
    }
    render() {
        let userItems = [...this.props.userItems];
        return(
            <div id={"ItemArea"}>
                {
                    userItems.map((item, index) => {
                    let urlToCover = item.coverImageHttpURL;
                    let urlsToOther = [...item.otherImages];
                    let parentIndex = index;
                    return (
                        <div key={index} className={"MyItemWrapper " + "MyItemWrapper" + index}>
                        {/*<label>{this.props.itemTitle}</label>*/}
                        {/*src should be this.props.itemSrc, 现在只是展示Demo作为效果*/}
                        <div className={"ItemTitle"}>{item.title}</div>
                        <div className={"ItemImageContainer"}>
                            <img className={"ItemImage"} onClick={()=>this.zoomClick(urlToCover, "MyItemWrapper" + parentIndex)} src={urlToCover}></img>
                            {
                                urlsToOther.map((url, index) => {
                                return <img key={index} onClick={()=>this.zoomClick(url, "MyItemWrapper" + parentIndex)} className={"ItemImage"} src={url}></img>

                            })
                            }
                        </div>
                        {/*This should be this.props.description */}
                        {/*下面采用的是 inline style, 有最高优先级, 在.css 里面修改的时候要注意*/}
                        <div className={"ItemDescription"} >{item.description}</div>
                        <div className={"ItemPrice"} >{item.price + "$"}</div>
                            <button onClick={(e)=>{e.preventDefault(); this.props.deleteItem(item.itemId)}}>Delete</button>
                    </div>
                    )
                })
                }
            </div>
        )
    }
}