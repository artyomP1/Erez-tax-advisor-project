import React from "react";
import { connect } from "react-redux";
import ServicesList from "../modules/OurServices/ServicesList";
import OurServicesService from "../modules/OurServices/OurServices.Service";

class OurServices extends React.Component {
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
        <h1>השירותים שלנו</h1>
        <ServicesList ourServices={ourServices} />
      </section>
    );
  }
}

export default OurServices;
