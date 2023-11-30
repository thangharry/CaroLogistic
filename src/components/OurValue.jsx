import React from "react";
import styles from "./OurValue.module.scss";
import methon from "../imgs/frontbox-3.png";
function OurValue(props) {
    return (
        <div className={styles.wrapNote}>
            <div>
                <img src={methon} alt="" />
                <h4>Our Values</h4>
                <p>
                    Our qualified human team guarantees you an essential
                    experience and professionalism.
                </p>
            </div>
        </div>
    );
}

export default OurValue;
