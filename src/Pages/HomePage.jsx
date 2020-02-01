import React from "react";
import { connect } from "react-redux";
import ServicesList from "../modules/OurServices/ServicesList";
import ContactUsForm from "../Cmps/ContactUsForm.jsx";
import OurServicesService from "../modules/OurServices/OurServices.Service";
import { Carousel } from "antd";
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
            className="main-img"
            src="https://res.cloudinary.com/artyompogosov/image/upload/v1580576871/g88lx42h9qqwlzefwzfo.jpg"
          />
          <img
            className="logo-main"
            src="https://res.cloudinary.com/artyompogosov/image/upload/v1580577361/qmm05ijrwrd4lyuwugsm.png"
          />
          {/* <div className="logo-main">
            משרד ארז צור - הנהלת חשבונות וייעוץ מס
          </div> */}
          <img
            className="logo-main"
            src="https://res.cloudinary.com/artyompogosov/image/upload/v1580576748/rfyuvjhys2ujsqvzozfy.png"
          />
          {/* <Carousel autoplay>
            <div>
              <img
                className="img-carousel"
                src="https://res.cloudinary.com/artyompogosov/image/upload/v1578156229/pkwxnjnca3ozf7rgkkpt.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="img-carousel"
                src="https://res.cloudinary.com/artyompogosov/image/upload/v1578156840/poys6igemn36h8achd8x.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="img-carousel"
                src="https://res.cloudinary.com/artyompogosov/image/upload/v1578156292/saswokwfqyboapxhd7ad.jpg"
                alt=""
              />
            </div>
          </Carousel> */}
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
                <i className="fa fa-file-image-o"></i>
                <span>שקיפות</span>
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
          <h1>שירותי המשרד</h1>
          <ServicesList ourServices={ourServices} />
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

export default HomePage;
