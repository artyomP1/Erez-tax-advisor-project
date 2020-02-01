import React, { Component } from "react";
import { Link } from "react-router-dom";

import OurServicesService from "../modules/OurServices/OurServices.Service";
class AsaidContactUs extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            isOpenContactUs: false,
            name: "",
            fromEmail: "",
            subject: "",
            phone: "",
            msg: ""
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangefromEmail = this.handleChangefromEmail.bind(this);
        this.handleChangefromEmail = this.handleChangefromEmail.bind(this);
        this.handleChangeSubject = this.handleChangeSubject.bind(this);
        this.handleChangeMsg = this.handleChangeMsg.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }
    handleChangePhone(event) {
        this.setState({ phone: event.target.value });
    }
    handleChangefromEmail(event) {
        this.setState({ fromEmail: event.target.value });
    }
    handleChangeSubject(event) {
        this.setState({ subject: event.target.value });
    }
    handleChangeMsg(event) {
        this.setState({ msg: event.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();
        await OurServicesService.sendToEmail(
            this.state.name,
            this.state.fromEmail,
            this.state.subject,
            this.state.phone,
            this.state.msg
        );
        console.log(this.state.name);
    }

    getOpenContactUs = () => {
        this.setState({ isOpenContactUs: !this.state.isOpenContactUs });
    };

    render() {
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
                                    onChange={this.handleChangeName}
                                />
                                <input
                                    name="phone"
                                    placeholder="* טלפון"
                                    value={this.state.phone}
                                    onChange={this.handleChangePhone}
                                />
                                <input
                                    name="email"
                                    placeholder="* מייל"
                                    type="email"
                                    value={this.state.fromEmail}
                                    onChange={this.handleChangefromEmail}
                                />


                                <select
                                    name="subject"
                                    mode="multiple"
                                    style={{ width: "100%" }}
                                    placeholder="בחר נושא"
                                    value={this.state.subject}
                                    onChange={this.handleChangeSubject}
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
                                    value={this.state.msg}
                                    onChange={this.handleChangeMsg}
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