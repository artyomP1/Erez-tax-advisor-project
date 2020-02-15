import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import About from "./Pages/About.jsx";
import OurServices from "./Pages/OurServices.jsx";
import ProfessionalInfo from "./Pages/ProfessionalInfo.jsx";
import OurServiceDetails from "./Pages/OurServiceDetails.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import AsaidContactUs from "./Cmps/AsaidContactUs";
import Maslulim from "./Pages/Maslulim";
import Whatsapp from "./Cmps/Whatsapp";
import Header from "./Cmps/Header";
import Modal from "./Cmps/Modal.jsx";
import Footer from "./Cmps/Footer";
import "./Style/global.scss";
import ScrollToTop from './Cmps/ScrollToTop';
class App extends Component {
  render() {
    return (
      <div className="App">

        <AsaidContactUs />
        <Whatsapp />
        <header className="App-header">
          <Header />
        </header>
        <Modal />
        <ScrollToTop />
        <Switch className="main">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={OurServices} />
          <Route exact path="/service/:id" component={OurServiceDetails} />
          <Route exact path="/maslulim" component={Maslulim} />
          <Route exact path="/info" component={ProfessionalInfo} />
          <Route exact path="/contactUs" component={ContactUs} />
        </Switch>

        <section className="App-footer">
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;
