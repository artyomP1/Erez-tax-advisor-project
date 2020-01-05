import React, { Component } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import {
    Form,
    Input,
    select,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete
} from "antd";
import FormItem from "antd/lib/form/FormItem";
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
                    <section id="contact">
                        <h4>Contact Me</h4>
                        <form
                            className="asaid-form align-center flex column"
                            onSubmit={this.handleSubmit}
                        >

                            <div className="flex column space-between">
                                <input
                                    placeholder="* שם מלא"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                                <input
                                    placeholder="* טלפון"
                                    value={this.state.tel}
                                    onChange={this.handleChange}
                                />
                                <input
                                    placeholder="* מייל"
                                    type="email"
                                    value={this.state.tel}
                                    onChange={this.handleChange}
                                />

                                <Select
                                    mode="multiple"
                                    style={{ width: "100%" }}
                                    placeholder="בחר נושא"

                                // onChange={handleChange}
                                >
                                    <Option value="הנהלת חשבונות">הנהלת חשבונות</Option>
                                    <Option value="חשבות שכר">חשבות שכר</Option>
                                    <Option value="הצהרת הון">הצהרות הון</Option>
                                    <Option value="החזרי מס">החזרי מס</Option>
                                    <Option value="תכנון מס">תכנון מס</Option>
                                    <Option value="גיוס הון">גיוס הון</Option>
                                    <Option value="דוחות שנתיים">דוחות שנתיים</Option>
                                </Select>
                                <textarea
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

                </div> </section >
        );
    }
};

export default AsaidContactUs;