import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Care_Teamwork.module.scss";
import chuky from "../imgs/h3_Power-chuky.png";
import imgmain from "../imgs/Care_teamBg.jpg";
function Care_Teamwork(props) {
    return (
        <div>
            <Container className={styles.wrapTeam}>
                <Row className={styles.wrapBody}>
                    <Col className={styles.Content}>
                        <h5>GO FAR TOGETHER</h5>
                        <h2>Teamwork Accomplish Great Things</h2>
                        <p>
                            Our approach is to provide fast and effective
                            solutions using a methodological structure that has
                            been proven to increase efficiency, reduce costs and
                            protect our clients in terms of their supply chain.
                        </p>
                        <p>
                            We evaluate the activities of our clients for the
                            continuous improvement of processes, technology and
                            human resources, thus ensuring total client
                            satisfaction, complying with norms and standards.
                        </p>
                        <figure>
                            <img src={chuky} alt="chữ ký" />
                        </figure>
                    </Col>
                    <Col className={styles.wrapImg}>
                        <figure>
                            <img src={imgmain} alt="" />
                        </figure>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Care_Teamwork;
