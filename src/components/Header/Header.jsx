import styles from './Header.module.css';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => (
    <header className={styles.header}>
            {/* Левый блок с одной ссылкой */}
            <div className={styles.leftLinks}>
                <a href="#">Билеты и абонементы</a>
            </div>

            {/* Центральный блок с тремя ссылками */}
            <div className={styles.centerLinks}>
                <a href="#">Как купить?</a>
                <a href="#">Правила</a>
                <a href="#">Возврат билетов</a>
            </div>

            {/* Правый блок с кнопкой "Войти" и иконками */}
            <div className={styles.rightLinks}>
                <OpenInNewIcon className={styles.icon} />
                <a href="#">Войти</a>
                <MenuIcon className={styles.icon} />
            </div>
    </header>
);

export default Header;
