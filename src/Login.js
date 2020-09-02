import React from "react";
import "./Login.css"
import URLs from "./URLs.js";
import LoginArea from "./LoginArea.js";
import RegisterArea from "./RegisterArea.js";
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.inLoginArea = this.inLoginArea.bind(this);
        this.inRegArea = this.inRegArea.bind(this);
        this.disableInputClickEffect =  this.disableInputClickEffect.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleContactInfo = this.handleContactInfo.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
        this.state = {
            area: "login"
        };
        this.userInfo = {
            username: "Daniel",
            password: null,
            qq: null,
            weChat: null,
            mail: null,
            phone: null
        };
    }
    componentDidMount() {

    }

    /**
     * Display the Area for Login when LoginDiv is clicked
     */
    inLoginArea() {
        $(".WarningArea").css("visibility", "hidden");
        $(".LoginDiv").removeClass("hoverEffect").removeClass("notSelectEffect");
        $(".RegisterDiv").addClass("hoverEffect").addClass("notSelectEffect");
        this.setState({area:"login"})
    }
    /**
     * Displaying the Area for Register when RegisterDiv is clicked
     */
    inRegArea() {
        $(".WarningArea").css("visibility", "hidden");
        $(".LoginDiv").addClass("hoverEffect").addClass("notSelectEffect");
        $(".RegisterDiv").removeClass("hoverEffect").removeClass("notSelectEffect");

        this.setState({area:"register"})
    }

    /**
     * This is used to communicate with server for Register event
     */
    handleLogin(e) {
            e.preventDefault();
            let username = $("#Username").val();
            username = username.trim();
            let password = $("#Password").val();
            password = password.trim()
            if (username === "") {
                $(".WarningArea").text("Please Enter The Username!");
                $(".WarningArea").css("visibility", "visible");
                return;
            }
            if (password === "") {
                $(".WarningArea").text("Please Enter The Password!");
                $(".WarningArea").css("visibility", "visible");
                return;
            }
            //TO DO: Need to parse User Input.
            let url = URLs.buildLoginURL(username, password);
            $.ajax({
                dataType:"json",
                url: url,
                method: 'GET',
                error: (jqXHR, textStatus, errorThrown) => {
                    console.log(errorThrown)
                }
            }).done((data, textStatus, jqXHR)=>{
                if (data.success) {
                    // TODO: Display User Interface
                    this.userInfo.username = username;
                    this.userInfo.password = password;
                    this.userInfo.qq = data.qq;
                    this.userInfo.weChat = data.weChat;
                    this.userInfo.mail = data.mail;
                    this.userInfo.phone = data.phone;
                    this.props.userLogined(this.userInfo);
                    this.setState({area:"logined"})
                } else {
                    // TODO: Display Error Message
                    $(".WarningArea").text("username/password incorrect");
                    $(".WarningArea").css("visibility", "visible");
                    return;
                }
            })
        }
    handleRegister(e) {
        e.preventDefault();
        let username = $('#Username').val();
        let password = $('.RegPassword input').val();
        let re_password = $('.RegRePassword input').val();
        //TODO: Filter Special characters
        if (username === "") {
            $(".WarningArea").text("Please Enter The Username!");
            $(".WarningArea").css("visibility", "visible");
            return;
        }
        if (password === "") {
            $(".WarningArea").text("Please Enter The Password!");
            $(".WarningArea").css("visibility", "visible");
            return;
        }
        if (re_password === "") {
            $(".WarningArea").text("Please Re-Enter The Password!");
            $(".WarningArea").css("visibility", "visible");
            return;
        }
        if (password != re_password) {
            $(".WarningArea").text("Re-entered Password Does'nt Match!");
            $(".WarningArea").css("visibility", "visible");
            return;
        }
        $.ajax({
            url: URLs.buildHasUserURL(username),
            method: 'POST',
            dataType: 'json',
            error: (jqXHR, textStatus, errorThrown) => {
                console.log(errorThrown)
            }
        }).done((data, textStatus, jqXHR)=>{
            //return true or false
            if (!data) {
                this.userInfo.username = username;
                this.userInfo.password = password;
                this.props.userLogined(this.userInfo);
                this.setState({area:"contactInfo"})
            } else {
                $(".WarningArea").text("Username Already Exists!");
                $(".WarningArea").css("visibility", "visible");
            }
        });
    };

    handleContactInfo(e) {
        e.preventDefault();
        let contactInfo = $(".InfoWrapper input");
        let allNull = true; // check if at least one Contact Information is given
        for (let i = 0; i < contactInfo.length; i++) {
            // get Input's value
             let val = contactInfo[i].value;
             // check if value is null
             if (val !== "") {
                 allNull = false;
             }
             this.userInfo[contactInfo[i].name] = val;
        }
        if (allNull) {
            //Display Warning Information;
            $(".InfoToUser").text("Please Provide At Least One Contact Info");
            $(".InfoToUser").css({"color": "red"});
            return;
        }
        $.ajax({
            method: "POST",
            url: URLs.regURL,
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(this.userInfo),
            error: (jqXHR, textStatus, errorThrown) => {
                console.log(errorThrown)
            }
        }).done((data, textStatus, jqXHR)=>{
            if (data.regSuccess) {
                this.props.userLogined(this.userInfo);
                this.setState({area: "logined"});
            } else {
                $(".InfoToUser").text("Server Error: Wait For A While and Re-Try");
                $(".InfoToUser").css({"color": "red"});
            }
        });
    }
    /**
     * This method is used to prevent <input>'s default click effect.
     */
    disableInputClickEffect(e) {
        e.preventDefault();
    }
    handleInputChange(e) {
        if (e.currentTarget.value.includes(" ")) {
            e.currentTarget.value = e.currentTarget.value.replace(/\s/g, "");
        }
    }
    handleLogOut(e) {
        e.preventDefault();
        this.props.userLogOut();
        this.setState({area: "login"});
    }
    render() {
        if (this.state.area === "login") {
            return (
                <LoginArea userLogined={this.props.userLogined} handleLogin={this.handleLogin} inLoginArea={this.inLoginArea} handleInputChange={this.handleInputChange} inRegArea={this.inRegArea} disableInputClickEffect={this.disableInputClickEffect}/>
            )
        } else if (this.state.area === "register"){
            return (
                <RegisterArea userLogined={this.props.userLogined} handleRegister={this.handleRegister} handleInputChange={this.handleInputChange} disableInputClickEffect={this.disableInputClickEffect} inLoginArea={this.inLoginArea} inRegArea={this.inRegArea}/>
            )
        } else if (this.state.area === "contactInfo") {
            return (
                <div id={"Login"}>
                    <form className={"ContactInfo"}>
                        <div className={"InfoToUser"}>Please Provide One Or More Contact Information</div>
                        <div className={"InfoContainer"}>
                            <div className={"InfoWrapper"}>
                                <label>QQ</label>
                                <label>WeChat</label>
                                <label>Phone</label>
                                <label>Mail</label>
                            </div>
                            <div className={"InfoWrapper"}>
                                <input onChange={this.handleInputChange} name={"qq"} placeholder={"type..."}></input>
                                <input onChange={this.handleInputChange} name={"weChat"}placeholder={"type..."}></input>
                                <input onChange={this.handleInputChange} name={"phone"}placeholder={"type..."}></input>
                                <input onChange={this.handleInputChange} name={"mail"}placeholder={"type..."}></input>
                            </div>
                        </div>
                    </form>
                    <div className={"InfoButtons"}>
                        <button className={"InfoButton"} onClick={()=>{this.setState({area:"register"})}}>Back</button>
                        <button className={"InfoButton"} onClick={this.handleContactInfo}>Continue</button>
                    </div>
                </div>
            )
        } else if(this.state.area === "logined"){
            return(
                <div id={"Login"} className={"LoginedDiv"}>
                    <div className={"WelcomeInfo"}>WELCOME {this.userInfo.username} !</div>
                    <button onClick={this.handleLogOut}>Log Out</button>
                </div>
            )
        }
    }
}