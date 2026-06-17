import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const measurementId = "G-HMVQ1MGWY3";
let initialized = false;

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (!initialized) {
      ReactGA.initialize(measurementId);
      initialized = true;
    }

    ReactGA.send({
      hitType: "pageview",
      page: `${location.pathname}${location.search}${location.hash}`,
    });
  }, [location]);
};

export default usePageTracking;
