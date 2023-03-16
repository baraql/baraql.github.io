import React, { useState, useEffect } from "react";
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    TextInput,
} from "react-native";
import './FitmeBanner.css'
import fitmeLogo from "./assets/fitmeLogo.png";
import demoVideo from "./assets/profileOverlayed.mp4";

const appIconSize = 8;

function Home() {
    return (
        <div class="container-horizontal" style={{ height: '100vh', marginTop: '5vh', }}>
            <div>
                <div class="container-horizontal" style={{ height: appIconSize + 'vw' }}>
                    <img src={fitmeLogo} style={{
                        borderRadius: appIconSize * .2166 + 'vw',
                        marginRight: '5px',
                        height: '100%',
                    }} alt="Fitme logo" />
                    <p class="text" style={{ fontSize: '72px', }}>Fitme</p>

                </div>
                <a class="button" href="/#/projects/fitme" style={{ fontSize: '25px', }}>
                    See the project
                </a>
            </div>
            <video autoPlay loop muted style={{ maxHeight: '70vh', marginLeft: '10vw' }}>
                <source src={demoVideo} type='video/mp4' />
            </video>
        </div>
    );
}

export default Home;
