import styles from './BlackjackTable.module.css';

export default function BlackjackTable({ cards }) {

    return (
        <main className={styles.main}>
            <div>
                CARDS: {cards.length > 0 ? cards.reduce((player, dealer) => player + dealer) : "Click the button above to get new cards."}
            </div>
        </main>
    )
}