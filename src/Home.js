import React, { useState, useEffect } from "react";
import Start from './Start';
import FitmeBanner from './FitmeBanner';

function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', minHeight: '166.67vh' }}>
            <div style={{ height: '100vh' }}>
                <Start />
            </div>
            <div style={{ position: 'static', flex: 1, height: '66.67vh', width: '100vw', border: '1px solid red' }}>
                <FitmeBanner style={{}} />
            </div>
        </div>
    );
}

export default Home;
