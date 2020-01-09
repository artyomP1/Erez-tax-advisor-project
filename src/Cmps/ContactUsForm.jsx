import React, { Component } from "react";

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

class ContactUsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tel: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    const { Option } = Select;
    return (
      <form
        className="main-form align-center flex column"
        onSubmit={this.handleSubmit}
      >
        <div className="main-inputs flex">
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
          </div>
          <div className="textarea flex column space-between">
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
        </div>
        <input className="send-ms-btn" type="submit" value="שלח" />
      </form>
    );
  }
}
export default ContactUsForm;
