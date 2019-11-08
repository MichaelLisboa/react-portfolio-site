// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import {useSpring, animated} from "react-spring";
// import CampaignDetailItem from "../Projects/presentation/CampaignDetailItem";
// import useModal from "./useModal";
//
// const Animated = ({content}) => {
//     const [isShown, setIsShown] = useState(false);
//     const {isShowing, toggle} = useModal();
//     useEffect(() => toggle(), [])
//
//     const modalProps = useSpring({
//         opacity: isShowing ? 1 : 0,
//         marginTop: isShowing ? 0 : 1000
//     });
//
//     const hideModal = () => {
//         toggle();
//     }
//
//     return (
//         <animated.div
//             style={modalProps}
//             className="modal-full"
//             aria-modal="aria-modal" aria-hidden="aria-hidden" tabIndex={-1} role="dialog">
//             <div className="modal-container">
//                 <div className="modal-close-button">
//                     <button type="button"
//                         className="uk-icon"
//                         data-uk-icon="icon: close; ratio: 1.25"
//                         onClick={(() => {hideModal()})}
//                     >
//                     </button>
//                 </div>
//                 <CampaignDetailItem
//                     key={content.id}
//                     campaign={content}
//                 />
//             </div>
//         </animated.div>
//     )
// }
//
// const Modal = ({isShowing, hide, content}) =>
//     isShowing ? ReactDOM.createPortal(
//         <Animated
//             isShowing={isShowing}
//             hide={hide}
//             content={content}
//         />,
//     document.body)
//     : null;
//
// export default Modal;
