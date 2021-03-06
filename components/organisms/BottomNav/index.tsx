import React from "react";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCompass, faPlusCircle, faUserCircle } from "@fortawesome/free-solid- svg-icons";
import styles from "./styles.css";

type Props = {
  isActive: boolean;
};

function BottomNav({ isActive }: Props) {
  return (isActive && (
  <div
    className={`absolute bottom-0 z-50 w-screen flex flex-wrap content-between text-center bg-white ${styles["bottom-nav"]}`}
  >
    <div className="w-1/3">
      <Link href="/discover"><span>discover</span></Link>
    </div>
    <div className="w-1/3">
      <Link href="/create"><span>create</span></Link>
    </div>
    <div className="w-1/3">
      <Link href="/profile"><span>profile</span></Link>
    </div>
  </div>
  )
  );
}

export default BottomNav;
