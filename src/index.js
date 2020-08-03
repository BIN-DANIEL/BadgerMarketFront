import React from "react";
import {render} from "react-dom";

class Demo extends React.Component {
    render() {
        return (
            <div>
                Demo!
            </div>
        )
    }
}
render(<Demo/>, document.getElementById("demo"));