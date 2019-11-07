import React from 'react';
import { NavLink } from 'react-router-dom';
import MobileNav from "./presentation/MobileNav"
import logo from '../../images/astro-logo.svg';
import './Navigation.css';

const LogoImage = () =>
    <div className="uk-navbar-center uk-hidden@s">
        <NavLink
            className="uk-navbar-item uk-logo"
            to={'/'}>
            <img src={logo} width="60px" alt="Astro Logo" data-uk-image />
        </NavLink>
    </div>

const Navigation = () =>
    <div className="navbar-container" data-uk-sticky>
        <MobileNav />
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
        </nav>
    </div>

export default Navigation;
