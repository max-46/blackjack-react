import styles from './BlackjackTable.module.css';

export default function BlackjackTable({ players, winner }) {

    const cls = (name) => name === "Dealer" ? styles.dealer : styles.player;

    return (
        <main className={styles.main}>
            <div>
                <hr />
                {players.length > 0 ?
                    players.map(p => <div className={styles.card + " " + cls(p.name)}>{p.name + ":" + p.cards.map(c => " " + c.cardType)}</div>)                  
                    : "Click the button above to get new cards."}
                <hr />
                {winner && <div className={cls(winner.name)}>Winner: {winner.name}</div>}
            </div>
        </main>
    )
}