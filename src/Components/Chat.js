import React from 'react';
import FieldForSendMessage from "./FieldForSendMessage";
import ChatField from "./ChatField";
import {useContext} from "react";
import {Context} from "../index";
import {useCollectionData} from "react-firebase-hooks/firestore";
import { collection, orderBy, query} from "firebase/firestore";
import Loader from "./Loader";
import Navbar from "./Navbar";


const Chat = () => {

    const {firestore} = useContext(Context)
    const [messages, loading] = useCollectionData(
        query(collection(firestore, "messages"), orderBy('createdAt'))
    )

    if (loading) {
        return <Loader/>
    }


    return (
        <React.Fragment>
            <Navbar/>
            <ChatField messages={messages}/>
            <FieldForSendMessage/>
        </React.Fragment>

    );
};

export default Chat;