import React, { Component } from "react";

import Hero from "../Hero";
import About from "../About";
import Skills from "../Skills";
import Clients from "../Clients";
import Testimonials from "../Testimonials";
import Contact from "../Contact";
import Footer from "../Footer";

const Home = () =>
    <>
        <About />
        <Hero />
        <Skills />
        <Clients />
        <Testimonials />
        <Contact />
        <Footer />
    </>

export default Home;
