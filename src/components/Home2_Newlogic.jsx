import React from "react";
import styles from "./Home2_Newlogic.module.scss";
import imgMain from "../imgs/chooseUs_mainContent.jpg";
import imgAu2 from "../imgs/Au2_NewLogicbg.jpg";
import { Col, Container, Row } from "react-bootstrap";

import icon1 from "../imgs/Icon_AboutCarrro_1.png";
import icon2 from "../imgs/h2_happiness_icon.png";
import icon3 from "../imgs/Au2_NewLogicicon1.png";
import icon4 from "../imgs/Au2_NewLogicicon2.png";

let data = [
    {
        page: "Home2",
        content: [
            {
                imgmain: imgMain,
                h5: "beyond speed delivery",
                h2: "the new logistic revolutions",
                h6: " We are an integrated logistics service company with a direct presence in more than 130 countries with our own offices.",
                p: " We evaluate the activities of our clients for the continuous improvement of processes, technology and human resources, thus ensuring total client satisfaction, complying with norms and standards.",
                icon1: icon1,
                h41: "Safe Warehousing",
                pIcon1: " We care for providing our employees with a friendly environment.",
                icon2: icon2,
                h42: "Service Guarantee",
                pIcon2: " We Provide our customer with a friendly security guarantee.",
            },
        ],
    },
    {
        page: "Au2",
        content: [
            {
                imgmain: imgAu2,
                h5: "beyond speed delivery",
                h2: "the new logistic revolutions",
                h6: " We are an integrated logistics service company with a direct presence in more than 130 countries with our own offices.",
                p: " We evaluate the activities of our clients for the continuous improvement of processes, technology and human resources, thus ensuring total client satisfaction, complying with norms and standards.",
                icon1: icon3,
                h41: "Delivery Unlimited",
                pIcon1: " We care for providing our employees with a friendly environment.",
                icon2: icon4,
                h42: "Package Protection",
                pIcon2: " We Provide our customer with a friendly security guarantee.",
            },
        ],
    },
];

function Home2_Newlogic({ pages, color }) {
    let datakq = data.find((i) => {
        return i.page === pages;
    });

    return (
        <div>
            {datakq.content.map((i, index) => {
                return (
                    <div
                        className={styles.wraplgContent}
                        key={index}
                        id={`${styles[color]}`}
                    >
                        <figure className={styles.imgbgmain}>
                            <img src={i.imgmain} alt="" />
                        </figure>
                        <div className={styles.wrapContent}>
                            <h5>{i.h5}</h5>
                            <h2>{i.h2}</h2>
                            <h6>{i.h6}</h6>
                            <p>{i.p}</p>
                            <div className={styles.wrapIcon}>
                                <div className={styles.item}>
                                    <figure>
                                        <img src={i.icon1} alt="" />
                                    </figure>
                                    <h4>{i.h41}</h4>
                                    <p>{i.pIcon1}</p>
                                </div>
                                <div className={styles.item}>
                                    <figure>
                                        <img src={i.icon2} alt="" />
                                    </figure>
                                    <h4>{i.h42}</h4>
                                    <p>{i.pIcon2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Home2_Newlogic;
