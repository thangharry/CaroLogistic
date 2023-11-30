import React from "react";
import styles from "./SliderShow.module.scss";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../imgs/home1-slider-1.jpg";
import slider2 from "../imgs/home1-slider-2.jpg";
import slider3 from "../imgs/home1-slider-3.jpg";
import slider4 from "../imgs/home2-slider-4(1).jpg";
import slider5 from "../imgs/home2-slider-5.jpg";
import slider6 from "../imgs/home2-slider-6.jpg";

import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

import { Link } from "react-scroll";

// text1
let data = [
    {
        page: "home1",
        value: [
            {
                img: slider1,
                h3: "the new logistic revolutions",
                p: "Safety,quality,professionalism",
                button1: "about us",
                button2: "contact",
            },

            {
                img: slider2,
                h3: "your modern logistic partner",
                p: "Special handling.Extra service",
                button1: "about us",
                button2: "contact",
            },

            {
                img: slider3,
                h3: "logistic beyond expectation",
                p: "Better solutions to better you",
                button1: "about us",
                button2: "contact",
            },
        ],
    },

    {
        page: "home2",
        value: [
            {
                img: slider4,
                h3: "experience hassle free happiness",
                p: "we are creating economic opportunities",
                button1: "about us",
                button2: "contact",
            },
            {
                img: slider6,
                h3: "fueling your logistics chain",
                p: "globally connected, locally invested",
                button1: "about us",
                button2: "contact",
            },

            {
                img: slider5,
                h3: "shipments delivered on time",
                p: "the quality shows in every move we make",
                button1: "about us",
                button2: "contact",
            },
        ],
    },
];

function SliderShow({ pages }) {
    // text2
    const dataValue = data.find((i) => i.page === pages);

    return (
        <div>
            <Carousel className={styles.wrap_slider}>
                {/* text3 */}
                {dataValue.value.map((item, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img src={item.img} alt="slide-1" />
                            <Carousel.Caption className={styles.slider_Content}>
                                <h3>{item.h3}</h3>
                                <p>{item.p}</p>
                                <div className={styles.slider_Button}>
                                    <Button variant="primary">
                                        <Link
                                            activeClass="active"
                                            to="about"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                        >
                                            {item.button1}
                                        </Link>
                                    </Button>
                                    <span>or</span>
                                    <Button
                                        variant="primary"
                                        className={styles.btn2}
                                    >
                                        <Link
                                            activeClass="active"
                                            to="about"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                        >
                                            {item.button2}
                                        </Link>
                                    </Button>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default SliderShow;
