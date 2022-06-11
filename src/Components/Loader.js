import React from 'react';
import styles from './styles/styles.module.scss'

const Loader = () => {
    return (
        <div className={styles.loader__container}>
            <div className={styles.lds_ripple}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;