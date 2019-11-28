import {useState, useEffect} from "react";
import moment from "moment";

function checkForIOS() {
    if (navigator.standalone) {
        return false;
    }
    const today = moment().toDate();
    const lastPrompt = moment(localStorage.getItem("installPrompt"));
    const days = moment(today).diff(lastPrompt, "days");
    const ua = window.navigator.userAgent;
    const isIPad = !!ua.match(/iPad/i);
    const isIPhone = !!ua.match(/iPhone/i)
    const isIOS = isIPad || isIPhone;
    const webkit = !!ua.match(/WebKit/i);
    const isSafari = isIOS && webkit && !ua.match(/CriOS/i);

    const prompt = (isNaN(days) || days > 30) && isIOS;

    if (prompt && "localStorage" in window) {
        localStorage.setItem("installPrompt", today);
    }

    return {isIPhone, isIPad, isIOS, isSafari, prompt};
}

export default function useIsIOS() {
    const [isIOS, setIsIOS] = useState({});

    useEffect(() => {
        setIsIOS(checkForIOS());
        return() => console.log("CLEANUP INSTALL PROMPT", isIOS);
    }, []);

    return isIOS;
}
