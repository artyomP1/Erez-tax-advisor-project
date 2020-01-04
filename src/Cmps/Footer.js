import React from "react";
import Map from "./Map";


export default function Header() {
    return (
        <section className="footer flex column space-around">
            <section className="footer-details flex space-between">
                <div className="flex  align-center">
                    <h1>Logo</h1>
                </div>
                <div className="flex column space-between">
                    <div className="flex column align-center justify-center">
                        <h5>.5255205 ,כתובתנו: סטרומה 5, רמת גן </h5>
                        <h5>טלפון: 052-603-6402 </h5>
                        <h5>erez.tax@gmail.com :מייל</h5>
                    </div>
                    <div>
                        <ul className="flex pointer">
                            <li> אודות</li>
                            <li>| שירותים </li>
                            <li>| מידע מקצועי </li>
                            <li>| צור קשר </li>
                        </ul>
                    </div>
                </div>
                <Map />
            </section>
            <div className="flex space-between">
                <h5>זכויות יוצרים © 2019 ארז צור - יועץ מס ופיננסים </h5>
                <h5>האתר פותח על ידי ארטיום פוגוסוב </h5>
            </div>
        </section >
    );
}