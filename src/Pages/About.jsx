import React from "react";
import { connect } from "react-redux";
import ContactUsForm from "../Cmps/ContactUsForm.jsx";
class About extends React.Component {
  render() {
    return (
      <section>
        <div className="title-img">
          <img
            className="service-page-img"
            src="https://res.cloudinary.com/artyompogosov/image/upload/v1580580623/r1ookjckv1ngbkifrkof.jpg"
          />
          <h1>אודות</h1>
        </div>
        <ContactUsForm />
      </section>
    );
  }
}

export default About;
