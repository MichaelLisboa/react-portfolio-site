import React, { Component, Fragment } from 'react';

import Header from './Header';
import About from './About';
import Skills from './Skills';
import Clients from './Clients';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';
import Contact from './Contact';

class Home extends Component {
    render () {
        return (
            <Fragment>
                <Header />
                <About />
                <Skills skillsTitle="Some of the Things I Do" />
                <Clients clientsTitle="Great Brands I've Worked With" />
                <Testimonials testimonialsTitle="Nice things people have said" />
                <ContactForm />
                <Contact />
            </Fragment>
        );
    }
}

export default Home;
