import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {useSpring, animated as a} from "react-spring";
import usePortal from "../../lib/usePortal";

import "./Modal.css";

const Modal = ({children, ...props}) => {
    const [isShowing, setIsShowing] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const target = usePortal("ModalParent");

    useEffect(
        () => {
            setIsAnimating(props.isShown);
            if (props.isShown) {
                setIsShowing(props.isShown);
                // document.body.style.position = 'fixed';
                document.body.style.top = `-${window.scrollY}px`;
            } else {
                const scrollY = document.body.style.top;
                const unMount = setTimeout(() => { setIsShowing(props.isShown); }, 300);
                document.body.style.position = '';
                document.body.style.top = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        }, [props.isShown]
    )

    const modalProps = useSpring({
        opacity: isAnimating ? 1 : 0,
        top: isAnimating ? 0 : 200,
        borderStyle: "none"
    });

    return (
        isShowing && ReactDOM.createPortal(
            <a.div
                style={modalProps}
                className="modal-full"
                tabIndex={-1} role="dialog">
                <div className="modal-container">
                    {children}
                </div>
            </a.div>,
            target)
    )
}

export default Modal;
