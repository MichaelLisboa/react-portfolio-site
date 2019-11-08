import React from "react";
import {createPortal} from "react-dom";
import usePortal from "../../usePortal";

const Modal = ({ id, children }) => {
    const target = usePortal(id);
    return createPortal(
        <div
            className="modal-full"
            >
            {children}
        </div>,
        target
    )
}

export default Modal;
