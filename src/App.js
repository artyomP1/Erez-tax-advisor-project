import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import About from "./Pages/About.jsx";
import OurServices from "./Pages/OurServices.jsx";
import OurServiceDetails from "./Pages/OurServiceDetails.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import AsaidContactUs from "./Cmps/AsaidContactUs";
import Header from "./Cmps/Header";
import Footer from "./Cmps/Footer";
import "./Style/global.scss";

class App extends Component {
  render() {
    return (
      <div className="App">

        <AsaidContactUs />
        <header className="App-header">
          <Header />
        </header>
        <Switch className="main">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/ourServices" component={OurServices} />
          <Route exact path="/ourServices/:id" component={OurServiceDetails} />
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
