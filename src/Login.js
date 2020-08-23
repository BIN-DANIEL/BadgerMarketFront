import React from "react";
import "./Login.css"

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.inLoginArea = this.inLoginArea.bind(this);
        this.inRegArea = this.inRegArea.bind(this);
        this.disableInputClickEffect =  this.disableInputClickEffect.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.state = {
            area: "login"
        }

    }

    /**
     * Display the Area for Login when LoginDiv is clicked
     */
    inLoginArea() {
        $(".WarningArea").css("visibility", "hidden");
        this.setState({area:"login"})
    }
    /**
     * Displaying the Area for Register when RegisterDiv is clicked
     */
    inRegArea() {
        $(".WarningArea").css("visibility", "hidden");
        this.setState({area:"register"})
    }

    /**
     * This is used to communicate with server for Register event
     */
    handleRegister(e) {
        e.preventDefault();
    }

    /**
     * This method is used to prevent <input>'s default click effect.
     */
    disableInputClickEffect(e) {
        e.preventDefault();
    }
    render() {
        if (this.state.area === "login") {
            return (
                <form id={"Login"}>
                    <div className={"LoginDiv"} onClick={this.inLoginArea}><div>Login</div></div>
                    <div className={"RegisterDiv"} onClick={this.inRegArea}><div>Register</div></div>
                    <p className={"WarningArea"}>Please Enter</p>
                    <div className={"LoginArea"}>
                        <div>
                            <img className={"LoginIcon"} src={"./src/resources/user.png"}/>
                            <input placeholder={"username"} className={"LoginInput"} id={"Username"} onClick={this.disableInputClickEffect}></input>
                        </div>
                        <div>
                            <img className={"LoginIcon"} src={"./src/resources/password.png"}/>
                            <input placeholder={"password"} className={"LoginInput"} id={"Password"} type={"password"} onClick={this.disableInputClickEffect}></input>
                        </div>
                        <button type={"button"} onClick={this.props.handleLogin}>Login</button>
                    </div>

                </form>
            )
        } else {
            return (
                <form id={"Login"}>
                    <div className={"LoginDiv"} onClick={this.inLoginArea}><div>Login</div></div>
                    <div className={"RegisterDiv"} onClick={this.inRegArea}><div>Register</div></div>
                    <p className={"WarningArea"}>Please Enter</p>
                    <div className={"RegisterArea"}>
                        <div>
                            <img className={"LoginIcon"} src={"./src/resources/user.png"}/>
                            <input placeholder={"username"} className={"LoginInput"} id={"Username"} onClick={this.disableInputClickEffect}></input>
                        </div>
                        <div className={"RegPassword"}>
                            <img className={"LoginIcon"} src={"./src/resources/password.png"}/>
                            <input placeholder={"password"} className={"LoginInput"} id={"Password"} type={"password"} onClick={this.disableInputClickEffect}></input>
                        </div>
                        <div className={"RegRePassword"}>
                            <img className={"LoginIcon"} src={"./src/resources/password.png"}/>
                            <input placeholder={"re-enter the password"} className={"LoginInput"} id={"Password"} type={"password"} onClick={this.disableInputClickEffect}></input>
                        </div>
                        <div className={"RegisterButton"}>
                            <button type={"button"} onClick={this.handleRegister}>Register</button>
                        </div>
                    </div>
                </form>
            )
        }
    }
}