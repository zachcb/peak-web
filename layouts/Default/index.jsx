import React from "react";
import PropTypes from "prop-types";
import BottomNav from "components/organisms/BottomNav";

import "./tailwind.css";
import styles from "./styles.css";

const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <div className={`${styles["default-layout"]} relative overflow-hidden`}>
      {children}
      <BottomNav />
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
