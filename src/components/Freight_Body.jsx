import React from "react";
import styles from "./Freight_Body.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Freight_BodyL from "./Freight_BodyL";
import Freight_BodyR from "./Freight_BodyR";

function Freight_Body({ Freight, bg }) {
    return (
        <div className={styles.wrapFreight}>
            <Container className={styles.ContainerFreight}>
                <Row className={styles.Content}>
                    <Col className={styles.ContentLeft} lg={4} xs={12}>
                        <Freight_BodyL bg={bg} />
                    </Col>
                    <Col className={styles.ContentRight} lg={8} xs={12}>
                        <Freight_BodyR Freight={Freight} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Freight_Body;
