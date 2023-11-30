import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./ChooseUs.module.scss";
import mainChoose from "../imgs/chooseUs_mainContent.jpg";
import { Link } from "react-router-dom";
function ChooseUs(props) {
    return (
        <div className={styles.wrapChooseUs}>
            <Container>
                <div className={styles.content_chooseUs}>
                    <Row className={styles.twocol}>
                        <Col className={styles.About_Content} xs={12} lg={6}>
                            <h5>A tradition of trust</h5>
                            <h2>why choose us</h2>
                            <p>
                                We have a solution for every need to send or
                                supply products in any form of freight
                                transport: land, sea and air.
                            </p>

                            <p>
                                One of the conclusions of this meeting has been
                                the reactivation of the Logistics Port Committee
                                for Competitiveness.
                            </p>
                            <Button variant="primary">
                                <Link to="/contact 1">learn more</Link>
                            </Button>
                        </Col>

                        <Col xs={12} lg={6}>
                            <div className={styles.sub_Content}>
                                <figure>
                                    <img src={mainChoose} alt="" />
                                </figure>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default ChooseUs;
