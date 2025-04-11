import styles from "./car_comp.module.css";
import yearsImg from "./assets/years_img.png";

function CarComp() {
  return (
    <>
      <div className={styles.container}>
        <h1>Career</h1>
        <div className={styles.carInfo}>
          <div className={styles.imgWrapper}>
            <img src={yearsImg} className="logo react" alt="React logo" />
          </div>
          <div className={styles.eduInfo}>
            <div className={styles.eduInfoTitle}>
              <p>career1</p>
              <p>2018.03 ~ 2021.02</p>
            </div>
            <div className={styles.eduInfoContent}>
              <p>institution1</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quossdlfjsdlifjsdlaifjsdlifjsdlaifjsadlifjasli
              </p>
            </div>
          </div>
        </div>
        <div className={styles.carInfo}>
          <div className={styles.imgWrapper}>
            <img src={yearsImg} className="logo react" alt="React logo" />
          </div>
          <div className={styles.eduInfo}>
            <div className={styles.eduInfoTitle}>
              <p>career2</p>
              <p>2018.03 ~ 2021.02</p>
            </div>
            <div className={styles.eduInfoContent}>
              <p>institution1</p>
              <p>location1</p>
            </div>
          </div>
        </div>
        <div className={styles.carInfo}>
          <div className={styles.imgWrapper}>
            <img src={yearsImg} className="logo react" alt="React logo" />
          </div>
          <div className={styles.eduInfo}>
            <div className={styles.eduInfoTitle}>
              <p>career3</p>
              <p>2018.03 ~ 2021.02</p>
            </div>
            <div className={styles.eduInfoContent}>
              <p>institution1</p>
              <p>location1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarComp;
