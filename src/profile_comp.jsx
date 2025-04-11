import styles from "./profile_comp.module.css";

function ProfileComp() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.nameContainer}>
          <h2>Software Developer</h2>
          <h1>HYUNIL KIM</h1>
        </div>
        <div className={styles.eduInfo}>
          <div className={styles.eduInfoTitle}>
            <div className={styles.eduInfoTitleContent}>
              <p>Birth</p>
              <p>1993-02-24</p>
            </div>
            <div className={styles.eduInfoTitleContent}>
              <p>Residence</p>
              <p>Seoul, Korea</p>
            </div>
          </div>
          <div className={styles.eduInfoTitleContent}>
            <p>Introduction</p>
            <p>
              I'm a software developer with a passion for building web
              applications. I'm a quick learner and I'm always looking for new
              challenges. I'm a team player and I'm always looking for new
              challenges. I'm a team player and I'm always looking for new
              challenges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileComp;
