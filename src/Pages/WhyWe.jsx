import React from "react";
import { connect } from "react-redux";
import ContactUsForm from "../Cmps/ContactUsForm.jsx";

class About extends React.Component {
  render() {
    return (
      <section>
        <div className="title-img">
          <img
            className="service-page-img"
            src="https://res.cloudinary.com/artyompogosov/image/upload/v1583604650/rxwjpxhqz4i6hdmwdzjn.jpg"
          />
          <h1>למה איתנו?</h1>
        </div>
        <section className="about-container flex">
          <div className="why-we">
            <p className="whywe-main-p">
              <span> החזון</span> שלנו הוא לאפשר לעסקים שקט נפשי מול רשויות המס.
              אנחנו עושים את כל התליך הבירוקרטי, מקיימים את ההתנהלות השוטפת,
              ומספקים לך שירות מקיף מול רשות המיס. בכך אנחנו חוסכים לך הרבה זמן
              שאותו תוכל להשקיע בעסק שלך מבלי לשבור את הראש בבירוקרטיה מיותרת.
            </p>
            <div>
              {/* <h1>אצלנו תקבל:</h1> */}
              <ul>
                <li>
                  <h3>
                    מערכת הנהלת חשבונות ממוחשבת <span>.</span>
                  </h3>
                  <p>
                    באמצעות הצטרפות תקבל גישה למערכת הנהלת חשבונות ממוחשבת קלה
                    ופשוטה שממנה תוכל להפיק חשבוניות ללקוחות שלך מכל מקום, לסלוק
                    בכרטיס אשראי, לצלם הוצאות מהטלפון או כקובץ מהמחשב במקום לרוץ
                    אלינו כל חודש ולשכוח מחשבוניות, לראות דו"ח רווח והפסד בכל
                    רגע נתון ותשלומים צפויים לרשויות.
                  </p>
                </li>
                <li>
                  <h3>
                    שירות אישי<span>.</span>
                  </h3>
                  <p>
                    שירות אישי אמין ומקצועי, מאפשר לך ראש שקט באמצעות מעטפת
                    מקצועית מקיפה וטכנולוגית שתפטל עבורך בכל הנדרש מול רשויות
                    המס.
                  </p>
                </li>
                <li>
                  <h3>
                    ניסיון<span>.</span>
                  </h3>
                  <p>
                    ניסיון של למעלה מ-10 שנים בתחום ייעוץ המס וחשבונאות, רקע
                    נרחב בניהול כספים, ובליווי עצמאים וחברות מול רשויות המס.
                  </p>
                </li>
              </ul>
            </div>
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
