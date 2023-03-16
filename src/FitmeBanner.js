import React from "react";
import './FitmeBanner.css'
import fitmeLogo from "./assets/fitmeLogo.png";
import demoVideo from "./assets/profileOverlayed.mp4";
import demoVideoPlaceholder from "./assets/profileOverlayedStillCompressed.png"
import { Suspense } from "react";
const appIconSize = 8;

function Home() {
    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="container-horizontal" style={{ height: '100vh', marginTop: '5vh', }}>
            <div style={{}}>
                <div className="container-horizontal" style={{ height: appIconSize + 'vw', paddingBottom: '20px' }}>
                    <img src={fitmeLogo} style={{
                        borderRadius: appIconSize * .2166 + 'vw',
                        marginRight: '5px',
                        height: '100%',
                    }} alt="Fitme logo" />
                    <p className="text" style={{ fontSize: '72px', }}>Fitme</p>

                </div>
                <a className="button" href="/#/projects/fitme" style={{ fontSize: '25px', }} onClick={scrollToTop}>
                    See the project
                </a>
            </div>
            <div style={{ maxHeight: '70vh', marginLeft: '6vw' }}>
                <Suspense fallback={<img src={demoVideoPlaceholder} alt="Demo video placeholder" />}>
                    <video autoPlay loop muted style={{ maxHeight: '70vh', marginLeft: '6vw' }}>
                <source src={demoVideo} type='video/mp4' />
            </video>
                </Suspense>
            </div>
        </div>
    );
}

export default Home;