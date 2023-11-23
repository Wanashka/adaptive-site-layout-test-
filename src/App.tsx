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
                в<br/>в<br/>в<br/>в<br/>в<br/>в<br/>в<br/>в<br/>в<br/>в<br/>в<br/>в<br/>в<br/>в<br/>в<br/>в
                <br/>в<br/>в<br/>в<br/>в<br/>в<br/>в<br/>в
            </div>
            <footer className={styles.footer}>
                <div>
                    <div className={styles.footerTitle}>О компании</div>
                    <div className={styles.blockFooter}>
                        <a href={""}>Партнёрская программа</a>
                        <a href={""}>Вакансии</a>
                    </div>
                </div>
                <div className={styles.menuBlock}>
                    <div className={styles.footerTitle}>Меню</div>
                    <div className={`${styles.blockFooter} ${styles.blockMenuList}`}>
                        <a href={""}>Расчёт стоимости</a>
                        <a href={""}>Услуги</a>
                        <a href={""}>Виджеты</a>
                        <a href={""}>Интеграции</a>
                        <a href={""}>Наши клиенты</a>
                        <a href={""}>Кейсы</a>
                        <a href={""}>Благодарственные письма</a>
                        <a href={""}>Сертификаты</a>
                        <a href={""}>Блог на Youtube</a>
                        <a href={""}>Вопрос / Ответ</a>
                    </div>
                </div>
                <div className={styles.contactBlock}>
                    <div className={styles.footerTitle}>Контакты</div>
                    <div className={styles.blockFooter}>
                        <a href={""}>+7 555 555-55-55</a>
                        <div className={styles.socialNetworkList}>
                            <a className={styles.socialNetwork}><img src={telegram}/> </a>
                            <a className={styles.socialNetwork}><img src={phone}/> </a>
                            <a className={styles.socialNetwork}><img src={whatsapp}/> </a>
                        </div>
                        <a href={""}>Москва, Путевой проезд 3с1, к 902</a>
                    </div>
                    <div className={styles.confidentiality}>
                        <div>©WELBEX 2022. Все права защищены.</div>
                        <div>Политика конфиденциальности</div>
                    </div>
                </div>

            </footer>
        </div>
    );
}

export default App;
