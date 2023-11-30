import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Home2_value.module.scss";

import CountUp from "react-countup";
let data = [
    { span: 1480, p: "countries covered" },
    { span: 5432, p: "packages received" },
    { span: 1200, p: "happy customer" },
    { span: 6780, p: "national offices" },
];
function Home2_value({ showRow, size, image }) {
    if (showRow) {
        return (
            <div className={styles.wrapHome2Value} id={`${styles[size]}`}>
                <Container>
                    {image && (
                        <Row id={styles.bgAu2}>
                            <img src={image} alt="bg" />
                        </Row>
                    )}
                    <Row>
                        {data.map((item, index) => {
                            return (
                                <Col
                                    key={index}
                                    xs={12}
                                    lg={3}
                                    className={styles.ColItem}
                                >
                                    <div>
                                        <span className={styles.numberValue}>
                                            <strong>
                                                <CountUp
                                                    end={item.span}
                                                    duration={8}
                                                />
                                            </strong>
                                        </span>
                                        <p>{item.p}</p>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        );
    } else {
        return (
            <div>
                <Container className={styles.wrapHome2Value}>
                    <Row className={styles.RowItem}>
                        {data.map((item, index) => {
                            return (
                                <Col
                                    key={index}
                                    lg={3}
                                    xs={12}
                                    className={styles.ColItem}
                                >
                                    <div>
                                        <span className={styles.numberValue}>
                                            <strong>
                                                <CountUp
                                                    end={item.span}
                                                    duration={8}
                                                />
                                            </strong>
                                        </span>
                                        <p>{item.p}</p>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home2_value;
