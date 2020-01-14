import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = ({...props}) => {
    return (
        <footer className={`uk-container uk-container-expand uk-margin-remove-top uk-padding-remove ${props.className}`}>
            <div className="uk-container uk-container-expand uk-padding-remove uk-margin-remove-vertical">
                <div className="uk-text-center uk-padding uk-padding-remove-horizontal">
                    <span className="uk-text-small uk-text-light">
                        &copy;2020 Michael Lisboa &bull; &nbsp;
                        <NavLink to={'/contact'}>
                            <span data-uk-icon="icon: mail; ratio: 0.75" />&nbsp;Contact me
                        </NavLink>
                    </span>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
