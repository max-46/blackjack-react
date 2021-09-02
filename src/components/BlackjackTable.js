import React, { useEffect, useState } from 'react';
import styles from './BlackjackTable.module.css';
import axios from 'axios';

export default function BlackjackTable() {

    const [cards, setCards] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8080/numOfDecks?3")
            .then(resp => setCards(resp.data))
            .catch(err => console.error(err));
    }, [])

    return (
        <main className={styles.main}>
            <div>
                CARDS: {cards}
            </div>
        </main>
    )
}