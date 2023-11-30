import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./FAQ_Ask.module.scss";
function FAQ_Ask(props) {
    let data = [
        [
            {
                h3: "01",
                h5: "What I can ship?",
                p: " We support all palletised and bulk tank transport. Please contact us for any specific requirements.",
            },
            {
                h3: "02",
                h5: "How do transport logistics?",
                p: " The value of a transport logistics solution in enhancing customer satisfaction and service overstated.",
            },
        ],
        [
            {
                h3: "03",
                h5: "Can logistics actually help reduce?",
                p: " Logistics platform where planners and managers have increased visibility and transparency into the constantly.",
            },
            {
                h3: "04",
                h5: "What additional fees will apply?",
                p: " Warehousing networks, and long lead times between warehousing and delivery addition, transport logistics.",
            },
        ],
        [
            {
                h3: "05",
                h5: "What happen if my package is lost?",
                p: " Customers will not only be more apt to work with a given manufacturing company manufacturing company will.",
            },
            {
                h3: "06",
                h5: "What I can ship?",
                p: " We support all palletised and bulk tank transport. Please contact us for any specific requirements.",
            },
        ],
    ];
    return (
        <Container className={styles.wrapFAQ}>
            <Row className={styles.title}>
                <Col>
                    <h5>CUSTOMERS FIRST</h5>
                    <h2>Frequently Asked Questions</h2>
                </Col>
            </Row>

            {data.map((item, index) => {
                return (
                    <Row className={styles.content} key={index}>
                        <Col className={styles.media}>
                            <div className={styles.faq_number}>
                                <h3>{item[0].h3}</h3>
                            </div>
                            <div className={styles.media_body}>
                                <h5>{item[0].h5}</h5>
                                <p>{item[0].p}</p>
                            </div>
                        </Col>
                        <Col className={styles.media} lg={6} xs={12}>
                            <div className={styles.faq_number}>
                                <h3>{item[1].h3}</h3>
                            </div>
                            <div className={styles.media_body}>
                                <h5>{item[1].h5}</h5>
                                <p>{item[1].p}</p>
                            </div>
                        </Col>
                    </Row>
                );
            })}
        </Container>
    );
}

export default FAQ_Ask;
