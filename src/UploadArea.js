import React from "react";
import "./UserService.css";
import URLs from "./URLs.js";
export default class UploadArea extends React.Component {
    constructor(props) {
        super(props);
        this.handleMultipleFile = this.handleMultipleFile.bind(this);
        this.handleCover = this.handleCover.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCoverDelete = this.handleCoverDelete.bind(this);
        this.uploadItem = this.uploadItem.bind(this);
        // this.isImgType = this.isImgType.bind(this);
        this.state = {
            FileList: [],
            Cover: [],
        }
    }
    // isImgType(file){
    //     //用文件名name后缀判断文件类型，可用size属性判断文件大小不能超过500k ， 前端直接判断的好处，免去服务器的压力。
    //     return /\.(jpg|jpeg|png|GIF|JPG|PNG)$/.test(file.name);
    // }
    handleMultipleFile(e) {

        e.preventDefault();
        $(".otherImg").css({visibility:"hidden"});
        let file = document.querySelector('.otherImages').files[0];
        if (file == undefined) {
            // No file is uploaded
            return;
        }
        let newFileList = [...this.state.FileList];
        // Check If the file has already uploaded
        for (let File of this.state.FileList) {
            if (File.name == file.name) {
                return;
            }
        }
        if (this.state.Cover.length == 1) {
            if (this.state.Cover[0].name == file.name) {
                return;
            }
        }
        newFileList.push(file);
        this.setState({FileList: newFileList});
    }
    handleCover(e) {
        e.preventDefault();
        $(".coverImg").css({visibility:"hidden"});
        let newFileList = [];
        let file = document.querySelector('.coverImage').files[0];
        if (file == undefined) {
            // No file is uploaded
            return;
        }
        for (let File of this.state.FileList) {
             if (File.name == file.name) {
                 return;
             }
        }
        newFileList.push(file);
        this.setState({Cover: newFileList});
    }
    handleDelete(e) {
        let fileName = e.currentTarget.innerText;
        let newFileList = [];
        for (let file of this.state.FileList) {
             if (file.name === fileName) {
                 continue;
             } else {
                 newFileList.push(file);
             }
        }
        this.setState({FileList: newFileList});
    }
    handleCoverDelete() {
        this.setState({Cover: []});
    }
    uploadItem(e) {
        e.preventDefault();
        let data = new FormData();
        let title = $(".title").val();
        let price = $(".price").val();
        let category = $(".category").find("option:selected").text();

        if (title == "") {
            $(".WarnInfo").css({"visibility": "visible"}).text("Please Provide A Title");
            return;
        }
        if (price == "") {
            $(".WarnInfo").css({"visibility": "visible"}).text("Please Provide A Price");
            return;
        }
        if (isNaN(price)){
            $(".WarnInfo").css({"visibility": "visible"}).text("Please Provide Number As Price");
            return;
        }
        let description = $(".description").val();
        let checkDes = /[<>]/im;
        if (this.props.containSpecialChar(title) || checkDes.test(description)) {
            $(".WarnInfo").css({"visibility": "visible"}).text("Special Characters Disallowed");
            return;
        }
        let coverImage = [...this.state.Cover];
        let otherImages = [...this.state.FileList];
        data.append("title", title);
        data.append("price", price);
        data.append("description", description);
        data.append("category", category);
        if (coverImage.length == 0) {
            //do nothing
        } else {
            data.append("coverImage", coverImage[0]);
        }
        if (otherImages.length == 0) {
            //do nothing
        } else {
            for (let file of otherImages) {
                data.append("otherImages", file);
            }
        }
        data.append("username", this.props.getUserName());
        $.ajax({
            url: URLs.uploadItemURL,
            data: data,
            method: "POST",
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            error: (jqXHR, textStatus, errorThrown) => {
                console.log(errorThrown)
            },
        }).done((data, textStatus, jqXHR)=>{
            if (data.success) {
                let item = {
                    itemId: data.itemId,
                    title: title,
                    description: description,
                    price: price,
                    coverImageHttpURL: data.urlToCover,
                    otherImages: data.urlsToOther
                };
                this.props.inItemArea(item);
            } else {
                $(".WarnInfo").css({"visibility": "visible"}).text("Upload Failed, Please Try Again");
            }
        })
    }
    render() {
        return(
            <div id={"UploadArea"}>
                <div id={"UploadForm"}>
                    <div className={"WarnInfo"}>HELLO</div>
                    <div className={"ItemInfoWrapper Title"}>
                        <label>Title</label>
                        <input placeholder={"Nintendo Switch..."} className={"title"}></input>
                    </div>
                    <div className={"ItemInfoWrapper Price"}>
                        <label>Price</label>
                        <input  placeholder={"324$..."}className={"price"}></input>
                        <div>$</div>
                    </div>
                    <div className={"ItemInfoWrapper"}>
                        <label>Category</label>
                        <select className={"category"}>
                            <option>Clothes</option>
                            <option>Shoes</option>
                            <option>Furniture</option>
                            <option>Electronics</option>
                            <option>Accessories</option>
                            <option>VideoGames</option>
                            <option>Books</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div className={"ItemInfoWrapper Description"}>
                        <label>Description</label>
                        <textarea className={"description"} ></textarea>
                    </div>
                    <div className={"ItemInfoWrapper CoverImage"}>
                        <label>Cover(封面)</label>
                        <input accept="image/*" type={"file"} className={"coverImage"} onChange={this.handleCover}></input>
                    </div>
                    <div className={"ItemInfoWrapper OtherImages"}>
                        <label>OtherImages</label>
                        <input type={"file"} className={"otherImages"} onChange={this.handleMultipleFile}></input>
                    </div>
                    <div className={"UploadFileWrapper"}>
                        <label>Uploaded Files(If no images uploaded, default will be used)</label>
                        <div className={"UploadImages"}>
                            {
                               this.state.Cover.map((file, index) => {
                                   return <div key={index} onClick={this.handleCoverDelete} className={"UploadImage Cover"}>{file.name}</div>
                            })}

                            {this.state.FileList.map((file, index) => {
                              return <div key={index} onClick={this.handleDelete} className={"UploadImage"}>{file.name}</div>
                            })}
                        </div>
                    </div>
                    <button onClick={this.uploadItem}>Submit</button>
                </div>
            </div>
        )
    }
}