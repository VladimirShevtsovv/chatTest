import React, {useState} from 'react';
import imgSendMessage from './images/sendMessageImage.svg'
import styles from './styles/styles.module.scss'
import {useContext} from "react";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import {serverTimestamp, collection , addDoc, doc } from "firebase/firestore";
const FieldForSendMessage = () => {
    const [inputValue, setInputValue] = useState('')

    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)

    const sendMessage = async () => {

        await addDoc(collection(firestore, "messages"), {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: inputValue,
            createdAt: new Date()
        });
        setInputValue('')
    }


    return (
        <div className={styles.messageField__container}>
            <input placeholder={'Enter message...'} onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
            <button onClick={() => sendMessage()}>
                <img src={imgSendMessage}/>
            </button>
        </div>

    );
};

export default FieldForSendMessage;