import React from "react";
import styles from "./Home2_MOT.module.scss";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../imgs/h2_MOT_1.jpg";
import img2 from "../imgs/h2_MOT_2.jpg";
import img3 from "../imgs/h2_MOT_3.jpg";
import img4 from "../imgs/h2_MOT_4.jpg";
import img5 from "../imgs/h2_MOT_5.jpg";
import img6 from "../imgs/Ot_man6bg.jpg";

import { Col, Container, Row } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const settings = {
    // các cài đặt khác...
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992, // Đây là breakpoint mới cho điện thoại
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

let data = [
    { img: img1, h3: "harry callum", p: "warehouse principal" },
    { img: img2, h3: "Sophie Lauren", p: "Logistics Coordinator" },
    { img: img3, h3: "Oliver Jacob", p: "Logistics Analyst" },
    { img: img4, h3: "James Charlie", p: "Logistics Analyst" },
    { img: img5, h3: "George Reece", p: "Transportation Analyst" },
    { img: img6, h3: "thomas rhys", p: "team lead" },
];
function Home2_MOT({ showCarousels, className }) {
    let Home2 = data.slice(0, data.length - 1);
    let firstItem = data.slice(0, 3);
    let secondItem = data.slice(3, 6);
    if (showCarousels) {
        return (
            <div className={styles.wrapMOT}>
                <Container className={styles.wrap_MOTCotent}>
                    <Row>
                        <Col>
                            <h5>go far together</h5>
                            <h2>meet our team</h2>
                        </Col>
                    </Row>
                    <Row className={styles.wrapCarou}>
                        <Slider {...settings} className={styles.slider}>
                            {Home2.map((i, index) => {
                                return (
                                    <div
                                        className={styles.carouselsItem}
                                        key={index}
                                    >
                                        <figure>
                                            <img src={i.img} alt="team" />
                                        </figure>
                                        <h3>{i.h3}</h3>
                                        <p>{i.p} </p>
                                    </div>
                                );
                            })}
                        </Slider>
                    </Row>
                </Container>
            </div>
        );
    } else {
        return (
            <div className={styles.wrapMOT}>
                <Container
                    className={styles.wrap_MOTCotent}
                    id={`${styles[className]}`}
                >
                    <Row>
                        <Col>
                            <h5>go far together</h5>
                            <h2>meet our team</h2>
                        </Col>
                    </Row>
                    <Row className={styles.wrapCarou}>
                        {firstItem.map((i, index) => {
                            return (
                                <Col lg={4} xs={12}>
                                    <div
                                        className={styles.carouselsItem}
                                        key={index}
                                    >
                                        <figure>
                                            <img src={i.img} alt="team" />
                                        </figure>
                                        <h3>{i.h3}</h3>
                                        <p>{i.p} </p>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                    <Row className={styles.wrapCarou}>
                        {secondItem.map((i, index) => {
                            return (
                                <Col lg={4} xs={12}>
                                    <div
                                        className={styles.carouselsItem}
                                        key={index}
                                    >
                                        <figure>
                                            <img src={i.img} alt="team" />
                                        </figure>
                                        <h3>{i.h3}</h3>
                                        <p>{i.p} </p>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home2_MOT;
