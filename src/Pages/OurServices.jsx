import React from "react";
import { connect } from "react-redux";
import ServicesList from "../modules/OurServices/ServicesList";
import OurServicesService from "../modules/OurServices/OurServices.Service";
import ContactUsForm from "../Cmps/ContactUsForm.jsx";
import { Link } from "react-router-dom";
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
        <div className="title-img">
          <img
            className="service-page-img"
            src="https://res.cloudinary.com/artyompogosov/image/upload/v1580399465/fu9ydzwlub0xfz9quogo.jpg"
          />
          <h1>שירותי המשרד</h1>
        </div>

        <ul className="ourService-container-cards">
          {ourServices.map(ourService => {
            return (
              <li key={ourService._id}>
                <Link to={`/service/${ourService._id}`}>
                  <div className="ourService-card">
                    <img
                      className="service-img"
                      src={ourService.imgPageUrl}
                      alt=""
                    />
                    <div className="ourService-details">
                      <h2> {ourService.name}</h2>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="form-service-page flex column">
          <h2>לייעוץ ראשוני ללא תשלום</h2>
          <h3> חייגו 052-603-6402 או השאירו פרטים ונחזור אליכם בהקדם </h3>
          <ContactUsForm />
        </div>
      </section>
    );
  }
}

export default OurServices;
