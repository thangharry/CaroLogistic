import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./CustomerSay.module.scss";

function CustomerSay(props) {
    return (
        <div className={styles.wrapCustomer}>
            <Container>
                <Row>
                    <Col className={styles.title}>
                        <h5>this is out inspiration</h5>
                        <h2> What our customer says</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CustomerSay;
