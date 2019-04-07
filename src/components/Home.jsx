import React, { Component, Fragment } from 'react';

import Header from './Header.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Clients from './Clients.jsx';
import Testimonials from './Testimonials.jsx';
import ContactForm from './ContactForm.jsx';
import Contact from './Contact.jsx';

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
