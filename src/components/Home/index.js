import React from "react";
import useIsIOS from "../Hooks/useIsIOS";

import Hero from "../Hero";
import About from "../About";
import Skills from "../Skills";
import Clients from "../Clients";
import Testimonials from "../Testimonials";
import Contact from "../Contact";
import {InstallPWA} from "../InstallPWA";

const Home = props => {
    const { isIPhone, isIPad, isIOS, isSafari, prompt } = useIsIOS();
    return (
        <>
            <About />
            <Hero />
            <Skills />
            <Clients />
            <Testimonials />
            <Contact />
            {prompt && <InstallPWA />}
        </>
    )
}
export default Home;
