import styles from "./edu_comp.module.css";

function EduComp() {
  return (
    <>
      <div className={styles.container}>
        <h1>Education</h1>
        <div className={styles.eduInfo}>
          <div className={styles.eduInfoTitle}>
            <p>education1</p>
            <p>2018.03 ~ 2021.02</p>
          </div>
          <div className={styles.eduInfoContent}>
            <p>institution1</p>
            <p>location1</p>
          </div>
        </div>
        <div className={styles.eduInfo}>
          <div className={styles.eduInfoTitle}>
            <p>education1</p>
            <p>2018.03 ~ 2021.02</p>
          </div>
          <div className={styles.eduInfoContent}>
            <p>institution1</p>
            <p>location1</p>
          </div>
        </div>
        <div className={styles.eduInfo}>
          <div className={styles.eduInfoTitle}>
            <p>education1</p>
            <p>2018.03 ~ 2021.02</p>
          </div>
          <div className={styles.eduInfoContent}>
            <p>institution1</p>
            <p>location1</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EduComp;
