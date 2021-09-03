import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BlackjackTable from './components/BlackjackTable';
import axios from 'axios';

function App() {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/numOfDecks?3")
      .then(resp => setPlayers(resp.data))
      .catch(err => console.error(err));
  }, [])

  return (
    <div className={styles.container}>
      <Header setPlayers={setPlayers} />
      <BlackjackTable players={players} />
      <Footer />
    </div>
  );
}

export default App;
