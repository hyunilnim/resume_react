import styles from "./img_comp.module.css";

function ImgComp() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img
            src="/src/assets/name_img.png"
            alt="IMG"
            className={styles.logoImage}
          />
        </div>
        <div className={styles.picContainer}>
          <img src="/src/assets/IMG.png" alt="IMG" className={styles.image} />
        </div>
      </div>
    </>
  );
}

export default ImgComp;
