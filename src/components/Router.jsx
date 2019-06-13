import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import withTracker from "./withTracker.jsx";
import ScrollToTopRoute from "../lib/ScrollToTopRoute";
import Navigation from "./Navigation.jsx";
import Home from "./Home.jsx";
import Rates from "./Rates.jsx";
import Resume from "./Resume.jsx";
import Portfolio from "./Portfolio.jsx";
import PortfolioDetail from "./PortfolioDetail.jsx";
import Blog from "./Blog.jsx";
import BlogPost from "./BlogPost.jsx";
import ContactForm from "./ContactForm.jsx";

const NavRoutes = () => (
    <Fragment>
        <Router>
            <Navigation logoTitle="Hypermix" />
            <main>
                <Switch>
                    <ScrollToTopRoute path="/portfolio/:portfolioDetail" component={withTracker(PortfolioDetail)}/>
                    <ScrollToTopRoute path="/portfolio" component={withTracker(Portfolio)} />
                    <ScrollToTopRoute path="/rates" component={withTracker(Rates)} />
                    <ScrollToTopRoute path="/resume" component={withTracker(Resume)} />
                    <ScrollToTopRoute path="/blog/:blog" component={withTracker(BlogPost)}/>
                    <ScrollToTopRoute path="/blog" component={withTracker(Blog)}/>
                    <ScrollToTopRoute path="/contact" component={withTracker(ContactForm)}/>
                    <ScrollToTopRoute path="/" component={withTracker(Home)} />

                    <ScrollToTopRoute path="/*" component={withTracker(Home)} />
                </Switch>
            </main>
        </Router>
    </Fragment>
);

export default NavRoutes;
