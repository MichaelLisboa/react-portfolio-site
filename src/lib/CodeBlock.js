import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/styles/prism";

class CodeBlock extends PureComponent {
    static propTypes = {
        value: PropTypes.string.isRequired,
        language: PropTypes.string
    };

    static defaultProps = {
        language: null
    };

    render () {
        const {
            value
        } = this.props;
        return (
            <SyntaxHighlighter language="js" style={darcula}>
                {value}
            </SyntaxHighlighter>
        );
    }
}

export default CodeBlock;
