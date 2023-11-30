import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Au2_NeedHelp from "./Au2_NeedHelp";
import styles from "./Ot_ques.module.scss";
function Ot_ques(props) {
    return (
        <div className={styles.wrapQues}>
            <Container className={styles.body}>
                <Row className={styles.wraptitle}>
                    <Col className={styles.subtitle}>
                        <h5>WE THINK DIFFERENT</h5>
                        <h2>
                            We are available for any questions about your
                            business
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Au2_NeedHelp />
                </Row>
            </Container>
        </div>
    );
}

export default Ot_ques;
