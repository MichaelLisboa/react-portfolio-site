import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import {useSpring, useChain, animated as a} from "react-spring";
import usePortal from "../Hooks/usePortal";
import "./Modal.css";

const Modal = ({isActive, children, ...props}) => {
    const target = usePortal("ModalParent");
    const [isShowing, setIsShowing] = useState(false);
    const showingRef = useRef(false);

    useEffect(
        () => {
            let timer;
            if (isActive) {
                setIsShowing(true);
                document.body.style.top = `-${window.scrollY}px`;
            } else {
                timer = setTimeout(() => {
                    setIsShowing(showingRef.current);
                }, 1000)
                const scrollY = document.body.style.top;
                document.body.style.position = "";
                document.body.style.top = "";
                window.scrollTo(0, parseInt(scrollY || "0") * -1);
            }
            return () => clearTimeout(timer);
        }, [isActive]
    )

    const containerRef = useRef();
    const cardRef = useRef();

    const modalContainer = useSpring({
        ref: containerRef,
        delay: isActive ? 0 : 200,
        opacity: isActive ? 1 : 0,
        top: isActive ? 0 : 100,
    });

    const modalCard = useSpring({
        ref: cardRef,
        delay: isActive ? 100 : 0,
        opacity: isActive ? 1 : 0,
        top: isActive ? 0 : 300,
    });

    useChain([containerRef, cardRef]);

    return (
        isShowing && ReactDOM.createPortal(
            <a.div
                style={modalContainer}
                className={`modal-background`}
                tabIndex={-1} role="dialog">
                <a.div
                    style={modalCard}
                    className={`modal-container ${props.className}`}>
                    {children}
                </a.div>
            </a.div>,
            target
        )
    )
}

export default Modal;
