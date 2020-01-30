import React, { Component } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Select } from "antd";

class AsaidContactUs extends React.Component {

    state = {
        isOpenContactUs: false,
    };

    getOpenContactUs = () => {
        this.setState({ isOpenContactUs: !this.state.isOpenContactUs });
    };

    render() {
        const { Option } = Select;
        let isOpenContactUs = this.state.isOpenContactUs;
        let className = this.state.isOpenContactUs ? 'offcanvas-aside offcanvas-aside-open' : 'offcanvas-aside';
        let button;
        if (!isOpenContactUs) {
            button = <i className="fa comment fa-comment" aria-hidden="true"></i>;
        } else {
            button = <i className="fa fa-times"></i>;
        }
        return (
            <section>
                <div className="offcanvas-btn" onClick={this.getOpenContactUs}>
                    {button}
                </div>

                <div className={className}>
                    <section id="contact"
                    // className="kwes-form" 
                    >
                        <h2>מלאו את הטופס ונחזור אליך בהקדם</h2>
                        <form
                            className="asaid-form align-center flex column"
                            onSubmit={this.handleSubmit}
                        // action="https://formsubmit.co/artyomp@outlook.com" 
                        // data-netlify="true" method="POST"
                        // method="POST" action="https://kwes.io/api/foreign/forms/CuXhGtHt9qQOaeueTjag">
                        >

                            <div className="flex column space-between">
                                <input
                                    name="name"
                                    placeholder="* שם מלא"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    rules="required|max:255"
                                />
                                <input
                                    name="phone"
                                    placeholder="* טלפון"
                                    value={this.state.tel}
                                    onChange={this.handleChange}
                                    rules="required|max:255"
                                />
                                <input
                                    name="email"
                                    placeholder="* מייל"
                                    type="email"
                                    value={this.state.tel}
                                    onChange={this.handleChange}
                                    rules="required"
                                />

                                <select
                                    name="subject"
                                    mode="multiple"
                                    style={{ width: "100%" }}
                                    placeholder="בחר נושא"

                                // onChange={handleChange}
                                >
                                    <option value="הנהלת חשבונות">הנהלת חשבונות</option>
                                    <option value="חשבות שכר">חשבות שכר</option>
                                    <option value="הצהרת הון">הצהרות הון</option>
                                    <option value="החזרי מס">החזרי מס</option>
                                    <option value="תכנון מס">תכנון מס</option>
                                    <option value="גיוס הון">גיוס הון</option>
                                    <option value="דוחות שנתיים">דוחות שנתיים</option>
                                </select>
                                <textarea
                                    name="msg"
                                    placeholder="תוכן הפנייה"
                                    rows="6"
                                    cols="50"
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                />

                            </div>
                            <input className="send-ms-btn" type="submit" value="שלח" />
                        </form>

                    </section>

                </div > </section >
        );
    }
};

export default AsaidContactUs;