import React from "react";
import { connect } from "react-redux";
import ContactUsForm from "../Cmps/ContactUsForm.jsx";
import Maslul from "../Cmps/Maslul";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

class Maslulim extends React.Component {
  render() {
    return (
      <section>
        <div>
          <Maslul />
        </div>
        <div className="contact-us">
          <h2>
            מעוניינים בייעוץ ללא עלות <span>?</span>
          </h2>
          <h3> חייגו 052-603-6402 או השאירו פרטים ונחזור אליכם בהקדם </h3>
          <ContactUsForm />
        </div>
      </section>
    );
  }
}

export default Maslulim;
