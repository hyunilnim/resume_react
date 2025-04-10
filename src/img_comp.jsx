import styles from "./img_comp.module.css";

function ImgComp() {
  return (
    <>
      <div className={styles.container}>
        <img src="/src/assets/IMG.png" alt="IMG" className={styles.image} />
      </div>
    </>
  );
}

export default ImgComp;
