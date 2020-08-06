import React from "react";
import { render } from "react-dom";
import MainBox from "./MainBox.js";

class Footer extends React.Component {
    render(){
        return (
            <div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a>
                from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>
        )
    }
};
render(<MainBox/>, document.getElementById("demo"));
render(<Footer/>, document.getElementById("footer"));