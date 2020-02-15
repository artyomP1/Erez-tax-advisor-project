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
                  url="https://www.facebook.com/pogosov"
                />
                <SocialIcon
                  className="social linkedin"
                  url="https://www.linkedin.com/in/artyom-p"
                />
                <SocialIcon
                  className="social whatsapp"
                  url="https://api.whatsapp.com/send?phone=972526036402&text=%20 שלום, אשמח לקבל ייעוץ"
                />
              </div>
            </div>
          </div>
          <div>
            <h3>מלאו את הטופס ונחזור אליך בהקדם</h3>
            <ContactUsForm />
          </div>
        </div>
        <div className="map-container flex">
          <Map className="map flex" />
        </div>
      </section>
    );
  }
}

export default ContactUs;
