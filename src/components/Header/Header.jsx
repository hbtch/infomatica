import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 769); 

    const toggleMenu = () => {
        if (isMobile) {
            setMenuOpen(!menuOpen);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 769);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize); 
    }, []);

    return (
        <header className={`${styles.header} ${menuOpen ? styles.menuActive : ''}`}>
            <div className={styles.leftLinks}>
                <a href="#">Билеты и абонементы</a>
            </div>

            <div className={styles.centerLinks}>
                <a href="#">Как купить?</a>
                <a href="#">Правила</a>
                <a href="#">Возврат билетов</a>
            </div>

            <div className={styles.rightLinks}>
                <OpenInNewIcon className={styles.openNewIcon} />
                <a href="#">Войти</a>
            </div>
            <MenuIcon className={`${styles.menuIcon}`} onClick={toggleMenu} />

            <div className={`${styles.menuDrawer} ${menuOpen ? styles.menuDrawerOpen : ''}`}>
                <nav>
                    <a href="#">Билеты и абонементы</a>
                    <a href="#">Как купить?</a>
                    <a href="#">Правила</a>
                    <a href="#">Возврат билетов</a>
                    <a href="#">Войти</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
