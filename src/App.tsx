import React from 'react';
import styles from "./App.module.css";
import purpleBall from "./sourse/image/background/purpleBall.svg"
import redBallBig from "./sourse/image/background/redBallBig.svg"
import redBallSmall from "./sourse/image/background/redBallSmall.svg"
import logo from "./sourse/image/logoWelbex.svg"
import telegram from "./sourse/image/link/Telegram.svg"
import phone from "./sourse/image/link/phone.svg"
import whatsapp from "./sourse/image/link/whatsapp.svg"


function App() {
    return (
        <div className={styles.container}>
            <div className={styles.svgContainer}>
                <img src={purpleBall} className={styles.purpleBall}/>
                <img src={redBallBig} className={styles.redBallBig}/>
                <img src={redBallSmall} className={styles.redBallSmall}/>
            </div>
            <header className={styles.header}>
                <div className={styles.blockLogo}>
                    <img src={logo} className={styles.logo}/>
                    <div className={styles.slogan}>крупный интегратор CRM в Росcии и ещё 8 странах</div>
                </div>
                <ul className={styles.list}>
                    <li>Услуги</li>
                    <li>Виджеты</li>
                    <li>Интеграции</li>
                    <li>Кейсы</li>
                    <li>Сертификаты</li>
                </ul>
                <div className={styles.link}>
                    <a href="tel:+7 555 555-55-55" className={styles.numberPhone}>+7 555 555-55-55</a>
                    <a><img src={telegram}/> </a>
                    <a><img src={phone}/> </a>
                    <a><img src={whatsapp}/> </a>
                </div>
            </header>
            <div className={styles.content}>

            </div>
            <footer>

            </footer>

        </div>
    );
}

export default App;
