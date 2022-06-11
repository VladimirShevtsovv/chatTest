import React from 'react';
import styles from './styles/styles.module.scss'
import {useContext} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <div className={styles.navBar__container}>
            {user ?
                <button onClick={()=>auth.signOut()}>Выйти</button>
                :
                null
            }
        </div>
    );
};

export default Navbar;