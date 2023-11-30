import React from "react";
import Service_layer_sta from "./Service_layer_sta";
import styles from "./Ser1_ourSer.module.scss";
import { Col, Container, Row } from "react-bootstrap";

function Ser1_ourSer(props) {
    return (
        <div className={styles.wrapourService}>
            <Container>
                <Row>
                    <Col>
                        <h5 className={styles.Sertitle}>Our services</h5>
                    </Col>
                </Row>
            </Container>
            <Service_layer_sta pages="ser1" kq={false} />
        </div>
    );
}

export default Ser1_ourSer;
