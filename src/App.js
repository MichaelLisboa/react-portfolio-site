import React, { Component, Fragment } from 'react';
import CacheBuster from "./CacheBuster";
// import NavRoutes from './components/NavRoutes.jsx';

import { BrowserRouter as Router, Switch } from "react-router-dom";
import withTracker from "./components/withTracker.jsx";
import ScrollToTopRoute from "./lib/ScrollToTopRoute";
import Navigation from "./components/Navigation.jsx";
import Home from "./components/Home.jsx";
import Rates from "./components/Rates.jsx";
import Resume from "./components/Resume.jsx";
import Portfolio from "./components/Portfolio.jsx";
import PortfolioDetail from "./components/PortfolioDetail.jsx";
import Blog from "./components/Blog.jsx";
import BlogPost from "./components/BlogPost.jsx";
import ContactForm from "./components/ContactForm.jsx";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.connecToServer = this.connecToServer.bind(this);
    }

    connecToServer() {
        fetch('/');
    }

    componentDidMount() {
        this.connecToServer();
    }

    render() {
        // return (
        //     <CacheBuster>
        //         {({ loading, isLatestVersion, refreshCacheAndReload }) => {
        //             if (loading) return null;
        //             if (!loading && !isLatestVersion) {
        //                 refreshCacheAndReload();
        //             }

                return (
                    <Fragment>
                        <Router basename={process.env.PUBLIC_URL}>
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
                )
        //     }}
        //     </CacheBuster>
        // );
    }
}

export default App;
