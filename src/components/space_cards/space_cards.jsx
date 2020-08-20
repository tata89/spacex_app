import React, { useState, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import styles from "./space_cards.module.css";
import axios from "axios";
import Spacecontent from "./space_content";
const Space_cards = ({ rocket }) => {
  return (
    <React.Fragment>
      <div className={styles.spacecard_cont}>
        {rocket.map((items) => (
          <Spacecontent items={items} key={items.launch_date_unix} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Space_cards;
