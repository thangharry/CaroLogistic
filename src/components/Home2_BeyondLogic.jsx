import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Home2_BeyondLogic.module.scss";
import Image from "react-bootstrap/Image";

import avarta from "../imgs/h2_BeyondLogic-imgav.jpg";
import chuky from "../imgs/h2_BeyondLogic-imgchuky.png";
import bgmain from "../imgs/h2_BeyondLogic-imgms.jpg";

import imh_1 from "../imgs/frontbox-1.png";
import imh_2 from "../imgs/frontbox-2.png";
import imh_3 from "../imgs/frontbox-3.png";
import imh_4 from "../imgs/frontbox-4.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Home2_BeyondLogic(props) {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    let data = [
        {
            img: imh_1,
            h4: "certified process",
            p: "We drive you towards continuous improvement.",
        },
        {
            img: imh_2,
            h4: "Hight Technology",
            p: "Provide Authorization and Compliance Service.",
        },
        {
            img: imh_3,
            h4: "awarded company",
            p: "The best highly efficient customs brokerage.",
        },
        {
            img: imh_4,
            h4: "24/7 Support",
            p: "We care for security of the packages transport.",
        },
    ];
    return (
        <div className={styles.wrapbg}>
            <Container className={styles.wrap_Beyond}>
                <Row className={styles.Rowwwrap}>
                    <Col
                        className={styles.wrap_BeyondContent}
                        xs={12}
                        lg={5}
                        data-aos="fade-up"
                    >
                        <h2>Go Beyond Logistics, Make The World Go Round</h2>
                        <h5>
                            We represent Carro, a company with more than 35
                            years in the market and globally positionedamong the
                            top three companies in the logistics sector.
                        </h5>
                        <p>
                            Our qualified human team guarantees you an essential
                            experience and professionalism, with a personalized
                            treatment to solve any of your needs.
                        </p>
                        <div className={styles.Grid}>
                            <figure>
                                <Image src={avarta} alt="" roundedCircle />
                            </figure>
                            <h5>Charlie Kyle</h5>
                            <p>Caro CEO</p>
                        </div>
                        <div className={styles.wrapChuky}>
                            <figure>
                                <img src={chuky} alt="" />
                            </figure>
                        </div>
                    </Col>

                    <Col
                        className={styles.wrap_BeyondMedia}
                        lg={7}
                        xs={12}
                        data-aos="flip-left"
                    >
                        <Row className={styles.wrapRow}>
                            {data.slice(0, 2).map((i, index) => {
                                return (
                                    <Col
                                        className={styles.imgItem}
                                        key={index}
                                        xs={12}
                                    >
                                        <figure>
                                            <img src={i.img} alt="" />
                                        </figure>
                                        <h4>{i.h4}</h4>
                                        <p>{i.p}</p>
                                    </Col>
                                );
                            })}
                        </Row>

                        <Row className={styles.wrapRow}>
                            {data.slice(2, 4).map((i, index) => {
                                return (
                                    <Col
                                        className={styles.imgItem}
                                        key={index}
                                        xs={12}
                                        lg={5}
                                    >
                                        <figure>
                                            <img src={i.img} alt="" />
                                        </figure>
                                        <h4>{i.h4}</h4>
                                        <p>{i.p}</p>
                                    </Col>
                                );
                            })}
                        </Row>

                        <Row className={styles.mainbg}>
                            <figure>
                                <img src={bgmain} alt="" />
                            </figure>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home2_BeyondLogic;
