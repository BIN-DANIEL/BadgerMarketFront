import React from "react";
import "./Login.css"

export default class RegisterArea extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form id={"Login"}>
                <div className={"LoginDiv hoverEffect notSelectEffect"} onClick={this.props.inLoginArea}><div>Login</div></div>
                <div className={"RegisterDiv"} onClick={this.props.inRegArea}><div>Register</div></div>
                <p className={"WarningArea"}>Please Enter</p>
                <div className={"RegisterArea"}>
                    <div>
                        <img className={"LoginIcon"} src={"./src/resources/user.png"}/>
                        <input onChange={this.props.handleInputChange} placeholder={"username"} className={"LoginInput"} id={"Username"} onClick={this.props.disableInputClickEffect}></input>
                    </div>
                    <div className={"RegPassword"}>
                        <img className={"LoginIcon"} src={"./src/resources/password.png"}/>
                        <input onChange={this.props.handleInputChange} placeholder={"password"} className={"LoginInput"} id={"Password"} type={"password"} onClick={this.props.disableInputClickEffect}></input>
                    </div>
                    <div className={"RegRePassword"}>
                        <img className={"LoginIcon"} src={"./src/resources/password.png"}/>
                        <input onChange={this.props.handleInputChange} placeholder={"re-enter the password"} className={"LoginInput"} id={"Password"} type={"password"} onClick={this.props.disableInputClickEffect}></input>
                    </div>
                    <div className={"RegisterButton"}>
                        <button type={"button"} onClick={this.props.handleRegister}>Register</button>
                    </div>
                </div>
            </form>
        );
    }
}