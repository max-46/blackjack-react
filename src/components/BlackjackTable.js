import styles from './BlackjackTable.module.css';

export default function BlackjackTable({ players }) {

    return (
        <main className={styles.main}>
            <div>
                {players.length > 0 ?
                    players.map(p => <div className={styles.card}>{p.name + ":" + p.cards.map(c => " " + c.cardType)}</div>)                  
                    : "Click the button above to get new cards."}
            </div>
        </main>
    )
}