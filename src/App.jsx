//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import EduComp from "./edu_comp";
import ConComp from "./con_comp";
import ImgComp from "./img_comp";
import CarComp from "./car_comp";
import PortComp from "./port_comp";
import ProfileComp from "./profile_comp";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <EduComp />
          {/* <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a> */}
          <ConComp />
          <ImgComp />
        </div>
        <div className={styles.rightContainer}>
          <CarComp />
          <PortComp />
          <ProfileComp />
        </div>
      </div>
    </>
  );
}

export default App;
