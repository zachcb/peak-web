import React from "react";
import BottomNav from "components/organisms/BottomNav";

import "styles/tailwind.css";
import styles from "./styles.css";

type Props = {
  children: React.ReactNode;
};

function FullscreenLayout({ children }: Props) {
  return (
    <div className={`h-full min-h-full bg-primary relative overflow-hidden font-mono text-gray-800 ${styles["default-layout"]}`}>
      <div className={`h-full ${styles["content-wrapper"]}`}>
        {children}
      </div>

      <BottomNav isActive />
    </div>
  );
}

export default FullscreenLayout;
