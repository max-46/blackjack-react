import styles from './BlackjackTable.module.css';

export default function BlackjackTable({ cards }) {

    return (
        <main className={styles.main}>
            <div>
                CARDS: {cards}
            </div>
        </main>
    )
}