// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyD4qxYIs0MyCsIkIhEDiXbDAU8LxK7-NKc",
    authDomain: "website-4ba74.firebaseapp.com",
    projectId: "website-4ba74",
    storageBucket: "website-4ba74.appspot.com",
    messagingSenderId: "539272362072",
    appId: "1:539272362072:web:96a35bc3b3e5e4c2bbb22d",
    measurementId: "G-HMVQ1MGWY3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

logEvent(analytics, 'test');

export default firebaseConfig;
