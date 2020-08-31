import React from "react";
import "./Login.css"

export default class LoginArea extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form id={"Login"}>
                <div className={"LoginDiv"} onClick={this.props.inLoginArea}><div>Login</div></div>
                <div className={"RegisterDiv hoverEffect notSelectEffect"} onClick={this.props.inRegArea}><div>Register</div></div>
                <p className={"WarningArea"}>Please Enter</p>
                <div className={"LoginArea"}>
                    <div className={"LoginInputWrapper"}>
                        {/*src={"./src/resources/user.png"}*/}
                        <img className={"LoginIcon"} src={" src/resources/user.png"}/>
                        <input onChange={this.props.handleInputChange} placeholder={"username"} className={"LoginInput"} id={"Username"} onClick={this.props.disableInputClickEffect}></input>
                    </div>
                    <div className={"LoginInputWrapper"}>
                        <img className={"LoginIcon"} src={" src/resources/password.png"}/>
                        <input onChange={this.props.handleInputChange} placeholder={"password"} className={"LoginInput"} id={"Password"} type={"password"} onClick={this.props.disableInputClickEffect}></input>
                    </div>
                    <div className={"LoginButtons"}>
                        <button type={"button"} onClick={this.props.handleLogin}>Login</button>
                        <button type={"button"} >Guest</button>
                    </div>
                </div>
            </form>
        );
    }
}