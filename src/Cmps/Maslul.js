import React from "react";
import { connect } from "react-redux";
import ContactUsForm from "../Cmps/ContactUsForm.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

class Maslul extends React.Component {
    render() {
        return (
            <section>
                <div>
                    <div className="services-article">
                        <div></div>
                        <h1>המסלולים שלנו</h1>
                        <div></div>
                    </div>

                    <section className="card-container flex space-around">
                        <Card style={{ backgroundColor: "#67C23A", height: "auto" }}>
                            <Card.Header>עוסק פטור</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>יעוץ ראשוני, הדרכה מקצועית</ListGroup.Item>
                                <ListGroup.Item>פתיחת תיקים.</ListGroup.Item>
                                <ListGroup.Item>
                                    מערכת הנהלת חשבונות ממוחשבת באפליקציה או במחשב
                </ListGroup.Item>
                                <ListGroup.Item>
                                    הפקת חשבוניות און ליין מכל מכשיר, בכל מקום ושליחה ללקוח במייל
                </ListGroup.Item>
                                <ListGroup.Item>
                                    סליקה בכרטיס אשראי במחירים מוזלים
                </ListGroup.Item>
                                <ListGroup.Item>ניהול דוחות גבייה.</ListGroup.Item>
                                <ListGroup.Item>
                                    צילום וקליטת חשבוניות הוצאה דרך הטלפון או המחשב ללא צורך בהגעה
                                    פיזית וחשש לאיבוד מסמכים.
                </ListGroup.Item>
                                <ListGroup.Item>דו"ח ורווח והפסד און ליין.</ListGroup.Item>
                                <ListGroup.Item>מעקב אחרי תשלומים לרשויות.</ListGroup.Item>
                                <ListGroup.Item>דיווח ותשלום לביטוח לאומי.</ListGroup.Item>
                                <ListGroup.Item>דיווח ותשלום למס הכנסה.</ListGroup.Item>
                                <ListGroup.Item>
                                    דיווח למע"מ פעם בשנה על המחזור לפי דרישת מע"מ.
                </ListGroup.Item>
                                <ListGroup.Item>תכנון מס.</ListGroup.Item>
                                <ListGroup.Item>
                                    חישוב פנסיה לפי חוק פנסיה לעצמאים.
                </ListGroup.Item>
                                <ListGroup.Item>הגשת דוחות שנתיים למס הכנסה.</ListGroup.Item>

                            </ListGroup>
                            <Card.Body id="des" >
                                <Card.Link>עלות השירות היא 150 ₪ (כולל מע"מ) לחודש</Card.Link>
                            </Card.Body>
                            <Card.Body id="maslul-link">
                                <Card.Link href="https://ez.finbot.co.il/hs-user/">לחודש ראשון ניסיון חינם לחצו כאן.</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ backgroundColor: "#409EFF" }}>
                            <Card.Header>עוסק מורשה</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>יעוץ ראשוני, הדרכה מקצועית</ListGroup.Item>
                                <ListGroup.Item>פתיחת תיקים.</ListGroup.Item>
                                <ListGroup.Item>
                                    מערכת הנהלת חשבונות ממוחשבת באפליקציה או במחשב
                </ListGroup.Item>
                                <ListGroup.Item>
                                    הפקת חשבוניות און ליין מכל מכשיר, בכל מקום ושליחה ללקוח במייל
                </ListGroup.Item>
                                <ListGroup.Item>
                                    סליקה בכרטיס אשראי במחירים מוזלים
                </ListGroup.Item>
                                <ListGroup.Item>ניהול דוחות גבייה.</ListGroup.Item>
                                <ListGroup.Item>
                                    צילום וקליטת חשבוניות הוצאה דרך הטלפון או המחשב ללא צורך בהגעה
                                    פיזית וחשש לאיבוד מסמכים.
                </ListGroup.Item>
                                <ListGroup.Item>דו"ח ורווח והפסד און ליין.</ListGroup.Item>
                                <ListGroup.Item>דיווח ותשלומים לביטוח לאומי.</ListGroup.Item>

                                <ListGroup.Item>דיווח ותשלום למס הכנסה.</ListGroup.Item>
                                <ListGroup.Item>דיווח ותשלומים למע"מ</ListGroup.Item>
                                <ListGroup.Item>
                                    מעקב און ליין אחרי תשלומים והתראה לפני התשלום בפועל.
                </ListGroup.Item>
                                <ListGroup.Item>תכנון מס.</ListGroup.Item>
                                <ListGroup.Item>
                                    חישוב פנסיה לפי חוק פנסיה לעצמאים.
                </ListGroup.Item>
                                <ListGroup.Item>חשבות שכר לעובדים.</ListGroup.Item>
                                <ListGroup.Item>הגשת דוחות שנתיים למס הכנסה.</ListGroup.Item>
                            </ListGroup>

                            <Card.Body id="des">
                                <Card.Link >
                                    עלות השירות החל מ 400 ₪ לחודש (לא כולל מע"מ)
                </Card.Link>
                            </Card.Body>
                            <Card.Body id="maslul-link">
                                <Card.Link href="https://ez.finbot.co.il/hs-user/">
                                    לחודש ראשון ניסיון חינם והצעת מחיר מפורטת, לחצו כאן.
                </Card.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ backgroundColor: "#E6A23C" }}>
                            <Card.Header>חברה בע"מ</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>הדרכה מקצועית</ListGroup.Item>
                                <ListGroup.Item>הנהלת חשבונות עד מאזן. </ListGroup.Item>
                                <ListGroup.Item>
                                    הפקת חשבוניות און ליין מכל מכשיר, בכל מקום ושליחה ללקוח במייל
                </ListGroup.Item>
                                <ListGroup.Item>
                                    סליקה בכרטיס אשראי במחירים מוזלים
                </ListGroup.Item>
                                <ListGroup.Item>ניהול דוחות גבייה.</ListGroup.Item>
                                <ListGroup.Item>
                                    צילום וקליטת חשבוניות הוצאה דרך הטלפון או המחשב ללא צורך בהגעה
                                    פיזית וחשש לאיבוד מסמכים.
                </ListGroup.Item>
                                <ListGroup.Item>העברת קבצים במחשב. </ListGroup.Item>
                                <ListGroup.Item>
                                    יצוא או יבוא תנועות יומן בקובץ מותאם לתוכנות הנה"ח אחרות.
                </ListGroup.Item>
                                <ListGroup.Item>
                                    דיווח ותשלומים לרשויות המס (ביטוח לאומי, מס הכנסה ומע"מ).
                </ListGroup.Item>

                                <ListGroup.Item>
                                    מעקב און ליין אחרי תשלומים והתראה לפני התשלום בפועל.
                </ListGroup.Item>
                                <ListGroup.Item>דיווח ותשלומים למע"מ</ListGroup.Item>
                                <ListGroup.Item>חשבות שכר לעובדים.</ListGroup.Item>
                                <ListGroup.Item>תכנון מס.</ListGroup.Item>
                                <ListGroup.Item>
                                    אפשרות להדפסת שיקים או תשלום בהעברה לספקים לפי הסכמים.
                </ListGroup.Item>
                                <ListGroup.Item>התאמות ספקים.</ListGroup.Item>

                                <ListGroup.Item>התאמות כרטיסי אשראי.</ListGroup.Item>

                                <ListGroup.Item>התאמות בנקים.</ListGroup.Item>

                                <ListGroup.Item>בקרה והתראות על דברים חריגים. </ListGroup.Item>

                                <ListGroup.Item>סגירת מאזן והעברתו לביקורת.</ListGroup.Item>
                            </ListGroup>
                            <Card.Body id="des">
                                <Card.Link >
                                    עלות השירות החל מ- 1,000 ₪ בחודש (לא כולל מע"מ)
                </Card.Link>
                            </Card.Body>
                            <Card.Body id="maslul-link">
                                <Card.Link href="/contactUs">
                                    לייעוץ ראשוני ללא עלות וקבלת הצעת מחיר מפוטרת לחצו כאן.
                </Card.Link>
                            </Card.Body>
                        </Card>
                    </section>
                </div>

            </section>
        );
    }
}

export default Maslul;
