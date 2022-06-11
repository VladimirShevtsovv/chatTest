import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { getFirestore  } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


 const app =  initializeApp({
    apiKey: "AIzaSyA4LWfe_IsOP4wdOZktRs1R26Z2y6j_a-I",
    authDomain: "chatreact-ab0e1.firebaseapp.com",
    projectId: "chatreact-ab0e1",
    storageBucket: "chatreact-ab0e1.appspot.com",
    messagingSenderId: "370917536596",
    appId: "1:370917536596:web:1820804c7de496b1134ec1",
    measurementId: "G-ZR009ZKC2M"
});

export const Context = createContext(null)

const auth = getAuth(app)
const firestore = getFirestore(app)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{ auth, firestore}}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Context.Provider>
);

