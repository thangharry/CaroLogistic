import React, { useEffect } from "react";
import styles from "./Ser2_Exp.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../imgs/home1_imgservice1.jpg";
import img2 from "../imgs/home1_imgservice2.jpg";
import img3 from "../imgs/home1_imgservice3.jpg";
import img4 from "../imgs/home1_imgservice4.jpg";
import img5 from "../imgs/h3_Power-bg.jpg";
import img6 from "../imgs/Ser2_Expbg6.jpg";

import icon1 from "../imgs/Ser2_ExpIcon.png";
import icon2 from "../imgs/Ser2_ExpIcon2.png";
import icon3 from "../imgs/Ser2_ExpIcon3.png";
import icon4 from "../imgs/Ser2_ExpIcon4.png";
import icon5 from "../imgs/Home3_pricing-1.png";
import icon6 from "../imgs/Icon_AboutCarrro_1.png";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
function Ser2_Exp(props) {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    let data = [
        [
            {
                imgbg: img1,
                imgIcon: icon1,
                h4: "air freight",
                p: " The most advanced technology for the optimization of the national and international.",
            },
            {
                imgbg: img2,
                imgIcon: icon2,
                h4: "ground freight",
                p: " Guarantee maximum profitability for our clients, providing logistics and transport services.",
            },
            {
                imgbg: img3,
                imgIcon: icon3,
                h4: "maritime freight",
                p: " We are committed to ensuring that your shipments reach their destination within the agreed.",
            },
        ],
        [
            {
                imgbg: img4,
                imgIcon: icon4,
                h4: "railway freight",
                p: " We take care of the entire customs logistics process so that your operations run smoothly.",
            },
            {
                imgbg: img5,
                imgIcon: icon5,
                h4: "packaging",
                p: " We have at your disposal value-added services and warehousing to multinational and companies.",
            },
            {
                imgbg: img6,
                imgIcon: icon6,
                h4: "warehousing",
                p: " The most advanced technology for the optimization of the national and international.",
            },
        ],
    ];
    return (
        <div className={styles.wrapExp}>
            <Container className={styles.wrapBody}>
                <Row className={styles.title}>
                    <Col>
                        <h5>our services</h5>
                        <h2>logistics beyond expectation</h2>
                    </Col>
                </Row>

                {data.map((i, index) => {
                    return (
                        <Row className={styles.media} key={index}>
                            <Col className={styles.mediaItem} lg={4} xs={12}>
                                <Link to={`/${i[0].h4}`}>
                                    <figure className={styles.bgMedia}>
                                        <img src={i[0].imgbg} alt="" />
                                    </figure>
                                </Link>
                                <div
                                    className={styles.mediaContent}
                                    data-aos="zoom-in"
                                >
                                    <figure>
                                        <img src={i[0].imgIcon} alt="" />
                                    </figure>
                                    <h4>{i[0].h4}</h4>
                                    <p>{i[0].p}</p>
                                </div>
                            </Col>
                            <Col className={styles.mediaItem} lg={4} xs={12}>
                                <Link to={`/${i[1].h4}`}>
                                    <figure className={styles.bgMedia}>
                                        <img src={i[1].imgbg} alt="" />
                                    </figure>
                                </Link>
                                <div
                                    className={styles.mediaContent}
                                    data-aos="zoom-in"
                                >
                                    <figure>
                                        <img src={i[1].imgIcon} alt="" />
                                    </figure>
                                    <h4>{i[1].h4}</h4>
                                    <p>{i[1].p}</p>
                                </div>
                            </Col>
                            <Col className={styles.mediaItem} lg={4} xs={12}>
                                <Link to={`/${i[2].h4}`}>
                                    <figure className={styles.bgMedia}>
                                        <img src={i[2].imgbg} alt="" />
                                    </figure>
                                </Link>
                                <div
                                    className={styles.mediaContent}
                                    data-aos="zoom-in"
                                >
                                    <figure>
                                        <img src={i[2].imgIcon} alt="" />
                                    </figure>
                                    <h4>{i[2].h4}</h4>
                                    <p>{i[2].p}</p>
                                </div>
                            </Col>
                        </Row>
                    );
                })}
            </Container>
        </div>
    );
}

export default Ser2_Exp;
