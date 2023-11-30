import React, { useEffect } from "react";
import styles from "./Home3_power.module.scss";

import bg from "../imgs/h3_Power-bg.jpg";
import avar from "../imgs/h2_BeyondLogic-imgav.jpg";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaCheckDouble, FaQuoteLeft } from "react-icons/fa6";
import chuky from "../imgs/h3_Power-chuky.png";

import AOS from "aos";
import "aos/dist/aos.css";
function Home3_Power(props) {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    let data = [
        {
            name: "Provide customer services.",
        },
        {
            name: "Be an active community.",
        },
        {
            name: "Maintain high standards.",
        },
        {
            name: "Continuous improvement.",
        },
    ];
    return (
        <div className={styles.wrapPower}>
            <div>
                <figure className={styles.wrapMainbg}>
                    <img src={bg} alt="" />
                </figure>
                <Container>
                    <Row className={styles.wrapContent}>
                        <Col
                            className={styles.wrapLeft}
                            data-aos="zoom-in-down"
                            // lg={6}
                            // xs={12}
                        >
                            <figure className={styles.avar}>
                                <Image src={avar} alt="" roundedCircle />
                            </figure>
                            <FaQuoteLeft className={styles.quote} />
                            <blockquote>
                                Our qualified human team guarantees essential
                                experience and professionalism, with a
                                personalized service to solve any of your needs.
                            </blockquote>
                            <figure className={styles.wrapchuky}>
                                <img src={chuky} alt="" />
                            </figure>
                        </Col>
                        <Col
                            className={styles.wrapRight}
                            data-aos="zoom-in-down"
                            // lg={6}
                            // xs={12}
                        >
                            <h2>The Power Beyond Cargo</h2>
                            <p>
                                We guarantee maximum profitability for our
                                clients, providing logistics and transport
                                services of the highest quality, identifying the
                                best solutions for each one in an active and
                                personalized way.
                            </p>
                            <ul>
                                {data.map((i, index) => {
                                    return (
                                        <li key={index}>
                                            <FaCheckDouble
                                                className={styles.check}
                                            />
                                            {i.name}
                                        </li>
                                    );
                                })}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Home3_Power;
