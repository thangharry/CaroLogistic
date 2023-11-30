import React from "react";
import styles from "./Home2_happService.module.scss";
import icon1 from "../imgs/h2_happiness_icon.png";
import icon2 from "../imgs/Icon_AboutCarrro_2.png";
import { Col, Container, Row } from "react-bootstrap";
function Home2_happService(props) {
    let data = [
        {
            icon: icon1,
            h4: "secure packaging",
            p: "Security of the packages we transport",
        },
        {
            icon: icon2,
            h4: "Fast Shipping",
            p: "Provide customer excellent services.",
        },
    ];
    return (
        <Container className={styles.wrapHappService}>
            <Row>
                {data.map((i, index) => {
                    return (
                        <Col className={styles.item} key={index} xs={12} lg={6}>
                            <div className={styles.wrapItemhap}>
                                <figure>
                                    <img src={i.icon} alt="" />
                                </figure>
                                <div>
                                    <h4>{i.h4}</h4>
                                    <p>{i.p}</p>
                                </div>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default Home2_happService;
