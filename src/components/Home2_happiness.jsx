import React from "react";
import styles from "./Home2_happiness.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { FaCheckDouble } from "react-icons/fa";
import imgmain from "../imgs/h2_happiness_bg.jpg";
import Home2_happService from "./Home2_happService";

function Home2_happiness(props) {
    let data = [
        {
            span: <FaCheckDouble />,
            title: "Security of packages transported.",
        },
        {
            span: <FaCheckDouble />,
            title: "Provide our employees environment.",
        },
        {
            span: <FaCheckDouble />,
            title: "Provide customer services.",
        },
    ];
    return (
        <Container className={styles.wrapHappiness}>
            <Row>
                <Col className={styles.wrapHapContent} xs={12} lg={6}>
                    <h2>Experience Fassle Free Happiness.</h2>
                    <h5>
                        We are an integrated logistics service company with a
                        direct presence in more than 130 countries with our own
                        offices.
                    </h5>
                    <p>
                        Our approach is to provide fast and effective solutions
                        using a methodological structure that has been proven to
                        increase efficiency, reduce costs and protect our
                        clients in terms of their supply chain
                    </p>
                    <ul>
                        {data.map((i, index) => {
                            return (
                                <li key={index}>
                                    <span>{i.span}</span>
                                    {i.title}
                                </li>
                            );
                        })}
                    </ul>
                    <Home2_happService />
                </Col>

                <Col className={styles.wrapMedia} xs={12} lg={6}>
                    <figure>
                        <img src={imgmain} alt="" />
                    </figure>
                </Col>
            </Row>
        </Container>
    );
}

export default Home2_happiness;
