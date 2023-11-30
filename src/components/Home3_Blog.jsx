import React, { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "./Home3_Blog.module.scss";

import avar1 from "../imgs/h3_Blogs-1.jpg";
import avar2 from "../imgs/h3_Blogs-2.jpg";
import avar3 from "../imgs/h3_Blogs-3.jpg";
import avar4 from "../imgs/h3_Blogs-4.jpg";

import bg1 from "../imgs/h3_Blogs-bg1.jpg";
import bg2 from "../imgs/h3_Blogs-bg2.jpg";
import bg3 from "../imgs/h3_Blogs-bg3.jpg";
import bg4 from "../imgs/h3_Blogs-bg4.jpg";

import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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
    {
        ava: avar1,
        h4: "Olivia Tracy",
        pInfo: "Plant Manager",
        a: "Shipping Survival Mode Crushing",
        pTitle: " Once both entities have arrived, the development and integration of a single port window will be promoted.",
        img: bg1,
        day: 25,
    },
    {
        ava: avar2,
        h4: "George Reece",
        pInfo: "Logistic Planer",
        a: "Passenger Airlines Start Shifting",
        pTitle: " For the best conclusions of this meeting has been the reactivation of the Port Logistics Committee.",
        img: bg2,
        day: 23,
    },
    {
        ava: avar3,
        h4: "Olivia Tracy",
        pInfo: "Category Manager",
        a: "Ship Orders Crash as Takes a Toll",
        pTitle: " Most of a Logidigal initiative available to all port companies, which began operating in November.",
        img: bg3,
        day: 25,
    },
    {
        ava: avar4,
        h4: "Charlie Kyle",
        pInfo: "Team Lead",
        a: "Weighs on Trade on the Largest",
        pTitle: " The National Federation of Transport Associations of Spain, corroborate these records, adding that happens.",
        img: bg4,
        day: 25,

        ava: avar4,
        h4: "Charlie Kyle",
        pInfo: "Team Lead",
        a: "Weighs on Trade on the Largest",
        pTitle: " The National Federation of Transport Associations of Spain, corroborate these records, adding that happens.",
        img: bg4,
        day: 25,
    },
    {
        ava: avar3,
        h4: "Olivia Tracy",
        pInfo: "Category Manager",
        a: "Ship Orders Crash as Takes a Toll",
        pTitle: " Most of a Logidigal initiative available to all port companies, which began operating in November.",
        img: bg3,
        day: 25,
    },
    {
        ava: avar2,
        h4: "George Reece",
        pInfo: "Logistic Planer",
        a: "Passenger Airlines Start Shifting",
        pTitle: " For the best conclusions of this meeting has been the reactivation of the Port Logistics Committee.",
        img: bg2,
        day: 23,
    },
];
function Home3_Blog({ kq, style, style1 }) {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    let datafirst = data.slice(0, 3);
    let datasecond = data.slice(3, 6);

    if (kq) {
        return (
            <div className={styles.wrapBlog}>
                <Container>
                    <Row>
                        <Col className={styles.titleBlog}>
                            <h5>THIS IS OUT INSPIRATION</h5>
                            <h2>Our Blogs</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Slider {...settings} className={styles.slider}>
                            {data.map((i, index) => {
                                return (
                                    <div
                                        className={styles.wrapCard}
                                        key={index}
                                    >
                                        <figure>
                                            <Image
                                                src={i.ava}
                                                alt=""
                                                roundedCircle
                                                className={styles.avar}
                                            />
                                            <div className={styles.infoPeople}>
                                                <h4>{i.h4}</h4>
                                                <p>{i.pInfo}</p>
                                            </div>
                                        </figure>
                                        <Link className={styles.Title}>
                                            {i.a}
                                        </Link>
                                        <p>{i.pTitle}</p>
                                        <div className={styles.bg}>
                                            <Link to="/blog grid">
                                                <figure
                                                    className={styles.bgImgs}
                                                >
                                                    <img src={i.img} alt="" />
                                                </figure>
                                            </Link>
                                            <div className={styles.time}>
                                                <h6>may</h6>
                                                <p>{i.day}</p>
                                            </div>
                                        </div>
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
            <div className={styles.wrapBlog}>
                <Container>
                    <Row>
                        <Col className={styles.titleBlog}>
                            <h5>THIS IS OUT INSPIRATION</h5>
                            <h2>Our Blogs</h2>
                        </Col>
                    </Row>
                    <Row className={styles.ItemContent}>
                        {datafirst.map((i, index) => {
                            return (
                                <Col
                                    className={styles.wrapCard}
                                    key={index}
                                    id={`${styles[style]}`}
                                    data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                >
                                    <figure>
                                        <Image
                                            src={i.ava}
                                            alt=""
                                            roundedCircle
                                            className={styles.avar}
                                        />
                                        <div className={styles.infoPeople}>
                                            <h4>{i.h4}</h4>
                                            <p>{i.pInfo}</p>
                                        </div>
                                    </figure>
                                    <Link className={styles.Title}>{i.a}</Link>
                                    <p>{i.pTitle}</p>
                                    <div className={styles.bg}>
                                        <Link>
                                            <figure>
                                                <img src={i.img} alt="" />
                                            </figure>
                                        </Link>
                                        <div className={styles.time}>
                                            <h6>may</h6>
                                            <p>{i.day}</p>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                    <Row className={styles.ItemContent}>
                        {datasecond.map((i, index) => {
                            return (
                                <Col
                                    className={styles.wrapCard}
                                    key={index}
                                    id={`${styles[style1]}`}
                                    data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                >
                                    <figure>
                                        <Image
                                            src={i.ava}
                                            alt=""
                                            roundedCircle
                                            className={styles.avar}
                                        />
                                        <div className={styles.infoPeople}>
                                            <h4>{i.h4}</h4>
                                            <p>{i.pInfo}</p>
                                        </div>
                                    </figure>
                                    <Link className={styles.Title}>{i.a}</Link>
                                    <p>{i.pTitle}</p>
                                    <div className={styles.bg}>
                                        <Link>
                                            <figure>
                                                <img src={i.img} alt="" />
                                            </figure>
                                        </Link>
                                        <div className={styles.time}>
                                            <h6>may</h6>
                                            <p>{i.day}</p>
                                        </div>
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

export default Home3_Blog;
<h1>blogs</h1>;
