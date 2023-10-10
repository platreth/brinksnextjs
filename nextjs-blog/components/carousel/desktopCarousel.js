import styles from './desktopCarousel.module.css';

export default () => (
    <section className={styles.pictures}>
        <div className={styles.picturesContainer}>
            <div className={styles.leftPictureContainer}>
                <div className={styles.picture}></div>
                <div className={styles.picture}></div>
            </div>
            <div className={styles.pictureMiddle}></div>
            <div className={styles.rightPictureContainer}>
                <div className={styles.picture}></div>
                <div className={styles.picture}></div>
            </div>
        </div>
    </section>
);
