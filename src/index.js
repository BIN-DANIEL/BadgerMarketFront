import React from "react";
import { render } from "react-dom";
import MainBox from "./MainBox.js";
import "./index.css";
import $ from "jquery";
class Footer extends React.Component {
    render(){
        return (
            <div>
                <div>
                    <a href="https://icons8.com/icon/132/search">Search icon by Icons8</a>
                </div>
                <div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a>
                    from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </div>
            </div>
        )
    }
};
render(<MainBox/>, document.getElementById("demo"));
render(<Footer/>, document.getElementById("footer"));