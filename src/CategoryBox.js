import React from "react";
import "./CategoryBox.css";
import Category from "./Category.js";
export default class CategoryBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: ["Clothes", "Shoes", "Furniture", "Electronics", "Accessories", "VideoGames", "Books"],
            explanations: ["衣服/围巾/帽子等", "各类鞋(男/女)", "大小型家具", "耳机/游戏机/显示器等", "钱包/卡包/手表/首饰等", "二手卡带/光盘",
            "书籍/笔记/课本"]
        }
    }
    componentDidMount() {
        let catClass = [".clothCat", ".shoesCat", ".furCat", ".elecCat", ".accessoryCat", ".gameCat", ".bookCat"];
        for (let _class of catClass) {
             $(_class).mouseover(()=>{
                 $(_class).addClass("colored");
                 $("#CategoryWrapper > "+_class).addClass("selectEffect");
             });
            $(_class).mouseleave(()=>{
                $(_class).removeClass("colored");
                $("#CategoryWrapper > "+_class).removeClass("selectEffect");
            });
        }
    }
    render() {
        return (
                <div id={"CategoryBox"}>
                    <div id={"IconWrapper"}>
                        <img className={"CategoryIcon"} src={"./src/resources/clothes.png"} ></img>
                        <img className={"CategoryIcon"} src={"./src/resources/shoes.png"}></img>
                        <img className={"CategoryIcon"} src={"./src/resources/sofa.png"}></img>
                        <img className={"CategoryIcon"} src={"./src/resources/computer.png"}></img>
                        <img className={"CategoryIcon"} src={"./src/resources/watch.png"}></img>
                        <img className={"CategoryIcon"} src={"./src/resources/joystick.png"}></img>
                        <img className={"CategoryIcon"} src={"./src/resources/book.png"}></img>
                    </div>
                    <div id={"CategoryWrapper"}>
                        <div onClick={() => {this.props.displayItemOfCategory(this.state.categories[0])}} className={"category clothCat"}>{this.state.categories[0]}</div>
                        <div onClick={() => {this.props.displayItemOfCategory(this.state.categories[1])}} className={"category shoesCat"}>{this.state.categories[1]}</div>
                        <div onClick={() => {this.props.displayItemOfCategory(this.state.categories[2])}} className={"category furCat"}>{this.state.categories[2]}</div>
                        <div onClick={() => {this.props.displayItemOfCategory(this.state.categories[3])}} className={"category elecCat"}>{this.state.categories[3]}</div>
                        <div onClick={() => {this.props.displayItemOfCategory(this.state.categories[4])}} className={"category accessoryCat"}>{this.state.categories[4]}</div>
                        <div onClick={() => {this.props.displayItemOfCategory(this.state.categories[5])}} className={"category gameCat"}>{this.state.categories[5]}</div>
                        <div onClick={() => {this.props.displayItemOfCategory(this.state.categories[6])}} className={"category bookCat"}>{this.state.categories[6]}</div>
                    </div>
                    <div id={"CategoryInCN"}>
                        <div onClick={() => {this.props.displayItemOfCategory(this.state.categories[0])}} className={"clothCat"}>{this.state.explanations[0]}</div>
                        <div onClick={() => {this.props.displayItemOfCategory(this.state.categories[1])}} className={"shoesCat"}>{this.state.explanations[1]}</div>
                        <div onClick={() => {this.props.displayItemOfCategory(this.state.categories[2])}} className={"furCat"}>{this.state.explanations[2]}</div>
                        <div onClick={() => {this.props.displayItemOfCategory(this.state.categories[3])}} className={"elecCat"}>{this.state.explanations[3]}</div>
                        <div onClick={() => {this.props.displayItemOfCategory(this.state.categories[4])}} className={"accessoryCat"}>{this.state.explanations[4]}</div>
                        <div onClick={() => {this.props.displayItemOfCategory(this.state.categories[5])}} className={"gameCat"}>{this.state.explanations[5]}</div>
                        <div onClick={() => {this.props.displayItemOfCategory(this.state.categories[6])}} className={"bookCat"}>{this.state.explanations[6]}</div>
                    </div>
                </div>
        )
    }
}