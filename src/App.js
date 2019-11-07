import React, { Component } from 'react';
// import CacheBuster from "./CacheBuster";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import withTracker from "./lib/withTracker";
import ScrollToTopRoute from "./lib/ScrollToTopRoute";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Rates from "./components/Rates";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import PortfolioDetail from "./components/Portfolio/PortfolioDetail";
import Blog from "./components/Blog";
import BlogDetail from "./components/Blog/BlogDetail";
import Contact from "./components/Contact";

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
                    <>
                        <Router basename={process.env.PUBLIC_URL}>
                            <Navigation logoTitle="Hypermix" />
                            <main>
                                <Switch>
                                    <ScrollToTopRoute path="/portfolio/:portfolioDetail" component={withTracker(PortfolioDetail)}/>
                                    <ScrollToTopRoute path="/portfolio" component={withTracker(Portfolio)} />
                                    <ScrollToTopRoute path="/rates" component={withTracker(Rates)} />
                                    <ScrollToTopRoute path="/resume" component={withTracker(Resume)} />
                                    <ScrollToTopRoute path="/blog/:blog" component={withTracker(BlogDetail)}/>
                                    <ScrollToTopRoute path="/blog" component={withTracker(Blog)}/>
                                    <ScrollToTopRoute path="/contact" component={withTracker(Contact)}/>
                                    <ScrollToTopRoute path="/" component={withTracker(Home)} />
                                    <ScrollToTopRoute path="/*" component={withTracker(Home)} />
                                </Switch>
                            </main>
                        </Router>
                    </>
                )
        //     }}
        //     </CacheBuster>
        // );
    }
}

export default App;
