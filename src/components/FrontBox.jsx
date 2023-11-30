import React from "react";
import styles from "./FrontBox.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import imh_1 from "../imgs/frontbox-1.png";
import imh_2 from "../imgs/frontbox-2.png";
import imh_3 from "../imgs/frontbox-3.png";
import imh_4 from "../imgs/frontbox-4.png";
import { Link } from "react-router-dom";

function FrontBox(props) {
    return (
        <div className={styles.FrontBox}>
            <Container>
                <Row className={styles.RowFrontBox}>
                    <Col className={styles.col_item}>
                        <Link>
                            <img src={imh_1} alt="img_1" />
                            <h4>certified process</h4>
                            <p>We drive you towards continuous improvement.</p>
                        </Link>
                    </Col>
                    <Col className={styles.col_item}>
                        <Link>
                            <img src={imh_2} alt="img_2" />

                            <h4>hight technology</h4>
                            <p>Provide Authorization and Compliance Service.</p>
                        </Link>
                    </Col>
                    <Col className={styles.col_item}>
                        <Link>
                            <img src={imh_3} alt="img_3" />

                            <h4>awarded company</h4>
                            <p>The best highly efficient customs brokerage.</p>
                        </Link>
                    </Col>
                    <Col className={styles.col_item}>
                        <Link>
                            <img src={imh_4} alt="img_4" />
                            <h4>24/7 Support</h4>
                            <p>
                                We care for security of the packages transport.
                            </p>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FrontBox;
