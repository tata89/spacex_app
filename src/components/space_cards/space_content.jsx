import React, { useState } from "react";
import styles from "./space_cards.module.css";
import "materialize-css/dist/css/materialize.min.css";
const Spacecontent = ({
  items: {
    links,
    mission_id,
    mission_name,
    flight_number,
    launch_year,
    launch_success,
    rocket: {
      first_stage: { cores },
    },
  },
}) => {
  var landstat = cores[0];
  return (
    <React.Fragment>
      <div className="row">
        <div className={`col s12 m7 ${styles.card_col}`}>
          <div
            style={{ marginTop: "0px", borderRadius: "10px", height: "466px" }}
            className={`card ${styles.cardcont}`}
          >
            <div className="card-image">
              <div className={styles.img_cont}>
                <img src={links.mission_patch} />
              </div>
            </div>
            <div style={{ paddingTop: "0px" }} className="card-content">
              <h3 className={styles.miss_name}>{mission_name}</h3>
              <div>
                <p className={styles.p_title}>Mission Ids:</p>
                {mission_id.length === 0 ? (
                  <li>N/A</li>
                ) : (
                  mission_id.map((items) => <li>{items}</li>)
                )}
              </div>
              <div>
                <p className={styles.p_title}>
                  Launch Year:
                  <span className={styles.p_data}>{launch_year}</span>
                </p>
              </div>
              <div>
                {launch_success ? (
                  <p className={styles.p_title}>
                    Succesful Launch:<span className={styles.p_data}>true</span>
                  </p>
                ) : (
                  <p className={styles.p_title}>
                    Succesful Launch:
                    <span className={styles.p_data}>false</span>
                  </p>
                )}
              </div>
              <div>
                {landstat.land_success ? (
                  <p className={styles.p_title}>
                    Succesful Land:<span className={styles.p_data}>true</span>
                  </p>
                ) : (
                  <p className={styles.p_title}>
                    Succesful Land:<span className={styles.p_data}>false</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Spacecontent;
