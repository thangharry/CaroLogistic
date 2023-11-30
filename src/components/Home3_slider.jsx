import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./Home3_slider.module.scss";
import img1 from "../imgs/home3_posterbg.jpg";
import img2 from "../imgs/home3_posterbg2.jpg";
import img3 from "../imgs/home3_posterbg3.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home3_slider(props) {
    let data = [
        {
            img: img1,
            h5: "Power beyond cargo",
            h1: "Logistics Innovation Technology",
        },
        {
            img: img2,
            h5: "Live borderless",
            h1: "Logistics Beyond Expectation",
        },
        {
            img: img3,
            h5: "Linking better",
            h1: "Globally Connected Locally Invested",
        },
    ];
    return (
        <div className={styles.wrapSlider}>
            <Carousel>
                {data.map((i, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <figure>
                                <img src={i.img} alt="" />
                            </figure>
                            <Carousel.Caption className={styles.Content}>
                                <h5>{i.h5}</h5>
                                <h1>{i.h1}</h1>
                                <Button>
                                    <Link to="/about us 1">read more</Link>
                                </Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default Home3_slider;
