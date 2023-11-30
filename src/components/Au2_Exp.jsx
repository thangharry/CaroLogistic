import React from "react";
import styles from "./Au2_Exp.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRightToBracket } from "react-icons/fa6";
import bgmain from "../imgs/Au2_Exp-bg.jpg";
import Exp35y from "./Exp35y";
function Au2_Exp(props) {
    let data = [
        "Overseas Transport",
        "Berthing Congestion",
        "Global Coverage",
        "World Leading Reefer",
        "Inland Collectio",
        "Lower Storage Costs",
    ];
    let firstData = data.slice(0, 3);
    let secondData = data.slice(3, 6);

    return (
        <div>
            <Container className={styles.wrapExp2}>
                <Row className={styles.body}>
                    <Col className={styles.left} lg={6} xs={12}>
                        <h5>THE WORLD ON TIME</h5>
                        <h2>Logistics Beyond Expectation.</h2>
                        <h4>
                            We are an integrated logistics service company with
                            a direct presence in more than 130 countries with
                            our own offices.
                        </h4>
                        <p>
                            Our approach is to provide fast and effective
                            solutions using a methodological structure that has
                            been proven to increase efficiency, reduce costs and
                            protect our clients in terms of their supply chain.
                        </p>
                        <Row className={styles.Row}>
                            <Col>
                                <ul>
                                    {firstData.map((i, index) => {
                                        return (
                                            <li key={index}>
                                                <FaArrowRightToBracket />
                                                {i}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {secondData.map((i, index) => {
                                        return (
                                            <li key={index}>
                                                <FaArrowRightToBracket />
                                                {i}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col className={styles.right} lg={6} xs={12}>
                        <figure>
                            <img src={bgmain} alt="" />
                        </figure>
                        <Exp35y id={"Au2"} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Au2_Exp;
