import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BlackjackTable from './components/BlackjackTable';
import axios from 'axios';

function App() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/numOfDecks?3")
      .then(resp => setCards(resp.data))
      .catch(err => console.error(err));
  }, [])

  return (
    <div className={styles.container}>
      <Header setCards={setCards} />
      <BlackjackTable cards={cards} />
      <Footer />
    </div>
  );
}

export default App;
