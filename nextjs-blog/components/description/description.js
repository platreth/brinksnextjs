import styles from './description.module.css';

export default function Description() {
  return (
    <section className={styles.description}>
        <div className={styles.textContainer}>
            <h2>Suspendisse tincidunt vulputate ex, a laoreet neque luctus vitae.</h2>
            <p>Suspendisse tincidunt vulputate ex, a laoreet neque luctus vitae. Quisque maximus ante sapien, at pharetra sem sagittis eu. Maecenas nibh leo, interdum ac malesuada quis, tempus vel lacus.</p>
            <p>Aliquam quis velit et nunc scelerisque auctor quis id lacus. Proin sem turpis, rutrum ut placerat nec, varius sit amet lacus. Praesent sed viverra lorem.</p>
        </div>
    </section>
  );
}