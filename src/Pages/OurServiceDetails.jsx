import React, { Component } from "react";
// import OurServicesService from "../modules/OurServices/OurServices.Service";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import { loadCurrService } from "../modules/OurServices/actions";
import { connect } from "react-redux";
import ContactUsForm from "../Cmps/ContactUsForm.jsx";

class OurServiceDetails extends Component {
  state = {
    ourService: {}
  };
  async componentDidMount() {
    const id = await this.props.match.params;
    await this.props.loadCurrService(id.id);
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.getNewService();
    });
  }
  // componentWillUnmount() {
  //   this.unlisten();
  // }

  async getNewService() {
    const id = await this.props.match.params;
    await this.props.loadCurrService(id.id);
  }

  render() {
    const { ourService } = this.props;

    if (ourService)
      return (
        <section>
          <div className="title-img">
            <img className="service-page-img" src={ourService.imgPageUrl} />
            <h1>{ourService.name}</h1>
          </div>
          {/* <h2 className="page-title">{ourService.name}-</h2> */}
          <section className="ourServicePage">
            {ourService.text.mainTxt.map((txt, idx) => {
              return <p key={idx}>{txt}.</p>;
            })}

            {ourService.text.bodyTxt.map((txt, idx) => {
              return (
                <div key={idx}>
                  <p>{txt.header}</p>
                  <ul>
                    {txt.body.map((txt, idx) => {
                      return (
                        <li className="info-service-list" key={idx}>
                          {txt}
                        </li>
                      );
                    })}
                  </ul>
                  <p>{txt.moreTxt}</p>
                </div>
              );
            })}
          </section>
          <div className="form-service-page flex column">
            <h2>רוצים לשמוע עוד על {ourService.name}?</h2>
            <h3> חייגו 052-603-6402 או השאירו פרטים ונחזור אליכם בהקדם </h3>
            <ContactUsForm />
          </div>
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

// componentWillMount() {
//   const { params, watch } = this.props;

//   this.dispatch(fetchUser(params.id));
//   watch('params.id', (newUserId) => {
//     this.dispatch(fetchUser(newUserId));
//   });
// }

const mapStateToProps = state => {
  return {
    ourService: state.ourService.currOurService
  };
};

const mapDispatchToProps = {
  loadCurrService
};

export default connect(mapStateToProps, mapDispatchToProps)(OurServiceDetails);
