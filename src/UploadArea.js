import React from "react";
import "./UserService.css";
export default class UploadArea extends React.Component {
    constructor(props) {
        super(props);
        this.handleMultipleFile = this.handleMultipleFile.bind(this);
        this.state = {
            FileList: []
        }
    }
    handleMultipleFile(e) {
        e.preventDefault();
        let newFileList = [...this.state.FileList];
        newFileList.push(document.querySelector('.OtherImages').files[0]);
        this.setState({FileList: newFileList});
    }

    render() {
        return(
            <div id={"UploadArea"}>
                <form id={"UploadForm"}>
                    <div className={"InfoWrapper Tile"}>
                        <label>Title</label>
                        <input className={"title"}></input>
                    </div>
                    <div className={"InfoWrapper Price"}>
                        <label>Price</label>
                        <input className={"price"}></input>
                    </div>
                    <div className={"InfoWrapper Description"}>
                        <label>Description</label>
                        <textarea className={"description"}></textarea>
                    </div>
                    <div className={"InfoWrapper CoverImage"}>
                        <label>CoverImage</label>
                        <input type={"file"} className={"coverImage"}></input>
                    </div>
                    <div className={"InfoWrapper OtherImages"}>
                        <label>OtherImages</label>
                        <input type={"file"} className={"otherImages"} onChange={this.handleMultipleFile}></input>
                    </div>
                    <div className={"UploadImages"}>
                        {this.state.FileList.map((filename, index) => {
                            return <div key={index} className={"UploadImage"}>{filename.name}</div>
                        })}
                    </div>
                </form>
            </div>
        )
    }
}