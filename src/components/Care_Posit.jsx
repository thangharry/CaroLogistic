import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Care_Posit.module.scss";
import icon1 from "../imgs/Care_Pos1.png";
import icon2 from "../imgs/Care_Pos2.png";
import icon3 from "../imgs/Care_Pos3.png";
import icon4 from "../imgs/Care_Pos4.png";
import icon5 from "../imgs/Care_Pos5.png";
import icon6 from "../imgs/Care_Pos6.png";

import { Link } from "react-router-dom";
function Care_Posit(props) {
    let data = [
        [
            {
                icon: icon1,
                h4: "Logistics Analyst",
                p: " The logistics analyst facilitates and expedites the movement of product to and from various the supply chain.",
            },
            {
                icon: icon2,
                h4: "Plant Manager",
                p: " Ensures Logistics capability is in place to fulfill customer requirements in compliance with documented work.",
            },
            {
                icon: icon3,
                h4: "Logistics Officer",
                p: " The logistics analyst facilitates and expedites the movement of product various points of the supply chain.",
            },
        ],
        [
            {
                icon: icon4,
                h4: "Global Transportation",
                p: " Perform other job-related duties and responsibilities as may be assigned to you from the company.",
            },
            {
                icon: icon5,
                h4: "Fleet Coordinator",
                p: " Generates necessary documentation, including activity/status reports, operation review input analysis.",
            },
            {
                icon: icon6,
                h4: "Team Lead",
                p: "Demonstrates in-depth understanding of concepts, theories and principles in own job family and basic knowledge.",
            },
        ],
    ];
    return (
        <Container className={styles.wrapPosit}>
            <Row className={styles.bodyTitle}>
                <Col className={styles.title}>
                    <h5>THIS IS OUT INSPIRATION</h5>
                    <h2>Open Positions</h2>
                </Col>
            </Row>
            {data.map((i, index) => {
                return (
                    <Row className={styles.media} key={index}>
                        <Col className={styles.Item}>
                            <figure>
                                <img src={i[0].icon} alt="" />
                            </figure>
                            <h4>{i[0].h4}</h4>
                            <p>{i[0].p}</p>
                            <Link>APPLY NOW</Link>
                        </Col>
                        <Col className={styles.Item}>
                            <figure>
                                <img src={i[1].icon} alt="" />
                            </figure>
                            <h4>{i[1].h4}</h4>
                            <p>{i[1].p}</p>
                            <Link>APPLY NOW</Link>
                        </Col>
                        <Col className={styles.Item}>
                            <figure>
                                <img src={i[2].icon} alt="" />
                            </figure>
                            <h4>{i[2].h4}</h4>
                            <p>{i[2].p}</p>
                            <Link>APPLY NOW</Link>
                        </Col>
                    </Row>
                );
            })}
        </Container>
    );
}

export default Care_Posit;
