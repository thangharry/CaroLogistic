import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./Au1_Exp.module.scss";
import icon1 from "../imgs/Au1_planeIcon.png";
import icon2 from "../imgs/Au1_carIcon.png";
import icon3 from "../imgs/Au1_shipIcon.png";
import icon4 from "../imgs/Au1_trainIcon.png";

import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
function Au1_Exp(props) {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    let data = [
        {
            icon: icon1,
            h4: "Air freight",
            p: " We take care of the entire customs logistics operations.",
        },
        {
            icon: icon2,
            h4: "Ground freight",
            p: " We have experience in home maintenance any surface.",
        },

        {
            icon: icon3,
            h4: "Maritime freight",
            p: " We are committed to ensuring your shipments destination.",
        },
        {
            icon: icon4,
            h4: "Railway freight",
            p: " The most advanced technology for the optimization national.",
        },
    ];
    let firstRowIcons = data.slice(0, 2);
    let secondRowIcons = data.slice(2, 4);
    return (
        <div className={styles.wrapExp}>
            <Container className={styles.body}>
                <Row className={styles.content}>
                    <Col
                        lg={5}
                        xs={12}
                        className={styles.left}
                        data-aos="zoom-out-right"
                    >
                        <h2>The Best Logistics Beyond Expectation</h2>
                        <p>
                            Our qualified human team guarantees you an essential
                            experience and professionalism, with a personalized
                            treatment.
                            <br />
                            <br />
                            We have a solution for every need to send or supply
                            products in any mode of freight transport: land, sea
                            and air. Thanks to a complete network of
                            correspondents.
                        </p>
                        <Button>
                            <Link to="/services 1">learn more</Link>
                        </Button>
                    </Col>
                    <Col lg={7} xs={12} className={styles.right}>
                        <Row className={styles.wrapRight}>
                            {firstRowIcons.map((i, index) => {
                                return (
                                    <Col
                                        className={styles.rightItem}
                                        key={index}
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom"
                                    >
                                        <figure>
                                            <img src={i.icon} alt="" />
                                        </figure>
                                        <h4>{i.h4}</h4>
                                        <p>{i.p}</p>
                                    </Col>
                                );
                            })}
                        </Row>
                        <Row className={styles.wrapRight}>
                            {secondRowIcons.map((i, index) => {
                                return (
                                    <Col
                                        className={styles.rightItem}
                                        key={index}
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom"
                                    >
                                        <figure>
                                            <img src={i.icon} alt="" />
                                        </figure>
                                        <h4>{i.h4}</h4>
                                        <p>{i.p}</p>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Au1_Exp;
