import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {useSpring, animated as a} from "react-spring";
import usePortal from "../../lib/usePortal";

import "./Modal.css";

const Modal = ({children, ...props}) => {
    const [isShowing, setIsShowing] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const target = usePortal("ModalParent");

    useEffect(() => {
        setIsShowing(props.isShown);
        setIsAnimating(isShowing);
    }, [isShowing, isAnimating, props.isShown])

    const modalProps = useSpring({
        opacity: isAnimating ? 1 : 0,
        top: isAnimating ? 0 : 200
    });

    return (
        <>
        {
        isShowing ? ReactDOM.createPortal(
            <a.div
                style={modalProps}
                className="modal-full"
                tabIndex={-1} role="dialog">
                <div className="modal-container">
                    {children}
                </div>
            </a.div>,
            target)
            : null
        }
        </>
    )
}

export default Modal;
