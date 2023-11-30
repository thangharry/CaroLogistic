import React from "react";
import styles from "./Freight_BodyL.module.scss";
import { Link } from "react-router-dom";
import { FaChevronRight, FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { FaRegFilePdf } from "react-icons/fa";
import Button from "react-bootstrap/Button";
function Freight_BodyL({ bg }) {
    let data = [
        "air freight",
        "ground freight",
        "maritime freight",
        "railway freight",
        "packaging",
        "warehousing",
    ];
    return (
        <div className={styles.wrapLeft}>
            <div className={styles.Nav}>
                <ul>
                    {data.map((i, index) => {
                        return (
                            <li
                                className={styles.Item}
                                key={index}
                                id={`${styles[bg]}`}
                            >
                                <Link to={`/${i}`}>
                                    {i}
                                    <span>
                                        <FaChevronRight />
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={styles.btn}>
                <Button>
                    <Link>
                        <span>
                            <FaRegFilePdf />
                        </span>
                        services brochure
                    </Link>
                </Button>
            </div>
            <div className={styles.assi}>
                <div className={styles.wrapAssi}>
                    <h3>Need Assistance</h3>
                    <p>
                        We have a solution for every need to send or supply
                        products in any mode of freight transport.
                    </p>
                    <div className={styles.phone}>
                        <FaPhone
                            style={{
                                fontSize: "1.9rem",
                                color: "rgb(252,76,2)",
                            }}
                        />
                        <a href="tel:0000000">0123.678.356</a>
                    </div>
                    <div className={styles.email}>
                        <IoMailSharp
                            style={{
                                fontSize: "1.9rem",
                                color: "rgb(252,76,2)",
                            }}
                        />
                        <a href="mailto:thang@pro">thangINFO@pro.vn</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Freight_BodyL;
