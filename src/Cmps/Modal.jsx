import React, { Component } from "react";
import { Modal, Button } from "antd";
import ContactUsForm from "./ContactUsForm.jsx";

class ModalForm extends React.Component {
  state = { isVisible: false };

  componentDidMount() {
    setTimeout(() => {
      let isVisible = true;
      this.setState({ isVisible });
    }, 3000);
  }

  hendelFormModal = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    let isVisible = this.state.isVisible;
    let className = isVisible ? "form-modal open " : "form-modal";
    let className1 = isVisible ? "modal-open  screen" : "form-modal";
    return (
      <section>
        <div className={className1} onClick={this.hendelFormModal}></div>
        {isVisible ? (
          <div className={className}>
            <h2>מעוניינים בייעוץ ללא עלות ?</h2>
            <h3>השאירו פרטים ונחזור אליכם בהקדם</h3>
            {/* <section className="kwes-form">
              <form
                className="main-form align-center flex column"
                // onSubmit={this.handleSubmit}
                method="POST"
                action="https://kwes.io/api/foreign/forms/IozFD5nHiHKFGQD5LtFR"
              >
                <div className="main-inputs flex">
                  <div className="flex column ">
                    <input
                      name="name"
                      placeholder="* שם מלא"
                      // value={this.state.name}
                      // onChange={this.handleChange}
                    />
                    <input
                      name="phone"
                      placeholder="* טלפון"
                      // value={this.state.tel}
                      // onChange={this.handleChange}
                    />
                    <input
                      name="email"
                      placeholder="* מייל"
                      type="email"
                      // value={this.state.tel}
                      // onChange={this.handleChange}
                    />
                  </div>
                  <div className="textarea space-between flex column ">
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
                      // value={this.state.message}
                      // onChange={this.handleChange}
                    />
                  </div>
                </div>
                <input className="send-ms-btn" type="submit" value="שלח" />
              </form>
            </section> */}
            {/* <ContactUsForm className="modal-form-inputs" /> */}
            <div>
              <ContactUsForm />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </section>
    );
  }
}

export default ModalForm;
