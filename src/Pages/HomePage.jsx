import React from "react";
import { connect } from "react-redux";

class HomePage extends React.Component {
  render() {
    return (
      <section>
        <img
          className="main-img"
          src="https://res.cloudinary.com/artyompogosov/image/upload/v1577871888/zaf6e7dlhir08vdjit5u.jpg"
        />
      </section>
    );
  }
}

export default HomePage;
