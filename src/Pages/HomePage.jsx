import React from "react";
import { connect } from "react-redux";
import ServicesList from "../modules/OurServices/ServicesList";
import OurServicesService from "../modules/OurServices/OurServices.Service";

class HomePage extends React.Component {
  state = {
    ourServices: []
  };

  async componentDidMount() {
    const ourServices = await OurServicesService.query();
    this.setState({ ourServices });
    console.log(ourServices);
  }

  render() {
    const { ourServices } = this.state;

    return (
      <section>
        <div>
          <img
            className="main-img"
            src="https://res.cloudinary.com/artyompogosov/image/upload/v1577871888/zaf6e7dlhir08vdjit5u.jpg"
          />
        </div>

        <h1>השירותים שלנו</h1>
        <ServicesList ourServices={ourServices} />
      </section>
    );
  }
}

export default HomePage;
