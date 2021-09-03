import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BlackjackTable from './components/BlackjackTable';
import axios from 'axios';

function App() {

  const [players, setPlayers] = useState([]);
  const [winner, setWinner] = useState(null);

  const dealNewCards = () => {
    axios.get("http://localhost:8080/numOfDecks?3")
    .then(resp => {
      setPlayers(resp.data[0]);
      setWinner(resp.data[1]);
    })
    .catch(err => console.error(err));
  }

  useEffect(() => {
    dealNewCards()
  }, [])

  return (
    <div className={styles.container}>
      <Header setPlayers={setPlayers} setWinner={setWinner} winner={winner} dealNewCards={dealNewCards} />
      <BlackjackTable players={players} winner={winner} />
      <Footer />
    </div>
  );
}

export default App;
