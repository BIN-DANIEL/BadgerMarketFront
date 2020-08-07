import React from "react";
import {render} from "react-dom";
import "./searchBar.css";
export default class SearchBar extends React.Component {
    componentDidMount() {
        $(".SearchContent").mouseover(()=>{
            $(".SearchContent").addClass("SearchContentHover");
            $(".SearchSubmit").addClass("SearchSubmitHover");
        });
        $(".SearchSubmit").mouseover(()=>{
            $(".SearchContent").addClass("SearchContentHover");
            $(".SearchSubmit").addClass("SearchSubmitHover");
        });
        $(".SearchContent").mouseleave(()=>{
            $(".SearchContent").removeClass("SearchContentHover");
            $(".SearchSubmit").removeClass("SearchSubmitHover");
        });
        $(".SearchSubmit").mouseleave(()=>{
            $(".SearchContent").removeClass("SearchContentHover");
            $(".SearchSubmit").removeClass("SearchSubmitHover");
        });
    }

    render() {
       return(
           <form id={"SearchBar"}>
               <input className={"SearchContent"} type={"search"} placeholder={"What Are You Looking For?"}></input>
               <input className={"SearchSubmit"} type={"image"} src={"https://img.icons8.com/ios/100/000000/search--v1.png"}>
               </input>
           </form>
       )
   }
}
