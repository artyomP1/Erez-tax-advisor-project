import React from "react";
import { connect } from "react-redux";
import Map from "../Cmps/Map";
import ContactUsForm from "../Cmps/ContactUsForm";

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
          <div>
            <h3>פרטי ההתקשרות</h3>
            <p>כתובת המשרד: סטרומה 5, רמת גן 5255205 </p>
            <p>נייד: 052-603-6402</p>
            <p>דוא"ל: erez.tax@gmail.com </p>
          </div>
          <div>
            <h3>מלאו את הטופס ונחזור אליך בהקדם</h3>
            <ContactUsForm />
          </div>
          {/* <form
            className="asaid-form align-center flex column"
            onSubmit={this.handleSubmit}
            action="https://formsubmit.co/artyomp@outlook.com"
            method="POST"
          >
            <h3>מלאו את הטופס ונחזור אליך בהקדם</h3>
            <div className="flex column space-between">
              <input
                name="שם"
                placeholder="* שם מלא"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <input
                name="טלפון"
                placeholder="* טלפון"
                value={this.state.tel}
                onChange={this.handleChange}
              />
              <input
                name="מייל"
                placeholder="* מייל"
                type="email"
                value={this.state.tel}
                onChange={this.handleChange}
              />

              <select
                name="נושא"
                // multiple="multiple"
                style={{ width: "100%" }}
                placeholder="בחר נושא"

                // onChange={handleChange}
              >
                <option value="הנהלת חשבונות">הנהלת חשבונות</option>
                <option value="חשבות שכר">חשבות שכר</option>
                <option value="הצהרת הון">הצהרות הון</option>
                <option value="החזרי מס">החזרי מס</option>
                <option value="תכנון מס">תכנון מס</option>
                <option value="גיוס הון">גיוס הון</option>
                <option value="דוחות שנתיים">דוחות שנתיים</option>
              </select>
              <textarea
                name="הודעה"
                placeholder="תוכן הפנייה"
                rows="6"
                cols="50"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </div>
            <input className="send-ms-btn" type="submit" value="שלח" />
          </form> */}
        </div>
        <div className="map-container flex">
          <Map className="map flex" />
        </div>
      </section>
    );
  }
}

export default ContactUs;
