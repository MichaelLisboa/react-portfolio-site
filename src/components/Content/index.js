import React from "react";
import "./Content.css";

export const renderTitle = string =>
    string.split("\n").map((text, index) => (
        <div key={`${text}-${index}`} className="uk-margin-remove uk-width-1-1">
            {text}
            <br />
        </div>
    ));

export const Page = ({children, ...props}) =>
    <div className={`page-container ${props.className}`}>
        {children}
    </div>

export const Section = ({children, ...props}) =>
    <section className={`uk-section page-section ${props.className}`}>
        <div className="uk-padding-remove" data-uk-scrollspy="cls: uk-animation-fade">
            {children}
        </div>
    </section>

export const SectionTitle = ({...props}) =>
    <div className="section-title uk-width-1-1" data-uk-scrollspy="cls: uk-animation-fade">
        <h1 className="page-title uk-text-left">{renderTitle(props.title)}</h1>
        {props.subtitle &&
        <p>{props.subtitle}</p>
        }
    </div>

export const PageHeader = ({children, ...props}) =>
    <header style={{height: '20vh'}}
        className="page-header uk-container uk-container-small uk-margin-large-top@m uk-flex uk-flex-middle"
        data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: div > *; repeat: true; delay: 50"
        >
        <div className="uk-width-2-3@m">
            <h2>
                {renderTitle(props.title)}
            </h2>
            <p className="header-lead uk-text-lead uk-margin-remove-vertical">
                {props.subtitle}
            </p>
        </div>
    </header>
