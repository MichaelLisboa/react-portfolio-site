import React, { Component, Fragment } from "react";

import Hero from "../Hero";
import About from "../About";
import Skills from "../Skills";
import Clients from "../Clients";
import Testimonials from "../Testimonials";
import Contact from "../Contact";
import Footer from "../Footer";

class Home extends Component {
    render () {
        return (
            <Fragment>
                <Hero />
                <About />
                <Skills />
                <Clients />
                <Testimonials />
                <Contact />
                <Footer />
            </Fragment>
        );
    }
}

export default Home;
