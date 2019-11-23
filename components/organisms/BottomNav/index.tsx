import React from "react";
import styles from "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faPlusCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'

type Props = {

}

const BottomNav: React.FC<Props> = () => (
  <div className={`absolute bottom-0 z-50 w-screen flex flex-wrap content-between text-center bg-white ${styles["bottom-nav"]}`}>
    <a className="w-1/3" href="/#">
      <FontAwesomeIcon
        icon={faCompass}
        className="h-6 w-6 m-auto my-2 fill-current text-blue-900"
      />
    </a>
    <a className="w-1/3" href="/#">
      <FontAwesomeIcon
        icon={faPlusCircle}
        className="h-6 w-6 m-auto my-2 fill-current text-blue-900"
      />
    </a>
    <a className="w-1/3" href="/#">
      <FontAwesomeIcon
        icon={faUserCircle}
        className="h-6 w-6 m-auto my-2 fill-current text-blue-900"
      />
    </a>
  </div>
);

export default BottomNav;
