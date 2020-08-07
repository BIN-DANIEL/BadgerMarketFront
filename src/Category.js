import React from "react";

export default class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={"Category"}>
                <img src={this.props.src} className={"CategoryIcon"}/>
                <div>{this.props.category}</div>
                <div>{ this.props.explanation}</div>
            </div>
        )
    }
}