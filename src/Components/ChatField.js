import React from 'react';
import styles from './styles/styles.module.scss'
import {dateFromSeconds} from "../utils/functions";
import clockImg from './images/clock.svg'
import {useContext} from "react";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const ChatField = ({messages}) => {

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <div className={styles.chat__container}>
            {messages.map(message => {
                const date = dateFromSeconds(message.createdAt.seconds)
                return <div key={message.createdAt} className={styles.chat__containerItem}
                            style={message.uid !== user.uid ? {justifyContent: "flex-start"} : {}}>
                    <div className={styles.chat__messageContainer}
                         style={message.uid !== user.uid ? {order: 2, alignItems: 'flex-start'} : {}}>
                        <div className={styles.chat__containerMessageText}
                             style={message.uid !== user.uid ? {alignItems: 'flex-start'} : {}}>
                            {message.text}
                            <span>
                            <img src={clockImg} alt={'clockImage'}/>
                                {date}
                        </span>
                        </div>
                        <span>{message.displayName}</span>
                    </div>

                    <div className={styles.chat__containerWithImg}
                         style={message.uid !== user.uid ? {marginRight: '20px'} : {}}>
                        {/*<img src={message.photoURL} alt={`${message.displayName[0].toUpperCase()}`} className={styles.chat__containerAvatar}/>*/}
                        <div className={styles.chat__containerAvatar}>{message.displayName[0].toUpperCase()}</div>
                    </div>


                </div>
            })}

        </div>
    );
};

export default ChatField;