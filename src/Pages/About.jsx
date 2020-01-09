import React from "react";
import { connect } from "react-redux";
import ContactUsForm from "../Cmps/ContactUsForm.jsx";
class About extends React.Component {
  render() {
    return (
      <section>
        <ContactUsForm />
      </section>
    );
  }
}

export default About;
