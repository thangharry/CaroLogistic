import React, { useState } from "react";
import styles from "./Exp35y.module.scss";
import CountUp from "react-countup";
function Exp35y({ id }) {
    return (
        <div className={`${styles.wrap_Exp}`} id={`${styles[id]}`}>
            <span>
                <strong>
                    <CountUp end={35} duration={8} />
                </strong>
            </span>
            <div className={styles.Exp_content}>
                <h3>YEARS OF EXPERIENCE</h3>
                <p>
                    Logistipack we have a solution for every need to send
                    supply.
                </p>
            </div>
        </div>
    );
}

export default Exp35y;
