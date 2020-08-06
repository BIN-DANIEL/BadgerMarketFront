import React from "react";
import "./CategoryBox.css";
export default class CategoryBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // string array，商品类别tag用
        }
    }
    //<RightCircleOutlined />

    render() {
        return (

            <div id={"CategoryBox"}>
                <img className={"CategoryIcon"} src={"./src/resources/clothes.png"}/>
                <div className={"Category"}>Clothes(衣服/帽子/围巾等)</div>
                <img className={"CategoryIcon"} src={"./src/resources/shoes.png"}/>
                <div className={"Category"}>Shoes(各类鞋)</div>
                <img className={"CategoryIcon"} src={"./src/resources/sofa.png"}/>
                <div className={"Category"}>Furniture(大小型家具)</div>
                <img className={"CategoryIcon"} src={"./src/resources/computer.png"}/>
                <div className={"Category"}>Electronics(电脑/显示屏/显卡/游戏机/耳机等)</div>
                <img className={"CategoryIcon"} src={"./src/resources/book.png"}/>
                <div className={"Category"}>Books(书籍/课本/笔记等)</div>
                <img className={"CategoryIcon"} src={"./src/resources/joystick.png"}/>
                <div className={"Category"}>VideoGames(二手卡带/光盘)</div>
                <img className={"CategoryIcon"} src={"./src/resources/watch.png"}/>
                <div className={"Category"}>Accessories(首饰/卡包/钱包/手表等)</div>
                <img className={"CategoryIcon"} src={"./src/resources/sale.png"}/>
                <div className={"Category"}>Others(杂物)</div>
            </div>
        )
    }
}