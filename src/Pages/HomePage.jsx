import React from "react";
import { connect } from "react-redux";
import ServicesList from "../modules/OurServices/ServicesList";
import ContactUsForm from "../Cmps/ContactUsForm.jsx";
import OurServicesService from "../modules/OurServices/OurServices.Service";
import { Link } from "react-router-dom";
// import Carousel from "../Cmps/Carousel";

import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Maslul from "../Cmps/Maslul";
// import { Carousel } from "antd";
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
        <div className="main-img-home">
          <img
            className="logo-main"
            src="https://res.cloudinary.com/artyompogosov/image/upload/v1580576748/rfyuvjhys2ujsqvzozfy.png"
          />
          <Carousel fade="true">
            <Carousel.Item>
              <img
                className="img-carousel"
                src="https://res.cloudinary.com/artyompogosov/image/upload/v1581767554/aoobsr5n5qld6rqr4vzz.jpg"
                alt="מלווים אותך להצלחה"
              />

              <Carousel.Caption>
                <h1>משרד ארז צור</h1>
                <p>מלווים אותך להצלחה</p>
                <Link to="/contactUs">
                  {" "}
                  <button>לתיאום פגישת ייעוץ</button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img-carousel"
                src="https://res.cloudinary.com/artyompogosov/image/upload/v1581767578/rejyourmupwnqrtuydrg.jpg"
                alt="נותנים לך ראש שקט"
              />

              <Carousel.Caption>
                <h1>משרד ארז צור</h1>
                <p>נותנים לך ראש שקט</p>
                <Link to="/contactUs">
                  {" "}
                  <button>לתיאום פגישת ייעוץ</button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img-carousel"
                src="https://res.cloudinary.com/artyompogosov/image/upload/v1581767585/fp6pr0tvrazlvepx4b4v.jpg"
                alt="איתך כל הדרך לפסגה"
              />
              <Carousel.Caption>
                <h1>משרד ארז צור</h1>
                <p>איתך כל הדרך לפסגה</p>
                <Link to="/contactUs">
                  {" "}
                  <button>לתיאום פגישת ייעוץ</button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="about-erez flex column justify-center align-center">
          <h2 className="">משרד ארז צור -ייעוץ מס ופיננסים</h2>
          <p>
            משרד ייעוץ מס ופיננסים נותן שירותי הנהלת חשבונות, חשבות שכר וייעוץ
            מס כבר 15 שנה, המשרד נותן שירותים לחברות, עצמאים ושכירים תוך הקפדה
            על-
          </p>
          <ul className="top-serveice flex">
            <li>
              <div className="flex column align-center">
                <i className="fa fa-certificate"></i>
                <span>מקצועיות</span>
              </div>
            </li>
            <li>
              {" "}
              <div className="flex column align-center">
                <i className="fa fa-handshake-o"></i>
                <span>שירות אישי</span>{" "}
              </div>
            </li>
            <li>
              {" "}
              <div className="flex column align-center">
                {" "}
                <i className="fa fa-hourglass-start"></i>
                <span>זמינות</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="services-list">
          <div className="services-article">
            <div></div>
            <h1>שירותי המשרד</h1>
            <div></div>
          </div>
          <ServicesList ourServices={ourServices} />
        </div>
        <section className="main-page-maslulim">
          <Maslul />
        </section>
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

export default HomePage;
