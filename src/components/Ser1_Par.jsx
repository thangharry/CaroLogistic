import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Ser1_Par.module.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import imgbg from "../imgs/chooseUs_mainContent.jpg";
function Ser1_Par(props) {
    return (
        <div className={styles.wrapPar}>
            <Container className={styles.body}>
                <Row className={styles.bodyContent}>
                    <Col lg={5} xs={12} className={styles.wrapContent}>
                        <h2>A Partnership Based On Trust </h2>
                        <p>
                            We define logistics as a business activity whose
                            main objective is the planning and management.
                        </p>
                        <p>
                            Logistics and its activities play a fundamental role
                            in the management of storage and transport
                            activities, since they serve as a link between.
                        </p>
                        <Button>
                            <Link to="/about us 1">learn more</Link>
                        </Button>
                    </Col>
                    <Col lg={7} xs={12} className={styles.thumb}>
                        <figure>
                            <img src={imgbg} alt="" />
                        </figure>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Ser1_Par;
