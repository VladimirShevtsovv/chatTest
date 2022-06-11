import React, {useContext} from 'react';
import styles from './styles/styles.module.scss'
import logo from './images/logo.svg'
import {Context} from "../index";
import {GoogleAuthProvider, signInWithPopup,} from "firebase/auth";


const Login = () => {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new GoogleAuthProvider();
        const request = await signInWithPopup(auth, provider)
    }

    return (
        <div className={styles.login__container}>
            <div>
                <img src={logo} alt={'logo'}/>
                <h1>Chat</h1>
            </div>

            <h2>Sign in</h2>
            <span>Sign in to continue to Chat</span>
            <button onClick={() => {
                login()
            }}>Sign in with Google
            </button>
            <span>2022 Chat. Crafted with by Vladimir Shevtsov</span>
        </div>
    );
};

export default Login;