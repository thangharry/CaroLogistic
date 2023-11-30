import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Au2_Service.module.scss";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import icon1 from "../imgs/Au1_planeIcon.png";
import icon2 from "../imgs/Au1_carIcon.png";
import icon3 from "../imgs/Au1_shipIcon.png";
import icon4 from "../imgs/Au1_trainIcon.png";

import { Link } from "react-router-dom";
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
function Au2_Service(props) {
    let data = [
        {
            icon: icon1,
            title: "air freight",
            text: " The most advanced technology for the optimization of the national and international.",
            link: "read more",
        },
        {
            icon: icon2,
            title: "ground freight",
            text: " Guarantee maximum profitability for our clients, providing logistics and transport services.",
            link: "read more",
        },
        {
            icon: icon3,
            title: "maritime freight",
            text: " We are committed to ensuring that your shipments reach their destination within the agreed.",
            link: "read more",
        },
        {
            icon: icon4,
            title: "railway freight",
            text: " We offer solutions for every need to send products and supplies in any mode of transport.",
            link: "read more",
        },
    ];
    return (
        <div className={styles.wrapSer}>
            <Container className={styles.contSer}>
                <Row>
                    <Col className={styles.title}>
                        <h4>go far together</h4>
                        <h2>our services</h2>
                    </Col>
                </Row>
                <Row className={styles.slide}>
                    <Slider {...settings} className={styles.button}>
                        {data.map((i, index) => {
                            return (
                                <div className={styles.item} key={index}>
                                    <figure>
                                        <img src={i.icon} alt="" />
                                    </figure>
                                    <h3>{i.title}</h3>
                                    <p>{i.text}</p>
                                    <Link to={`/${i.title}`}>{i.link}</Link>
                                </div>
                            );
                        })}
                    </Slider>
                </Row>
            </Container>
        </div>
    );
}

export default Au2_Service;
