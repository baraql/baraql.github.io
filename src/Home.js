import React, { useState, useEffect } from "react";
import Start from './Start';
import FitmeBanner from './FitmeBanner';
import './Home.css'

function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', height: '166.67vh', width: '100vw' }}>
            <div style={{ width: '100vw', height: '100vh' }}>
                <Start />
            </div>
            <div style={{ position: 'static', height: '66.67vh', width: '100vw' }}>
                <FitmeBanner style={{}} />
            </div>
        </div>
    );
}

export default Home;
