import axios from 'axios';
import logo from '../logo.jpg';
import styles from './Header.module.css';

export default function Header({ setPlayers, setWinner, dealNewCards }) {

    const hit = () => axios.get("http://localhost:8080/hit")
        .then(resp => {
            setPlayers(resp.data);
            setWinner(null);
        })
        .catch(err => console.error(err));

    const stay = () => axios.get("http://localhost:8080/stay")
        .then(resp => {
            const [players, winner] = resp.data;
            setPlayers(players);
            setWinner(winner);
        })
        .catch(err => console.error(err));

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