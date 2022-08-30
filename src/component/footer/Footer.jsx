import React from "react";
import styles from './styles.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.separator}></div>
            <p className={styles.text}>
                Тестовое задание на должность младшего программиста «Лидера поиска», ver. 3.0
            </p>
        </div>
    )
}

export default Footer;