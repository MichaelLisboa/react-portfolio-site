import React from "react";
import "./Content.css";

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
        <h1 className="page-title uk-text-left">{props.title}</h1>
        {props.subtitle &&
        <p>{props.subtitle}</p>
        }
    </div>

export const PageHeader = ({children, ...props}) =>
    <header style={{height: '30vh', backgroundColor: props.theme}}
        className="uk-container uk-container-expand uk-light
        uk-flex uk-flex-center uk-flex-middle">
        <div className="uk-width-4-5 uk-width-2-3@ uk-text-center">
            <h2>
                {props.title}
            </h2>
            <p className="header-lead uk-text-lead uk-margin-remove-vertical">
                {props.subtitle}
            </p>
        </div>
    </header>
