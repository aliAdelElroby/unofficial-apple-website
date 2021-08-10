import React, { Component } from "react";
import "./LearnMore.scss";

// Import Assets
import arrowDown from "./assets/ArrowDown.svg";
class LearnMore extends Component {
    render() {
        return (
            <div className="learn-more">
                <a href={this.props.link}>
                    Learn More
                    <img src={arrowDown} alt="arrow-down" />
                </a>
            </div>
        );
    }
}
export default LearnMore;
