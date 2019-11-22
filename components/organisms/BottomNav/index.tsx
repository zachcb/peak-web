import React from "react";
import styles from "./styles.css";

const BottomNav = () => (
  <div className={`absolute bottom-0 z-50 w-screen flex flex-wrap content-between text-center bg-white ${styles["bottom-nav"]}`}>
    <a className="w-1/3" href="/#">Discovery</a>
    <a className="w-1/3" href="/#">Create</a>
    <a className="w-1/3" href="/#">Profile</a>
  </div>
);

export default BottomNav;
