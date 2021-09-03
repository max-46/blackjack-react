import logo from '../logo.jpg';
import styles from './Header.module.css';

export default function Header({ setPlayers, dealNewCards }) {
    
    const hit = () => null;
    const stay = () => null;

    return (
        <header className={styles.header}>
            <div className={styles.name}><img className={styles.logo} alt="" src={logo}></img>BLACKJACK</div>
            <button
                className={styles.button}
                onClick={dealNewCards}
            >
                Deal new cards
            </button>
            <button
                className={styles.button}
                onClick={hit}
            >
                Hit
            </button>
            <button
                className={styles.button}
                onClick={stay}
            >
                Stay
            </button>
        </header>

    )

}