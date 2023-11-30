import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Au1_Hassle.module.scss";
import bg_main from "../imgs/Au1_Hassel_bg.jpg";
import icon1 from "../imgs/Icon_AboutCarrro_1.png";
import icon2 from "../imgs/Au1_hassel_icon.png";
function Au1_Hassle(props) {
    let data = [
        {
            icon: icon1,
            h3: "Safe Warehousing",
            p: "We Keep high ethical standards.",
        },
        {
            icon: icon2,
            h3: "Trusted Packaging",
            p: "Be an active community partner.",
        },
    ];
    return (
        <div>
            <Container className={styles.wrapHass}>
                <Row>
                    <Col className={styles.wrapMedia} lg={6} xs={12}>
                        <figure>
                            <img src={bg_main} alt="" />
                        </figure>
                    </Col>
                    <Col className={styles.wrapContent} lg={6} xs={12}>
                        <h5>BORDERLESS LOGISTICS</h5>
                        <h2>The Experience Hassle Free Happiness.</h2>
                        <h4>
                            We have a solution for every need to send or supply
                            products in any mode of freight transport: land, sea
                            and air
                        </h4>
                        <p>
                            Our qualified human team guarantees you an
                            experience and essential professionalism, with a
                            personalized service to solve any of your needs.
                            Thanks to a complete network of correspondents, a
                            great human team that will offer you advice and
                            personalized. treatment
                        </p>
                        <Container className={styles.sub_content}>
                            <Row className={styles.ww}>
                                {data.map((i, index) => {
                                    return (
                                        <Col
                                            className={styles.ContentItem}
                                            key={index}
                                            xs={12}
                                            lg={6}
                                        >
                                            <figure>
                                                <img src={i.icon} alt="" />
                                            </figure>
                                            <h3>{i.h3}</h3>
                                            <p>{i.p}</p>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Au1_Hassle;
