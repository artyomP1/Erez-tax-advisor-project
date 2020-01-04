import React, { Component } from "react";
import OurServicesService from "../modules/OurServices/OurServices.Service";
import { Link } from "react-router-dom";
import { loadCurrService } from "../modules/OurServices/actions";
import { connect } from "react-redux";

class OurServiceDetails extends Component {
  state = {
    ourService: {}
  };
  async componentDidMount() {
    const { _id } = this.props.match.params;
    await this.props.loadCurrService(_id);
  }

  render() {
    const { ourService } = this.props;
    if (ourService)
      return (
        <section>
          <h1>{ourService.name}</h1>
        </section>
      );
    else
      return (
        <div>
          <h1>No service was found</h1>
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    ourService: state.OurService.currOurService
  };
};

const mapDispatchToProps = {
  loadCurrService
};

export default connect(mapStateToProps, mapDispatchToProps)(OurServiceDetails);
