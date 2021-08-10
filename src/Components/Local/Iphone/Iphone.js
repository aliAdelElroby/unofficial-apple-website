import React, { Component } from "react";
import "./Iphone.scss";

// Import Assets
import iphone_img from "./assets/Iphone.png";
import Button from "../../Global/Button/Button";
import $ from "jquery";

// Import Components
import LearnMore from "../../Global/LearnMore/LearnMore";

class Iphone extends Component {
    render() {
        // Some Functionulity
        $(window).on("scroll", () => {
            let bg_text = $(".bg-text");
            if ($(window).scrollTop() > $(".iphone").offset().top - 500) {
                bg_text.addClass("bg-text-stroke");
            } else {
                bg_text.removeClass("bg-text-stroke");
            }
        });
        return (
            <section className="iphone">
                <div className="container">
                    <div className="row">
                        <div className="content">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <div className="content-text">
                                        <div className="bg-text">
                                            I Phone
                                            <span data-stroke="I Phone">
                                                I Phone
                                            </span>
                                            <span data-stroke="I Phone">
                                                I Phone
                                            </span>
                                        </div>
                                        <h2>
                                            iPhone 12 Pro & Pro Max
                                            <span>It’s a leap year.</span>
                                        </h2>
                                        <Button val="Buy Now" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <div className="photo">
                                        <img
                                            src={iphone_img}
                                            alt="Iphone_img"
                                        />
                                    </div>
                                </div>
                            </div>
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
export default Iphone;
