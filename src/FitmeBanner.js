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

const appIconSize = 8;

function Home() {
    return (
        <div class="container">
            <img src={fitmeLogo} style={{
                height: appIconSize + 'vw',
                borderRadius: appIconSize * .2166 + 'vw',
                marginRight: '5px',
            }} alt="Fitme logo" />
            <p class="text">Fitme</p>
        </div>
    );
}

export default Home;
