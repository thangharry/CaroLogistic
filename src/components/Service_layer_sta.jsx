import React, { useState } from "react";
import styles from "./Service_layer_sta.module.scss";
import main_bg from "../imgs/service_layer-bg.jpg";
import { Col, Container, Row } from "react-bootstrap";

import imgservice1 from "../imgs/home1_imgservice1.jpg";
import imgservice2 from "../imgs/home1_imgservice2.jpg";
import imgservice3 from "../imgs/home1_imgservice3.jpg";

import iconservice1 from "../imgs/home1_iconservice1.png";
import iconservice2 from "../imgs/home1_iconservice2.png";
import iconservice3 from "../imgs/home1_iconservice3.png";
import { Link } from "react-router-dom";
let service_layer_data = [
    {
        page: "home1",
        title: "we take your business further",
        content: [
            {
                img1: imgservice1,
                icon1: iconservice1,
                title1: " air freight",
                desc1: "The most advanced technology for the optimization of the national and international. ",
                link1: "air freight",
            },
            {
                img1: imgservice2,
                icon1: iconservice2,
                title1: "ground freight",
                desc1: "We ensure that our customers' products are always available 200 trucks with which we operate.",
                link1: "ground freight",
            },
            {
                img1: imgservice3,
                icon1: iconservice3,
                title1: "maritime freight",
                desc1: "Guarantee maximum profitability for our clients, providing logistics and transport services.",
                link1: "maritime freight",
            },
        ],
    },
    {
        page: "ser1",
        title: "Logistics Beyond Expectation",
        content: [
            {
                img1: imgservice1,
                icon1: iconservice1,
                title1: " air freight",
                desc1: "The most advanced technology for the optimization of the national and international. ",
                link1: "air freight",
            },
            {
                img1: imgservice2,
                icon1: iconservice2,
                title1: "ground freight",
                desc1: "We ensure that our customers' products are always available 200 trucks with which we operate.",
                link1: "ground freight",
            },
            {
                img1: imgservice3,
                icon1: iconservice3,
                title1: "maritime freight",
                desc1: "Guarantee maximum profitability for our clients, providing logistics and transport services.",
                link1: "maritime freight",
            },
        ],
    },
];

function Service_layer_sta({ pages, kq }) {
    let serviceContent = service_layer_data.find((i) => i.page === pages);
    if (kq) {
        return (
            <div className={styles.wrap_service_layer}>
                <Container>
                    <Row>
                        <Col className={styles.service_title}>
                            <h2>
                                {serviceContent.title}
                                {/* we take your <span> business further</span> */}
                            </h2>
                        </Col>
                    </Row>
                    <Row className={styles.product_main_content}>
                        {serviceContent.content.map((i, index) => {
                            return (
                                <Col
                                    key={index}
                                    className={styles.product_service}
                                >
                                    <Link to={`/${i.link1}`}>
                                        <figure
                                            className={styles.wrap_img_product}
                                        >
                                            <img src={i.img1} alt="" />
                                        </figure>
                                        <div
                                            className={
                                                styles.wrap_content_product
                                            }
                                        >
                                            <figure>
                                                <img src={i.icon1} alt="" />
                                            </figure>
                                            <h3>{i.title1}</h3>
                                        </div>
                                    </Link>

                                    <p>{i.desc1}</p>
                                </Col>
                            );
                        })}
                    </Row>
                    <Row>
                        <Col className={styles.LinkService}>
                            <p>
                                PLEASE CLICK <Link to="/services 1">HERE </Link>
                                TO SEE ALL SERVICES
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    } else {
        return (
            <div id={styles.wrapSer1}>
                <Container>
                    <Row>
                        <Col className={styles.service_title}>
                            <h2>
                                {serviceContent.title}
                                {/* we take your <span> business further</span> */}
                            </h2>
                        </Col>
                    </Row>
                    <Row className={styles.product_main_content}>
                        {serviceContent.content.map((i, index) => {
                            return (
                                <Col
                                    key={index}
                                    className={styles.product_service}
                                >
                                    <Link to={`/${i.link1}`}>
                                        <figure
                                            className={styles.wrap_img_product}
                                        >
                                            <img src={i.img1} alt="" />
                                        </figure>
                                        <div
                                            className={
                                                styles.wrap_content_product
                                            }
                                        >
                                            <figure>
                                                <img src={i.icon1} alt="" />
                                            </figure>
                                            <h3>{i.title1}</h3>
                                        </div>
                                    </Link>

                                    <p>{i.desc1}</p>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Service_layer_sta;
