import React, { useState, useEffect } from 'react';
import axios from "axios"
import './App.css';
import styles from "./components/space_cards/space_cards.module.css"
import Filters from "./components/filter/filter"
import Space_cards from "./components/space_cards/space_cards"
const App = () => {
  const [rocket, setrocket] = useState([])
  useEffect(() => {
    async function getdata() {
      try {
        const user = await axios.get(
          `https://api.spacexdata.com/v3/launches?limit=10`
        );
        setrocket(user.data);
      } catch (error) {
        console.log(error);
      }
    }
    getdata();
  }, []);
  const handleLauchSat = async (launch) => {
    console.log(launch + "this is launch_val")
    try {
      const user = await axios.get(
        `https://api.spacexdata.com/v3/launches?limit=10&launch_success=${launch}`
      );

      setrocket(user.data);
      console.log(rocket)
    } catch (error) {
      console.log(error);
    }
  }
  const handleLandSat = async (land, launchdata) => {
    console.log(launchdata + land + "this is app land")
    try {
      const user = await axios.get(
        `https://api.spacexdata.com/v3/launches?limit=10&launch_success=${launchdata}&land_success=${land}`
      );
      setrocket(user.data);
      console.log(rocket)
    } catch (error) {
      console.log(error);
    }
  }
  const handleYearLaunchSat = async (landdata, launchdata, year) => {
    console.log(rocket)
    console.log(landdata + launchdata + year + "this is app year")
    try {
      const user = await axios.get(
        `https://api.spacexdata.com/v3/launches?limit=10&launch_success=${launchdata}&land_success=${landdata}&launch_year=${year}`
      );
      setrocket(user.data);

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <React.Fragment>
      <h1 class="main_head">SpaceEx Launch Programs</h1>
      <div style={{ margin: "15px", width: "100%", padding: "0px" }} class={`container ${styles.app_cont}`}>
        <div class="row">
          <div class="col-sm-2"><Filters handleLauchSat={handleLauchSat} handleLandSat={handleLandSat} handleYearLaunchSat={handleYearLaunchSat} /></div>
          <div class={`col-sm-10 ${styles.space_main_cont}`}><Space_cards rocket={rocket} /></div>
        </div>
      </div>
      <footer className="foot">Developed by:Aditya Tata</footer>
      {/* <div class="d-flex bd-highlight">
        <div class="p-2 bd-highlight">
          <Filters handleLauchSat={handleLauchSat} handleLandSat={handleLandSat} handleYearLaunchSat={handleYearLaunchSat} />
        </div>
        <div class="p-2 flex-grow-1 bd-highlight"><Space_cards rocket={rocket} /></div>
      </div> */}
    </React.Fragment>
  );
}

export default App;
