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
                    <Link to="/">Erez</Link>
                </div>
                <i className={className} onClick={this.getOpenMenu} className="fa fa-bars"></i>
                <div className={className} onClick={this.getOpenMenu}></div>
                <div className="nav-bar flex space-around">
                    <Link onClick={this.getOpenMenu} to="/">ראשי</Link>
                    <Link onClick={this.getOpenMenu} to="/about">אודות</Link>
                    <Link onClick={this.getOpenMenu} to="/ourServices">שירותים</Link>
                    <Link onClick={this.getOpenMenu} to="/ourServices">מידע מקצועי</Link>
                    <Link onClick={this.getOpenMenu} to="/contactUs">צור קשר</Link>
                </div >
            </section >
        );
    }
}

export default Header;