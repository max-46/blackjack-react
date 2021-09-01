import styles from './Footer.module.css';

export default function Footer() {
    return <footer className={styles.footer}>
        <div>
            Copyright: Max G.
        </div>
        <div>
            Licence: GPLv3
        </div>
    </footer>
}