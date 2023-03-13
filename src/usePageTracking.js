import { useEffect } from "react";
import ReactGA from "react-ga4";

const usePageTracking = () => {

    useEffect(() => {
        // track pageview with gtag / react-ga / react-ga4, for example:
        ReactGA.initialize("G-HMVQ1MGWY3");
        ReactGA.send({ hitType: "pageview", page: window.location.hash });
    }, []);
};

export default usePageTracking;