import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/astro-logo.svg';
import '../css/Navigation.css';

const LogoImage = () => (
    <div className="uk-navbar-center uk-hidden@s">
        <NavLink
            className="uk-navbar-item uk-logo"
            to={'/'}>
            <img src={logo} width="60px" alt="Phoenix Logo" data-uk-image />
        </NavLink>
    </div>
);

class Navigation extends Component {

    constructor (props) {
        super(props);
        console.log("PROPS", this.props)
    }

    render () {
        return (
            <Fragment>
                <div className="navbar-container" data-uk-sticky>
                    <nav className="uk-navbar-container" data-uk-navbar>
                        <LogoImage />
                        <div className="uk-navbar-left uk-margin-medium-left uk-visible@s">
                            <NavLink
                                activeClassName="hide-home-icon"
                                className="home-icon uk-link-muted uk-link-reset"
                                exact to={'/'}>
                                <i data-uk-icon="icon: arrow-left; ratio: 0.95;" />
                                <i data-uk-icon="icon: home; ratio: 0.75;" />
                            </NavLink>
                        </div>
                        <div className="uk-navbar-center uk-margin-medium-right uk-visible@s">
                            <ul className="uk-navbar-nav">
                                <li>
                                    <NavLink activeClassName="uk-active" exact to={'/portfolio'}>
                                        <span data-uk-icon="icon: grid; ratio: 0.75" /> &nbsp;Work
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="uk-active" exact to={'/rates'}>
                                        <span data-uk-icon="icon: bolt; ratio: 0.75" />Rates
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="uk-navbar-item uk-logo uk-visible@s"
                                        to={'/'}>
                                        <img src={logo} width="55px" alt="Astro logo" data-uk-image />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="uk-active" exact to={'/resume'}>
                                        <span data-uk-icon="icon: list; ratio: 0.75" /> &nbsp;Resume
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="uk-active" exact to={'/blog'}>
                                        <span data-uk-icon="icon: future; ratio: 0.75" /> &nbsp;Waste
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="top-nav-overlay uk-navbar-left uk-hidden@s">
                            <a className="uk-navbar-toggle" href="#offcanvas" data-uk-toggle="target: #offcanvas">
                                <span className="uk-float-left" data-uk-icon="icon: menu; ratio: 0.8" />
                                <small className="uk-float-left">&nbsp;MENU</small>
                            </a>
                        </div>
                    </nav>
                </div>
                <div id="offcanvas" data-uk-offcanvas="flip: false; mode: push; overlay: true">
                    <div className="uk-offcanvas-bar uk-flex uk-flex-column
                        uk-offcanvas-bar-animation uk-offcanvas-slide">
                        <ul className="uk-nav uk-margin-auto-left uk-margin-auto-right
                            uk-margin-auto-vertical uk-nav-parent-icon" data-uk-nav>
                            <li>
                                <NavLink activeClassName="uk-active" exact data-uk-toggle="target: #offcanvas" to={'/'}>
                                    <i data-uk-icon="icon: hashtag; ratio: 1.5;" /> Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="uk-active" exact data-uk-toggle="target: #offcanvas" to={'/portfolio'}>
                                    <i data-uk-icon="icon: grid; ratio: 1.5;" /> Portfolio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="uk-active" exact data-uk-toggle="target: #offcanvas" to={'/rates'}>
                                    <i data-uk-icon="icon: bolt; ratio: 1.5;" /> Rates
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="uk-active" exact data-uk-toggle="target: #offcanvas" to={'/resume'}>
                                    <i data-uk-icon="icon: list; ratio: 1.5;" /> Resume
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="uk-active" exact data-uk-toggle="target: #offcanvas" to={'/blog'}>
                                    <i data-uk-icon="icon: future; ratio: 1.5;" /> Waste
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Navigation;
