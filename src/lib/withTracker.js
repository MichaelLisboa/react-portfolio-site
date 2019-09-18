import React, { Component } from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-137372309-1');
// ReactGA.initialize('');
ReactGA.pageview(window.location.pathname + window.location.search);

export default function withTracker (WrappedComponent, options = {}) {
    const trackPage = (page) => {
        ReactGA.set({
            page,
            ...options
        });
        ReactGA.pageview(page);
    };

    const HOC = class extends Component {
        componentDidMount () {
            const page = this.props.location.pathname;
            trackPage(page);
        }

        componentWillReceiveProps (nextProps) {
            const currentPage = this.props.location.pathname;
            const nextPage = nextProps.location.pathname;

            if (currentPage !== nextPage) {
                trackPage(nextPage);
            }
        }

        render() {
            return <WrappedComponent {...this.props}/>;
        }
    };

    return HOC;
}
