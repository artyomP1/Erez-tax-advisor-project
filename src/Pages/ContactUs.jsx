import React from "react";
import { connect } from "react-redux";
import Map from "../Cmps/Map";
import ContactUsForm from "../Cmps/ContactUsForm";
import { SocialIcon } from "react-social-icons";
class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tel: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <section>
        <img
          className="contact-img"
          src="https://res.cloudinary.com/artyompogosov/image/upload/v1578227821/kovad6bxsxugwfwtryhl.jpg"
        />

        <div className="contact-container-page flex space-around">
          <div className="contact-details">
            <h3>פרטי ההתקשרות</h3>
            <p>כתובת המשרד: סטרומה 5, רמת גן 5255205 </p>
            <p>נייד: 052-603-6402</p>
            <p>דוא"ל: erez.tax@gmail.com </p>
            <div>
              <div className="social-icons flex">
                <SocialIcon
                  className="social facebook"
                  url="https://www.facebook.com/%D7%90%D7%A8%D7%96-%D7%A6%D7%95%D7%A8-%D7%94%D7%A0%D7%94%D7%9C%D7%AA-%D7%97%D7%A9%D7%91%D7%95%D7%A0%D7%95%D7%AA-%D7%97%D7%A9%D7%91%D7%95%D7%AA-%D7%A9%D7%9B%D7%A8-%D7%95%D7%99%D7%A2%D7%95%D7%A5-%D7%9E%D7%A1-106688874164468/"
                />
                <SocialIcon
                  className="social linkedin"
                  url="https://www.linkedin.com/in/erez-zur-0bba0a188/"
                />
                <SocialIcon
                  className="social whatsapp"
                  url="https://api.whatsapp.com/send?phone=972526036402&text=%20 שלום, אשמח לקבל ייעוץ"
                />
              </div>
            </div>
          </div>
          <div className="map-container flex">
            <Map className="map flex" />
          </div>
        </div>
        <div className="contactUs-form">
          <h3>מלאו את הטופס ונחזור אליך בהקדם</h3>
          <ContactUsForm />
        </div>
      </section>
    );
  }
}

export default ContactUs;
