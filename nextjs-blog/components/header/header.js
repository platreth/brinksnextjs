export const siteTitle = 'Next.js Brinks';
import styles from './header.module.css';

export default function Header() {
  return (
    <section className={styles.headerHomepage}>
        <div className={styles.titleContainer}>
            <h2>Luctus vitae.</h2>
            <h1>Utrum ut placerat nec, varius sit amet lacus.</h1>
        </div>
    </section>
  );
}