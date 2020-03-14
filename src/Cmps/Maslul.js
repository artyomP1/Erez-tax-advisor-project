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
                            <Card.Header>Easy</Card.Header>
                            <ListGroup className="maslul1" variant="flush">
                                <ListGroup.Item>הפקת חשבונית ירוקה און ליין ללא הגבלת מסמכים</ListGroup.Item>
                                <ListGroup.Item>סליקה בכרטיס אשראי במחירים זולים</ListGroup.Item>
                                <ListGroup.Item>
                                    ניהול דחות גבייה
                                   </ListGroup.Item>
                            </ListGroup>
                            <Card.Body id="des" >
                                <Card.Link className="price"> <span>רק</span> 59 ₪ (לא כולל מע"מ) לחודש</Card.Link>
                            </Card.Body>
                            <Card.Body id="maslul-link">
                                <Card.Link href="https://ez.finbot.co.il/hs-user/">לחודש ראשון ניסיון חינם לחצו כאן.</Card.Link>
                            </Card.Body>
                        </Card>

                        <Card style={{ backgroundColor: "#d1ecf1", height: "auto" }}>
                            <Card.Header>Business - <span>מתאים לעוסקים פטורים</span> </Card.Header>
                            <ListGroup className="maslul1" variant="flush">
                                <ListGroup.Item>הפקת חשבונית ירוקה און ליין ללא הגבלת מסמכים</ListGroup.Item>
                                <ListGroup.Item>סליקה בכרטיס אשראי במחירים זולים</ListGroup.Item>
                                <ListGroup.Item>
                                    ניהול דחות גבייה
                                   </ListGroup.Item>
                                <ListGroup.Item>
                                    צילום וקליטת חשבוניות הוצאה דרך המחשב וטלפון נייד
                                   </ListGroup.Item>
                                <ListGroup.Item>
                                    דו"ח רווח והפסד און ליין
                                   </ListGroup.Item>
                                <ListGroup.Item>
                                    חישוב פנסיה לפי חוק פנסיה לעצמאים                                   </ListGroup.Item>
                            </ListGroup>
                            <Card.Body id="des" >
                                <Card.Link className="price"> <span>רק</span>  79 ₪ לחודש (לא כולל מע"מ) </Card.Link>
                            </Card.Body>
                            <Card.Body id="maslul-link">
                                <Card.Link href="https://ez.finbot.co.il/hs-user/">לחודש ראשון ניסיון חינם לחצו כאן.</Card.Link>
                            </Card.Body>
                        </Card>

                        <Card style={{ backgroundColor: "#e2e3e5", height: "auto" }}>
                            <Card.Header>   Business Plus - <span>מתאים לעוסקים מורשים</span></Card.Header>
                            <ListGroup className="maslul1" variant="flush">
                                <ListGroup.Item>הפקת חשבונית ירוקה און ליין ללא הגבלת מסמכים</ListGroup.Item>
                                <ListGroup.Item>סליקה בכרטיס אשראי במחירים זולים</ListGroup.Item>
                                <ListGroup.Item>
                                    ניהול דחות גבייה
                                   </ListGroup.Item>
                                <ListGroup.Item>
                                    צילום וקליטת חשבוניות הוצאה דרך המחשב וטלפון נייד
                                   </ListGroup.Item>
                                <ListGroup.Item>
                                    דו"ח רווח והפסד און ליין
                                   </ListGroup.Item>
                                <ListGroup.Item>
                                    דיווח ותשלום לרשויות המס ( מס הכנסה, ביטוח לאומי ומע"מ)
                                                                      </ListGroup.Item>
                                <ListGroup.Item>
                                    מעקב אחרי תשלומים והתראה לפי התשלומים
                                                                      </ListGroup.Item>

                                <ListGroup.Item>
                                    חישוב פנסיה לפי חוק פנסיה לעצמאים                                   </ListGroup.Item>
                                <ListGroup.Item>
                                    אופציה לא כלולה חשבות שכר לעובדים
                                                                      </ListGroup.Item>
                            </ListGroup>
                            <Card.Body id="des" >
                                <Card.Link className="price"> <span>רק</span>  250 ₪ לחודש (לא כולל מע"מ) </Card.Link>
                            </Card.Body>
                            <Card.Body id="maslul-link">
                                <Card.Link href="https://ez.finbot.co.il/hs-user/">לחודש ראשון ניסיון חינם לחצו כאן.</Card.Link>
                            </Card.Body>
                        </Card>

                    </section>
                </div>

            </section>
        );
    }
}

export default Maslul;
