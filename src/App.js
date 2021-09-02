import styles from './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BlackjackTable from './components/BlackjackTable';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <BlackjackTable />
      <Footer />
    </div>
  );
}

export default App;
