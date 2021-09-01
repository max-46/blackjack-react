import styles from './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div>
          CARDS
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
