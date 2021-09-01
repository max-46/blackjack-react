import logo from '../logo.jpg';
import styles from './Header.module.css';

export default function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.name}><img className={styles.logo} alt="" src={logo}></img>BLACKJACK</div>
            <a
                className={styles.link}
                href=""
                rel="noopener noreferrer"
            >
                Deal new cards
            </a>
            <a
                className={styles.link}
                href=""
                rel="noopener noreferrer"
            >
                Hit
            </a>
            <a
                className={styles.link}
                href=""
                rel="noopener noreferrer"
            >
                Stay
            </a>
        </header>

    )

}