import React from "react";
import styles from "./Home3_Ourpricing.module.scss";
import icon1 from "../imgs/Home3_pricing-1.png";
import icon2 from "../imgs/Home3_pricing-2.png";
import icon3 from "../imgs/Home3_pricing-3.png";

import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function Home3_Ourpricing(props) {
    let data = [
        {
            icon: icon1,
            h3: "road freight",
            p: "The most advanced technology for the optimization national and international.",
            li: [
                "Ground Transport",
                "Logistics Service",
                "Trucking Service",
                "Warehousing",
                "cargo",
            ],
            dolar: 80,
        },
        {
            icon: icon2,
            h3: "ocean freight",
            p: "Guarantee maximum profitability for our clients, providing logistics transport.",
            li: [
                "Ground Transport",
                "Logistics Service",
                "Trucking Service",
                "Warehousing",
                "storage",
            ],
            dolar: 120,
        },
        {
            icon: icon3,
            h3: "air freight",
            p: "We take care entire customs logistics process your operations run smoothly.",
            li: [
                "Ground Transport",
                "Logistics Service",
                "Trucking Service",
                "Warehousing",
                "storage",
            ],
            dolar: 150,
        },
    ];
    return (
        <div className={styles.wrapPricing}>
            <Container>
                <Row className={styles.PricingTitle}>
                    <Col>
                        <h5>LINKING THE BETTER</h5>
                        <h2>Our Pricing</h2>
                    </Col>
                </Row>
                <Row className={styles.PricingMedia}>
                    {data.map((i, index) => {
                        return (
                            <Col className={styles.ItemMedia} key={index}>
                                <figure>
                                    <img src={i.icon} alt="" />
                                </figure>
                                <h3>{i.h3}</h3>
                                <p>{i.p}</p>
                                <ul>
                                    {i.li.map((li) => {
                                        return <li>{li}</li>;
                                    })}
                                </ul>
                                <hr className={styles.lineHR}></hr>
                                <h4>
                                    <span className={styles.dolar}>$</span>
                                    {i.dolar}
                                    <span className={styles.month}>/mo</span>
                                </h4>
                                <Button>
                                    <Link>order now</Link>
                                </Button>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default Home3_Ourpricing;
