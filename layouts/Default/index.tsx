import React from "react";
import BottomNav from "components/organisms/BottomNav";

import "./tailwind.css";
import styles from "./styles.css";

type Props = {
  children: React.ReactNode;
};

function DefaultLayout({ children }: Props) {
  return (
    <div className={`${styles["default-layout"]} relative overflow-hidden`}>
      <div className={`${styles["content-wrapper"]}`}>{children}</div>

      <BottomNav isActive />
    </div>
  );
}

export default DefaultLayout;
