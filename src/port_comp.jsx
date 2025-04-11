import styles from "./port_comp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons";

function PortComp() {
  return (
    <>
      <div className={styles.container}>
        <h1>Portfolio</h1>
        <div className={styles.carInfo}>
          <div className={styles.iconContainer}>
            <a href="https://github.com/hyunilnim">
              <FontAwesomeIcon
                icon={faGithub}
                className={styles.fontAwesomeIcon}
              />
            </a>
            <a href="https://chivalrous-shallot-c84.notion.site/Computer-Engineer-Hyunil-Kim-9241f2b861814d348bc31a7645021103?pvs=4">
              <FontAwesomeIcon
                icon={faFigma}
                className={styles.fontAwesomeIcon}
              />
            </a>
          </div>
          <div className={styles.eduInfoContent}>
            <p>Skills</p>
            <ul>
              <li>Python</li>
              <li>JS</li>
              <li>React</li>
              <li>Spring</li>
              <li>MySQL</li>
              <li>Git</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortComp;
