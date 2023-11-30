import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./Au2_NeedHelp.module.scss";
import { Link } from "react-router-dom";
function Au2_NeedHelp(props) {
    return (
        <div className={styles.NeedHelp}>
            <Container className={styles.wrapHelp}>
                <Row className={styles.body}>
                    <Col className={styles.left} lg={6} xs={12}>
                        <h3>NEED HELP WITH LOGISTICS?</h3>
                        <p>We take pride in serving our customers safely.</p>
                    </Col>
                    <Col className={styles.right} lg={6} xs={12}>
                        <Button>
                            <Link to="/contact 1">request a quote</Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Au2_NeedHelp;
