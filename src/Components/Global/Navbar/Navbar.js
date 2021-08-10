import React, { Component } from "react";
import "./Navbar.scss";
import $ from "jquery";
// Import Assets
import logo from "./assets/Logo.svg";
import searchIcn from "./assets/search_icn.svg";
import cartIcnEmpty from "./assets/cart_icn_empty.svg";
import cartIcnFill from "./assets/cart_icn_fill.svg";

class Navbar extends Component {
    state = {
        startingX: 0,
        startingY: 0,
        movingX: 0,
        movingY: 0,
        items: this.props.shop.map((item) => {
            return (
                <li key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="text">{item.name}</div>
                </li>
            );
        }),
    };

    touchstart = (e) => {
        this.setState({
            startingX: e.touches[0].clientX,
        });
        this.setState({
            startingY: e.touches[0].clientY,
        });
    };
    touchmove = (e) => {
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";
        this.setState({
            movingX: e.touches[0].clientX,
        });
        this.setState({
            movingY: e.touches[0].clientY,
        });
        let links_mobile = $(".main-navbar .mobile .links"),
            menuItems = $(".cart .items");
        if (this.state.startingY + 50 < this.state.movingY) {
            if (menuItems.css("display") === "block") {
                menuItems.css("display", "none");
            }
            links_mobile.slideDown();
        } else if (this.state.startingY - 50 > this.state.movingY) {
            links_mobile.slideUp();
        }
    };
    touchend = () => {
        document.body.style.height = "auto";
        document.body.style.overflow = "visible";
    };

    Search = () => {
        let search = $(".search"),
            input = $(".search input");
        if (search.hasClass("search-open") && input.val() === "") {
            search.removeClass("search-open");
        } else {
            search.addClass("search-open");
        }
    };

    Cart = () => {
        let linksMobile = $(".main-navbar .mobile .links"),
            menuItems = $(".cart .items");
        if (linksMobile.css("display") === "block") {
            linksMobile.css("display", "none");
        }
        menuItems.fadeToggle(200);
    };
    render() {
        // When Window Onload
        window.onload = () => {};
        // For Convert Navbar To Fixed
        let fixedNav = () => {
            let navbar = $(".main-navbar"),
                links_mobile = $(".main-navbar .mobile .links");
            if ($(window).scrollTop() >= navbar.height()) {
                navbar.addClass("fixed");
                links_mobile.addClass("bg-remove");
                setTimeout(() => {
                    navbar.css("transition", "all 600ms");
                }, 100);
                setTimeout(() => {
                    navbar.css("transform", "translate(0,0)");
                }, 200);
            } else {
                navbar.removeClass("fixed");
                navbar.css("transition", "none");
                navbar.css("transform", "");
                links_mobile.hide();
                links_mobile.removeClass("bg-remove");
            }
        };
        $(window).on("scroll", fixedNav);

        return (
            <div className="main-navbar" id="navbar">
                <div className="container">
                    <div className="container-navbar">
                        <div className="logo">
                            <a href="/">
                                <img src={logo} alt="logo" className="icn" />
                            </a>
                        </div>
                        <div className="links">
                            <ul>
                                <li>
                                    <a href="#mac">Mac</a>
                                </li>
                                <li>
                                    <a href="#ipad">IPad</a>
                                </li>
                                <li>
                                    <a href="#iphone">IPhone</a>
                                </li>
                                <li>
                                    <a href="#watch">Watch</a>
                                </li>
                                <li>
                                    <a href="#tv">Tv</a>
                                </li>
                                <li>
                                    <a href="#music">Music</a>
                                </li>
                                <li>
                                    <a href="#support">Support</a>
                                </li>
                            </ul>
                        </div>
                        <div className="search">
                            <img
                                src={searchIcn}
                                alt="search_icn"
                                onClick={this.Search}
                                className="icn"
                            />
                            <input type="text" />
                        </div>
                        <div className="cart">
                            <img
                                className="icn"
                                src={
                                    this.props.shop.length > 0
                                        ? cartIcnFill
                                        : cartIcnEmpty
                                }
                                alt="cart_icn"
                                onClick={this.Cart}
                            />
                            <div className="items">
                                <div className="items-container">
                                    <ul>{this.state.items}</ul>
                                </div>
                                <div className="checkout">Check Out</div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile">
                        <span
                            className="sensor"
                            onTouchStart={this.touchstart}
                            onTouchMove={this.touchmove}
                            onTouchEnd={this.touchend}
                        >
                            <div className="handler"></div>
                        </span>
                        <div className="links">
                            <ul>
                                <li>
                                    <a href="#mac">Mac</a>
                                </li>
                                <li>
                                    <a href="#ipad">IPad</a>
                                </li>
                                <li>
                                    <a href="#iphone">IPhone</a>
                                </li>
                                <li>
                                    <a href="#watch">Watch</a>
                                </li>
                                <li>
                                    <a href="#tv">Tv</a>
                                </li>
                                <li>
                                    <a href="#music">Music</a>
                                </li>
                                <li>
                                    <a href="#support">Support</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Navbar;
