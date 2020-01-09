import React, { Component } from "react";
import { Modal, Button } from "antd";
import ContactUsForm from "../Cmps/ContactUsForm.jsx";

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
            <ContactUsForm />
          </div>
        ) : (
          <div></div>
        )}
      </section>
    );
  }
}

export default ModalForm;
