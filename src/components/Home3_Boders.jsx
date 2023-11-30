import React from "react";
import styles from "./Home3_Boders.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import icon1 from "../imgs/home1_iconservice1.png";
import icon2 from "../imgs/home1_iconservice2.png";
import icon3 from "../imgs/home1_iconservice3.png";
import icon4 from "../imgs/home1_iconservice4.png";

import Home2_value from "./Home2_value";
import { Link } from "react-router-dom";

import bg1 from "../imgs/h3_boder1(1).jpg";
import bg2 from "../imgs/home1_imgservice2.jpg";
import bg3 from "../imgs/home1_imgservice3.jpg";
import bg4 from "../imgs/home1_imgservice4.jpg";

function Home3_Boders(props) {
    let data = [
        {
            imgbg: bg1,
            imgic: icon1,
            h4: "air freight",
        },
        {
            imgbg: bg2,
            imgic: icon2,
            h4: "ground freight",
        },
        {
            imgbg: bg3,
            imgic: icon3,
            h4: "maritime freight",
        },
        {
            imgbg: bg4,
            imgic: icon4,
            h4: "railway freight",
        },
    ];
    return (
        <div className={styles.wrapBoder}>
            <Container className={styles.wrapTitle}>
                <Row className={styles.RowTitle}>
                    <Col lg={6} xs={12}>
                        <h2>We Think Beyond The Borders</h2>
                    </Col>
                    <Col lg={6} xs={12}>
                        <p>
                            We are an integrated logistics service company with
                            a direct presence in more than 130 countries with
                            our own offices. Our approach is to provide fast and
                            effective solutions.
                        </p>
                    </Col>
                </Row>
            </Container>
            <div className={styles.wrapImg}>
                <div className={styles.wrapRow}>
                    {data.map((i, index) => {
                        return (
                            <Link to={`/${i.h4}`}>
                                <div className={styles.wrapImgItem} key={index}>
                                    <figure>
                                        <img
                                            src={i.imgbg}
                                            alt=""
                                            className={styles.imgbg}
                                        />
                                        <div className={styles.sb_caption}>
                                            <img src={i.imgic} alt="" />
                                            <h4>{i.h4}</h4>
                                        </div>
                                    </figure>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <Home2_value showRow={false} />
        </div>
    );
}

export default Home3_Boders;
