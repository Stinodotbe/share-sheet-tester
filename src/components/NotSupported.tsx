import React from "react";
import styles from "./NotSupported.module.scss";

const NotSupported = () => {
  return (
    <div className={styles.wrapper}>
      <p>We're so sorry but this browser doesn't support the <code>navigator.share</code> functionallity.</p>
    </div>
  );
}

export default NotSupported;