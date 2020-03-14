import React, { Component } from "react";
import { Link } from "react-router-dom";
import nav from "react-router-dom";


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
                        <Link onClick={this.getOpenMenu} to="/workWithUs">למה איתנו</Link>
                        <Link className="service-mobile" onClick={this.getOpenMenu} to="/service">שירותי המשרד</Link>
                        <span className="dropdown service-web" onClick={this.getOpenMenu} >
                            <span className="dropbtn">שירותים</span >
                            <div className="dropdown-content">
                                <Link onClick={this.getOpenMenu} to="/service/5a56640269f443a5d64b32ca">החזר מס לשכירים</Link>
                                <Link onClick={this.getOpenMenu} to="/service/5a5664025f6ae9aa24a99fde">הצהרות הון</Link>
                                <Link onClick={this.getOpenMenu} to="/service/5a56640252d6acddd183d319">הנהלת חשבונות</Link>
                                <Link onClick={this.getOpenMenu} to="/service/5a1110252d6acddd183d319">תכנון מס</Link>
                                <Link onClick={this.getOpenMenu} to="/service/5a566402ed1cf3412345674d">חשבות שכר</Link>
                                <Link onClick={this.getOpenMenu} to="/service/5a566402ed1cf349f0b47b4d">דוחות שנתיים</Link>
                                <Link onClick={this.getOpenMenu} to="/service/5a266402edbbb349f1b4123">פתיחת עסק</Link>
                            </div>
                        </span>
                        <Link onClick={this.getOpenMenu} to="/Maslulim">מסלולים</Link>
                        <Link onClick={this.getOpenMenu} to="/info">מידע מקצועי</Link>
                        <Link onClick={this.getOpenMenu} to="/contactUs">צור קשר</Link>
                    </div ></div>
            </section >
        );
    }
}

export default Header;