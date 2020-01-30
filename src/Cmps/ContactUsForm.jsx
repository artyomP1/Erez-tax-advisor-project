import React, { Component } from "react";

import "antd/dist/antd.css";

class ContactUsForm extends React.Component {
  render() {
    return (
      <section
      //  className="kwes-form">
      >
        <form
          className="main-form align-center flex column"
          // onSubmit={this.handleSubmit}
          // method="POST"
          // action="https://kwes.io/api/foreign/forms/YtPEDAdPXYw3HGDhJH46"
        >
          <div className="main-inputs flex">
            <div className="flex column space-between">
              <input
                name="name"
                placeholder="* שם מלא"
                // value={this.state.name}
                // onChange={this.handleChange}
              />
              <input name="phone" placeholder="* טלפון" />
              <input name="email" placeholder="* מייל" type="email" />
            </div>
            <div className="textarea space-between flex column ">
              <select
                name="subject"
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="בחר נושא"
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
              />
            </div>
          </div>
          <input className="send-ms-btn" type="submit" value="שלח" />
        </form>
      </section>
    );
  }
}
export default ContactUsForm;
