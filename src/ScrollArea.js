import React from "react";
import styles from "./ScrollArea.module.css";

const ScrollPanel = ({ children }) => {
  return (
    <div className={styles.scrollPanel}>
      <div className={styles.scrollContent}>{children}</div>
    </div>
  );
};

export default ScrollPanel;
