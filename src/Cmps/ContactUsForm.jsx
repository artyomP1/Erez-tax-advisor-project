import React, { Component } from "react";
import OurServicesService from "../modules/OurServices/OurServices.Service";
import "antd/dist/antd.css";

class ContactUsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <section>
        <form
          className="main-form align-center flex column"
          onSubmit={this.handleSubmit}
        >
          <div className="main-inputs flex">
            <div className="inputs flex column space-between">
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
            </div>
            <div className="textarea space-between flex column ">
              <select
                name="subject"
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="בחר נושא"
                value={this.state.subject}
                onChange={this.handleChangeSubject}
              >
                {" "}
                <option value="" disabled hidden>
                  בחר נושא
                </option>
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
          </div>
          <input className="send-ms-btn" type="submit" value="שלח" />
        </form>
      </section>
    );
  }
}
export default ContactUsForm;
