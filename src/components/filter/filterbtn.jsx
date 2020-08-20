import React, { useState, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import styles from "./filters.module.css";
const Filterbtn = ({ handleLauchSat, handleLandSat, handleYearLaunchSat }) => {
  const [selectflag, setselectflag] = useState(false);
  const [launchdata, setlaunchdata] = useState("");
  const [landdata, setlanddata] = useState("");
  const [yearset, setyearset] = useState("");
  useEffect(() => {
    setselectflag(false);
  }, [yearset]);
  // const [yearval, setYearval] = useState();
  const handlelaunch = (e) => {
    console.log(e.target.text.toLowerCase() + "this is launch");
    setlaunchdata(e.target.text.toLowerCase());
    handleLauchSat(e.target.text.toLowerCase());
  };
  const handleYear = (e) => {
    let year = e.target.text;
    setyearset(year);
    console.log(year + "this is year data");
    if (!selectflag) {
      document.getElementById(year).style.backgroundColor = "#7cba01";
    } else {
      document.getElementById(year).style.backgroundColor = "#c5e09b";
    }
    handleYearLaunchSat(landdata, launchdata, year);
  };
  const handleland = (e) => {
    console.log(e.target.text.toLowerCase() + "this is land data");
    console.log(launchdata);
    setlanddata(e.target.text.toLowerCase());
    handleLandSat(e.target.text.toLowerCase(), launchdata);
  };
  const year = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];

  return (
    <React.Fragment>
      <div className={styles.year_cont_2}>
        <h2 className={styles.frst_title}>Launch Year</h2>
      </div>
      <div className={styles.year_cont}>
        {year.map((item, index) => (
          <div key={index} className={styles.year_cont_2}>
            <a
              id={index}
              onClick={handleYear}
              className={`waves-effect waves-light btn-small ${styles.btn_t}`}
            >
              {item}
            </a>
          </div>
        ))}{" "}
      </div>
      <div className={styles.year_cont_2}>
        <h2 className={styles.frst_title}>Succesful Launch</h2>
      </div>
      <div className={styles.year_cont}>
        <div className={styles.year_cont_2}>
          <a
            onClick={handlelaunch}
            className={`waves-effect waves-light btn-small ${styles.btn_t}`}
          >
            True
          </a>
        </div>
        <div className={styles.year_cont_2}>
          <a
            onClick={handlelaunch}
            id="launch_fail"
            className={`waves-effect waves-light btn-small ${styles.btn_t}`}
          >
            False
          </a>
        </div>
      </div>
      <div className={styles.year_cont_2}>
        <h2 className={styles.frst_title}>Succesful Landing</h2>
      </div>
      <div className={styles.year_cont}>
        <div className={styles.year_cont_2}>
          <a
            onClick={handleland}
            className={`waves-effect waves-light btn-small ${styles.btn_t}`}
          >
            True
          </a>
        </div>
        <div className={styles.year_cont_2}>
          <a
            onClick={handleland}
            className={`waves-effect waves-light btn-small ${styles.btn_t}`}
          >
            False
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Filterbtn;
