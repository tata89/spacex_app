import React from "react";
import Filterbtn from "./filterbtn";
import "materialize-css/dist/css/materialize.min.css";
import styles from "./filters.module.css";
const Filters = ({ handleLauchSat, handleLandSat, handleYearLaunchSat }) => {
  return (
    <React.Fragment>
      <div className={styles.fltr_cont}>
        <h3 className={styles.title_head}>Filters</h3>
        <Filterbtn
          handleLauchSat={handleLauchSat}
          handleLandSat={handleLandSat}
          handleYearLaunchSat={handleYearLaunchSat}
        />
      </div>
    </React.Fragment>
  );
};

export default Filters;
