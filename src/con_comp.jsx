import styles from "./con_comp.module.css";

function ConComp() {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact</h1>
        <div className={styles.eduInfo}>
          <div className={styles.eduInfoTitle}>
            <div className={styles.eduInfoTitleContent}>
              <p>Phone</p>
              <p>010-2312-2042</p>
            </div>
            <div className={styles.eduInfoTitleContent}>
              <p>Email</p>
              <p>gusdlf2357@naver.com</p>
            </div>
          </div>
          <div className={styles.eduInfoTitle}>
            <div className={styles.eduInfoTitleContent}>
              <p>Instagram</p>
              <p>hyunil</p>
            </div>
            <div className={styles.eduInfoTitleContent}>
              <p>Twitter</p>
              <p>hyunil_kim</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConComp;
