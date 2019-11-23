import React from "react";
import BottomNav from "components/organisms/BottomNav";

import "./tailwind.css";
import styles from "./styles.css";

type Props = {
  children: React.ReactNode;
};

function DefaultLayout({ children }: Props) {
  return (
    <div className={`min-h-full bg-primary relative overflow-hidden font-mono text-gray-800 ${styles["default-layout"]}`}>
      <div className={`p-5 ${styles["content-wrapper"]}`}>
        {children}
      </div>

      <BottomNav isActive />
    </div>
  );
}

export default DefaultLayout;
