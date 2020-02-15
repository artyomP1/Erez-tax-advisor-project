import React from "react";
import { connect } from "react-redux";
import ContactUsForm from "../Cmps/ContactUsForm.jsx";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

class About extends React.Component {
  render() {
    return (
      <section>
        <div className="title-img">
          <img
            className="service-page-img"
            src="https://res.cloudinary.com/artyompogosov/image/upload/v1580580623/r1ookjckv1ngbkifrkof.jpg"
          />
          <h1>אודות</h1>
        </div>
        <section className="about-container flex">
          <div className="profile-pic">
            <img src="https://res.cloudinary.com/artyompogosov/image/upload/v1575361264/fxn28zgehwwdnkjo9kb5.jpg" />
          </div>
          <div className="about-office">
            <p>
              ארז צור, מנהל הפירמה ומייסד. יועץ מס מוסמך, בעל תואר במנהל עסקים
              עם התמחות במימון וחבר בלשכת יועצי המס. בעל תעודת חשב שכר בכיר מטעם
              לשכת רואי החשבון, ותעודת מנהל חשבונות מטעם משרד העבודה והרווחה.
              בעבר שימש כסמנכ"ל כספים במספר חברות עסקיות, וכיום משמש כמרצה בתחום
              המיסים בפורומים שונים. בעל ניסיון של למעלה מ-10 שנים בתחום ייעוץ
              המס וחשבונאות, רקע נרחב בניהול כספים, ובליווי עצמאים וחברות מול
              רשויות המס.
            </p>
            <p>
              משדרנו מספק שירות אישי אמין ומקצועי, ומאפשר לך ראש שקט באמצעות
              מעטפת מקצועית מקיפה וטכנולוגית שתפטל עבורך בכל הנדרש מול רשויות
              המס. המשרד מתמחה בייעוץ מס, הנהלת חשבונות וחשבות שכר לחברות
              ועצמאים, החזרי מס לשכירים וניהול כספים.
            </p>
          </div>
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

export default About;
