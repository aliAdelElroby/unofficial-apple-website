import React, { Component } from "react";
import Button from "../../Global/Button/Button";
import "./Macbook.scss";
// Import Components
import LearnMore from "../../Global/LearnMore/LearnMore";
class Macbook extends Component {
    render() {
        return (
            <section className="Macbook">
                <div className="container">
                    <div className="row">
                        <div className="content">
                            <h2>
                                Mac Book Pro 2021
                                <br /> 16 Inch
                            </h2>
                            <Button val="Buy Now" />
                        </div>
                    </div>
                    <div className="row">
                        <LearnMore link="#" />
                    </div>
                </div>
            </section>
        );
    }
}
export default Macbook;
