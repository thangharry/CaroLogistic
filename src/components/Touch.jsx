import React from "react";
import styles from "./Touch.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
function Touch(props) {
    return (
        <div>
            <Container className={styles.wrapTouch}>
                <Row className={styles.BodyTouch}>
                    <Col className={styles.wrapForm}>
                        <h2>Get In Touch</h2>
                        <p>
                            If you have any questions to support your business,
                            please contact us directly.
                        </p>
                        <Form>
                            <Row className={styles.Row1}>
                                <Col>
                                    <Form.Control placeholder="Name" />
                                </Col>
                                <Col>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control
                                            type="email"
                                            placeholder="Email address"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group
                                className="mb-3"
                                controlId="formGridAddress1"
                            >
                                <Form.Control placeholder="Please enter your phone" />
                            </Form.Group>

                            <FloatingLabel
                                className={styles.Row3}
                                controlId="floatingTextarea2"
                                label="Comments"
                            >
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: "100px" }}
                                />
                            </FloatingLabel>
                        </Form>
                        <Button size="lg">Send message</Button>
                    </Col>
                    <Col className={styles.wrapMap}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.97840469474!2d105.79576368009918!3d21.022734639725968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1700806592019!5m2!1svi!2s"
                            width="600"
                            height="450"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Touch;
