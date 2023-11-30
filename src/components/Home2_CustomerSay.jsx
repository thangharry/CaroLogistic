import React from "react";
import styles from "./Home2_CustomerSay.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import CustomerContent from "./CustomerContent";
function Home2_CustomerSay(props) {
    return (
        <div>
            <Container className={styles.wrapCustomer}>
                <Row className={styles.title}>
                    <Col>
                        <h5>CONNECTING PEOPLE</h5>
                        <h2>What Our Customer Says</h2>
                    </Col>
                </Row>
                <CustomerContent kq={true} />
            </Container>
        </div>
    );
}

export default Home2_CustomerSay;
