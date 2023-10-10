import styles from './backgroundText.module.css';

export default function BackgroundText() {
  return (
    <section className={styles.backgroundText}>
        <div className={styles.backgroundTextContainer}>
            <h2>Proin enim enim, tincidunt consequat sollicitudin.</h2>
            <div className={styles.textContainer}>
              <p>Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel leo nec nibh tempus congue. Morbi rhoncus bibendum enim sit amet pulvinar. Quisque lobortis commodo nunc, a rhoncus diam aliquam ac. Pellentesque non augue ullamcorper arcu facilisis bibendum. Nulla quis tincidunt turpis. Sed quis erat arcu.</p>
              <p>Phasellus gravida felis quis ex mattis, sed suscipit tellus tincidunt. In imperdiet dapibus vehicula. In auctor nec nibh vestibulum ornare. Morbi porta, enim hendrerit consectetur ultrices, libero dui ultricies libero, vel rutrum sem magna quis augue. Nulla quis magna at lorem sodales gravida.</p>
              <div className={styles.rectanglePicture}></div>
            </div>
        </div>
        <div className={styles.rectanglePictureContainer}>
          <div className={styles.rectanglePicture}></div>
          <div className={styles.rectanglePictureDesk}></div>
        </div>
        <hr className={styles.line}/>
        <div className={styles.bottomContainer}>
          <div className={styles.backgroundTextContainer}>
            <h2>Proin enim enim, tincidunt consequat sollicitudin.</h2>
          </div>
          <div className={styles.squarePicture}></div>
          <div className={styles.squarePicture}></div>
        </div>
    </section>
  );
}