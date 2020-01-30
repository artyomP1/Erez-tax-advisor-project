import React, { Component } from "react";
import { Link } from "react-router-dom";


class Header extends React.Component {

    state = {
        isOpenMenu: false,
    };

    getOpenMenu = () => {
        this.setState({ isOpenMenu: !this.state.isOpenMenu });
        console.log(this.state.isOpenMenu);
    };
    render() {
        let className = this.state.isOpenMenu ? 'openMenu screen' : 'screen';
        return (
            <section className="header flex space-between">
                <div>
                    <Link to="/"><img className="header-logo" src="https://res.cloudinary.com/artyompogosov/image/upload/v1578216837/bcehmx06woctjeqhbo1h.png" /></Link>
                </div>
                <i className={className} onClick={this.getOpenMenu} className="fa fa-bars"></i>
                <div className={className} onClick={this.getOpenMenu}></div>
                <div className="nav-bar flex">
                    <div className="nav-bar-links flex space-around">
                        <div>
                            <img className="header-logo" src="https://res.cloudinary.com/artyompogosov/image/upload/v1578216837/bcehmx06woctjeqhbo1h.png" />
                        </div>
                        <Link onClick={this.getOpenMenu} to="/">ראשי</Link>
                        <Link onClick={this.getOpenMenu} to="/about">אודות</Link>
                        <Link onClick={this.getOpenMenu} to="/ourServices">שירותים</Link>
                        <Link onClick={this.getOpenMenu} to="/info">מידע מקצועי</Link>
                        <Link onClick={this.getOpenMenu} to="/contactUs">צור קשר</Link>
                    </div ></div>
            </section >
        );
    }
}

export default Header;