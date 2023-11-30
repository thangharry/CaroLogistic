import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutCarro from "../imgs/aboutimg.jpg";
import h3bgmain from "../imgs/home3_goplaceimgmain.jpg";
import styles from "./HomeAboutCard.module.scss";
import iconAbout_1 from "../imgs/Icon_AboutCarrro_1.png";
import iconAbout_2 from "../imgs/Icon_AboutCarrro_2.png";
import iconAbout_3 from "../imgs/h2_happiness_icon.png";

import Exp35y from "./Exp35y";

function HomeAboutCard({ pages }) {
    let aboutcarro = [
        {
            page: "home1",
            content: [
                {
                    tipTitle: "about carro",
                    title: "We Are The New Logistic Revolutions",
                    subTitle:
                        " We are an integrated logistics service company with a direct presence in more than 130 countries with our own offices.",
                    desc: " Our approach is to provide fast and effective solutions using a methodological structure that has been proven to increase efficiency, reduce costs and protect our clients in terms of their supply chain.",
                    main_img: aboutCarro,
                    icon1: iconAbout_1,
                    text1: "secure packaging",
                    desc1: "Security of the packages we transport.",
                    icon2: iconAbout_2,
                    text2: "Delivery Unlimited",
                    desc2: "Provide customer services a responsible manner.",
                },
            ],
        },
        {
            page: "home3",
            content: [
                {
                    // tipTitle: "about carro",
                    title: "Logistics, Make The World Go Places",
                    subTitle:
                        " We have a solution for every need to send or supply products in any mode of freight transport: land, sea and air.",
                    desc: " Thanks to a complete network of correspondents, a great human team that will offer you advice and personalized treatment, we take and bring your company to any point on the planet.",
                    main_img: h3bgmain,
                    icon1: iconAbout_1,
                    text1: "secure packaging",
                    desc1: "Security of the packages we transport.",
                    icon2: iconAbout_3,
                    text2: "Delivery Unlimited",
                    desc2: "Provide customer services a responsible manner.",
                },
            ],
        },
    ];
    let aboutcarrodata = aboutcarro.find((i) => {
        return i.page === pages;
    });
    return (
        <div className={styles.wrap_Aboutcarro} id="about">
            <Container>
                {aboutcarrodata.content.map((i) => {
                    return (
                        <Row className={styles.wrapRow}>
                            <Col
                                className={styles.About_Content}
                                xs={12}
                                lg={6}
                            >
                                <h5>{i.tipTitle}</h5>
                                <h2>{i.title}</h2>
                                <p className={styles.subTitle}>{i.subTitle}</p>
                                <p className={styles.desc}>{i.desc}</p>
                                <div className={styles.sub_Content}>
                                    <div>
                                        <img src={i.icon1} alt="" />
                                        <h4>{i.text1}</h4>
                                        <p>{i.desc1}</p>
                                    </div>

                                    <div>
                                        <img src={i.icon2} alt="" />
                                        <h4>{i.text2}</h4>
                                        <p>{i.desc2}</p>
                                    </div>
                                </div>
                            </Col>

                            <Col className={styles.About_Img} xs={12} lg={6}>
                                <img src={i.main_img} alt="" />
                                <Exp35y />
                            </Col>
                        </Row>
                    );
                })}
            </Container>
        </div>
    );
}

export default HomeAboutCard;
