import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Image } from "react-bootstrap";
import styles from "./CustomerContent.module.scss";
import { FaQuoteLeft } from "react-icons/fa6";
import cus1 from "../imgs/customer-1.jpg";
import cus2 from "../imgs/customer-2.jpg";
import cus3 from "../imgs/customer-3.jpg";
import cus4 from "../imgs/customer-4.jpg";
import cus5 from "../imgs/testi_icon.jpg";

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

function CustomerContent({ kq }) {
    let data = [
        {
            coment: "My testimonial is from a customer or client. They may be an unknown person to the reader, you need to be sure there isn't anything.",
            auther: cus1,
            name: "jake oliver",
            do: "photographer",
        },
        {
            coment: "Start with your super fans. These are your happiest clients and customers. They may have already offered to be a reference so they mind.",
            auther: cus2,
            name: "emily lauren",
            do: "shop assistant",
        },
        {
            coment: "An endorsement is typically a well-known influencer giving their public support for a brand. But a testimonial is from a customer or client.",
            auther: cus3,
            name: "james reece",
            do: "travel agent",
        },
        {
            coment: "Weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.",
            auther: cus4,
            name: "sophie tracy",
            do: "taxi driver",
        },
        {
            coment: "I have been evaluating the activities of our clients for the continuous improvement of processes, technology and human resources.",
            auther: cus5,
            name: "Wilson Anderson",
            do: "Web Designer",
        },
        {
            coment: "The data can help shippers, manufacturers and transportation providers strategize shipments and plan ahead for capacity.",
            auther: cus4,
            name: "Lily Madison",
            do: "Marketing",
        },
    ];
    let RowFirst = data.slice(0, 3);
    let RowSecond = data.slice(3, 6);

    if (kq) {
        return (
            <Row className={styles.wrapCustomer}>
                <Slider {...settings} className={styles.slider}>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className={styles.CarouselItem}>
                                <div className={styles.coment}>
                                    <figure>
                                        <FaQuoteLeft />
                                    </figure>
                                    <p>{item.coment}</p>
                                </div>

                                <div className={styles.auther}>
                                    <figure>
                                        <Image
                                            src={item.auther}
                                            roundedCircle
                                        />
                                    </figure>
                                    <h4>{item.name}</h4>
                                    <p>{item.do}</p>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </Row>
        );
    } else {
        return (
            <div className={styles.wrapCustomer} id={styles.wrapIdFalse}>
                <Container className={styles.Containerw}>
                    <Row className={styles.CarouselItem}>
                        {RowFirst.map((i, index) => {
                            return (
                                <Col className={styles.Col}>
                                    <div className={styles.coment}>
                                        <figure>
                                            <FaQuoteLeft />
                                        </figure>
                                        <p>{i.coment}</p>
                                    </div>

                                    <div className={styles.auther}>
                                        <figure>
                                            <Image
                                                src={i.auther}
                                                roundedCircle
                                            />
                                        </figure>
                                        <h4>{i.name}</h4>
                                        <p>{i.do}</p>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                    <Row className={styles.CarouselItem}>
                        {RowSecond.map((i, index) => {
                            return (
                                <Col className={styles.Col}>
                                    <div className={styles.coment}>
                                        <figure>
                                            <FaQuoteLeft />
                                        </figure>
                                        <p>{i.coment}</p>
                                    </div>

                                    <div className={styles.auther}>
                                        <figure>
                                            <Image
                                                src={i.auther}
                                                roundedCircle
                                            />
                                        </figure>
                                        <h4>{i.name}</h4>
                                        <p>{i.do}</p>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
                {/* {data.map((item, index) => {
                return (
                    <div key={index} className={styles.CarouselItem}>
                        <div className={styles.coment}>
                            <figure>
                                <FaQuoteLeft />
                            </figure>
                            <p>{item.coment}</p>
                        </div>

                        <div className={styles.auther}>
                            <figure>
                                <Image src={item.auther} roundedCircle />
                            </figure>
                            <h4>{item.name}</h4>
                            <p>{item.do}</p>
                        </div>
                    </div>
                );
            })} */}
            </div>
        );
    }
}

export default CustomerContent;
