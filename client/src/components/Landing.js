import React from "react";
import styles from "./Landing.module.css";

class Landing extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }} className={styles.container}>
        <div className={styles.title}>
          <h1>Mail-tribe</h1>
          Gather feedback from your users easily !
        </div>
      </div>
    );
  }
}

export default Landing;
