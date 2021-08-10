import React, { Component } from "react";
import "./Button.scss";
class Button extends Component {
    render() {
        return <button className="main-button">{this.props.val}</button>;
    }
}
export default Button;
