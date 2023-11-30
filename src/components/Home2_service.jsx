import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Home2_service.module.scss";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img_1 from "../imgs/h2_service_1.jpg";
import img_2 from "../imgs/h2_service_2.jpg";
import img_3 from "../imgs/home1_imgservice3.jpg";
import img_4 from "../imgs/home1_imgservice4.jpg";

import icon_1 from "../imgs/home1_iconservice1.png";
import icon_2 from "../imgs/home1_iconservice2.png";
import icon_3 from "../imgs/home1_iconservice3.png";
import icon_4 from "../imgs/home1_iconservice4.png";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

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

function Home2_service(props) {
    let data = [
        {
            img: img_1,
            icon: icon_1,
            name: "Air Freight",
            p: " The most advanced technology for the optimization of the national and international.",
            link: "air freight",
        },
        {
            img: img_2,
            icon: icon_2,
            name: "Ground Freight",
            p: " We ensure that our customers' products are always available 200 trucks with which we operate.",
            link: "ground freight",
        },
        {
            img: img_3,
            icon: icon_3,
            name: "Maritime Freight",
            p: " Guarantee maximum profitability for our clients, providing logistics and transport services reception and dispatch.",
            link: "maritime freight",
        },
        {
            img: img_4,
            icon: icon_4,
            name: "Railway Freight",
            p: " We work with door-to-door product deliveries and offer comprehensive, quality customers solutions.",
            link: "railway freight",
        },
    ];
    return (
        <div id="about">
            <Container className={styles.wrapService}>
                <Row className={styles.servoceTitle}>
                    <Col>
                        <h5>we make connections</h5>
                        <h2>Our best services</h2>
                    </Col>
                </Row>

                <Row className={styles.wrapContent}>
                    <Slider {...settings} className={styles.button}>
                        {data.map((i, index) => {
                            return (
                                <div className={styles.wrapItem} key={index}>
                                    <Link to={`/${i.link}`}>
                                        <figure>
                                            <img src={i.img} alt="" />
                                        </figure>
                                        <div className={styles.supTitle}>
                                            <img src={i.icon} alt="" />
                                            <p>{i.name}</p>
                                        </div>
                                    </Link>

                                    <div className={styles.content}>
                                        <p>{i.p}</p>
                                        <Link to={`/${i.link}`}>
                                            read more
                                            <span>
                                                <FaArrowRightLong />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </Row>
            </Container>
        </div>
    );
}

export default Home2_service;
