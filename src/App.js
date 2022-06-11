import {BrowserRouter} from "react-router-dom";

import styles from './Components/styles/styles.module.scss'
import AppRouter from "./Components/AppRouter";
import {useContext} from "react";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./Components/Loader";


function App() {
    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return <Loader/>
    }

    return (
        <BrowserRouter>
            <main className={styles.main__container}>

                <AppRouter/>
            </main>
        </BrowserRouter>
    );
}

export default App;
