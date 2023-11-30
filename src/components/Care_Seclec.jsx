import React, { useEffect } from "react";
import styles from "./Care_Seclec.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Icon1 from "../imgs/TW_icon1.png";
import Icon2 from "../imgs/TW_icon2.png";
import Icon3 from "../imgs/TW_icon3.png";
import Icon4 from "../imgs/TW_icon4.png";
import Icon5 from "../imgs/TW_icon5.png";
import Icon6 from "../imgs/TW_icon6.png";

import AOS from "aos";
import "aos/dist/aos.css";
function Care_Seclec(props) {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    let data = [
        [
            {
                icon: Icon1,
                h4: "Competitive Salary",
                p: "This staple benefit is of the utmost importance to many candidates and typically.",
            },
            {
                icon: Icon2,
                h4: "Growth Opportunities",
                p: "Highly valued by employees and a great way to combat burnout. Two weeks is standard for new hires.",
            },
            {
                icon: Icon3,
                h4: "Paid Vacations",
                p: "evidenced by dental insurance being the third most common benefit offered by survey.",
            },
        ],
        [
            {
                icon: Icon4,
                h4: "Work Remotely",
                p: "Another practical matter rounds out the top five benefits offerings cited in our survey.",
            },
            {
                icon: Icon5,
                h4: "Competitive Salary",
                p: "More and more companies allow employees to choose their own schedule, within companies.",
            },
            {
                icon: Icon6,
                h4: "Competitive Salary",
                p: "Employees want to know they can still earn a wage and pursue career goals while newborn.",
            },
        ],
    ];
    return (
        <div className={styles.wrapSelection}>
            <Container className={styles.BodySelec}>
                {data.map((i, index) => {
                    return (
                        <Row className={styles.Row} key={index}>
                            <Col className={styles.item} data-aos="fade-up">
                                <figure>
                                    <img src={i[0].icon} alt="" />
                                </figure>
                                <h4>{i[0].h4}</h4>
                                <p>{i[0].p}</p>
                            </Col>
                            <Col className={styles.item} data-aos="fade-up">
                                <figure>
                                    <img src={i[1].icon} alt="" />
                                </figure>
                                <h4>{i[1].h4}</h4>
                                <p>{i[1].p}</p>
                            </Col>
                            <Col className={styles.item} data-aos="fade-up">
                                <figure>
                                    <img src={i[2].icon} alt="" />
                                </figure>
                                <h4>{i[2].h4}</h4>
                                <p>{i[2].p}</p>
                            </Col>
                        </Row>
                    );
                })}
            </Container>
        </div>
    );
}

export default Care_Seclec;
