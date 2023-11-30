import React from "react";
import styles from "./Au1_Revolutions.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import bgmain from "../imgs/Au1_rev_bgmain.jpg";
import icon1 from "../imgs/Au1_icon1.png";
import icon2 from "../imgs/Au1_icon2.png";
import icon3 from "../imgs/Au1_icon3.png";
import chuki from "../imgs/h3_Power-chuky.png";

import CountUp from "react-countup";

function Au1_Revolutions(props) {
    let data = [
        {
            icon: icon1,
            number: 5432,
            text: "COUNTRIES COVERED",
        },
        {
            icon: icon2,
            number: 5432,
            text: "PACKAGES RECEIVED",
        },
        {
            icon: icon3,
            number: 5432,
            text: "NATIONAL OFFICES",
        },
    ];
    return (
        <div className={styles.wrapRev}>
            <Row className={styles.bodyRev}>
                <Col className={styles.contentLeft} lg={5} xs={12}>
                    <figure>
                        <img src={bgmain} alt="" />
                    </figure>
                </Col>
                <Col lg={2} xs={12} className={styles.contentCenter}>
                    {data.map((i, index) => {
                        return (
                            <div className={styles.contentItem} key={index}>
                                <figure>
                                    <img src={i.icon} alt="" />
                                </figure>
                                <p className={styles.number}>
                                    <CountUp end={i.number} duration={8} />
                                </p>
                                <p className={styles.word}>{i.text} </p>
                            </div>
                        );
                    })}
                </Col>
                <Col className={styles.contentRight} lg={5} xs={12}>
                    <h2>The New Logistic Revolutions</h2>
                    <p>
                        World’s leading non-asset based supply chain management
                        companies, we design and implement industry-leading.
                    </p>
                    <p>
                        Carro has met the demands of a growing world. Our
                        qualified human team guarantees you an essential
                        experience and professionalism, with a personalized
                        treatment to solve any of your needs
                    </p>
                    <img src={chuki} alt="" />
                </Col>
            </Row>
        </div>
    );
}

export default Au1_Revolutions;
