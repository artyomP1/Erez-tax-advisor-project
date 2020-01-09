import React from "react";

import { Link } from "react-router-dom";

export default function Header() {
    return (
        <section className="footer flex column space-around">
            <section className="footer-details flex space-between">
                <div className="flex column space-between">
                    <div className="office-details flex column align-start justify-center">
                        <h5> כתובתנו: סטרומה 5, רמת גן 5255205</h5>
                        <h5>טלפון: 052-603-6402 </h5>
                        <h5> דו"אל: erez.tax@gmail.com </h5>
                    </div>

                </div>
                <div className="website-map flex  pointer">
                    <div className="flex column pointer">
                        <Link to="/">ראשי</Link>
                        <Link to="/about">אודות</Link>
                        <Link to="/contactUs">צור קשר</Link>
                    </div>
                    <div className="flex column pointer">
                        <Link to="/service/5a56640269f443a5d64b32ca">החזרי מס </Link>
                        <Link to="/service/5a5664025f6ae9aa24a99fde">הצהרות הון </Link>
                        <Link to="/service/5a56640252d6acddd183d319">הנהלת חשבונות </Link>
                        <Link to="/service/5a1110252d6acddd183d319">תכנון מס </Link>
                        <Link to="/service/5a566402ed1cf3412345674d">חשבות שכר</Link>
                        <Link to="/service/5a566402ed1cf349f0b47b4d">דוחות שנתיים</Link>
                        <Link to="/service/5a566402ed1cf349f0b4123"> גיוס הון</Link>
                    </div>
                </div>
                <div className="flex align-start">
                    <img className="footer-logo" src="https://res.cloudinary.com/artyompogosov/image/upload/v1578217201/lh8zckfvjyil7jeqz1yo.png" />
                </div>


            </section>
            <div className="flex space-between">
                <h5>זכויות יוצרים © 2019 ארז צור - יועץ מס ופיננסים </h5>
                <h5>האתר פותח על ידי ארטיום פוגוסוב </h5>
            </div>
        </section >
    );
};