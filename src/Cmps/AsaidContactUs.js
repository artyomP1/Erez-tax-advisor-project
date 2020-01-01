import React, { Component } from "react";
import { Link } from "react-router-dom";

class AsaidContactUs extends React.Component {

    state = {
        isOpenContactUs: false,
    };

    getOpenContactUs = () => {
        this.setState({ isOpenContactUs: !this.state.isOpenContactUs });
    };

    render() {
        let isOpenContactUs = this.state.isOpenContactUs;
        let className = this.state.isOpenContactUs ? 'offcanvas-aside offcanvas-aside-open' : 'offcanvas-aside';
        let button;
        if (!isOpenContactUs) {
            button = <i className="fa comment fa-comment" aria-hidden="true"></i>;
        } else {
            button = <i>X</i>;
        }
        return (
            <section>
                <div className="offcanvas-btn" onClick={this.getOpenContactUs}>
                    {button}
                </div>

                <div className={className}>
                    <section id="contact">
                        <h4>Contact Me</h4>
                        <form>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Subject</label>
                                <textarea className="form-control Subject" id="exampleFormControlTextarea1" rows="1" placeholder="Type subject here"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message Body</label>
                                <textarea className="form-control Message" id="exampleFormControlTextarea1" rows="5" placeholder="Type message text here"></textarea>
                            </div>
                            <div class="col-auto">
                                <button onclick="sendEmail()" type="button" className="btn btn-primary mb-2 pointer">Submit</button>
                            </div>
                        </form>
                    </section>

                </div> </section >
        );
    }
};

export default AsaidContactUs;