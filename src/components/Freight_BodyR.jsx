import React, { useEffect } from "react";
import styles from "./Freight_BodyR.module.scss";
// import bg from "../imgs/Freight_bgl.jpg";
import { Col, Row } from "react-bootstrap";
import icon1 from "../imgs/Icon_AboutCarrro_1.png";
import icon2 from "../imgs/Au1_icon2.png";

import icon3 from "../imgs/Ser2_ExpIcon.png";
import icon4 from "../imgs/Freight_icon4.png";
import icon5 from "../imgs/Freight_icon5.png";
import icon6 from "../imgs/Freight_icon6.png";

import AOS from "aos";
import "aos/dist/aos.css";
function Freight_BodyR({ Freight }) {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    let wrapbgR = [
        {
            icon: icon1,
            h4: "Safe Warehousing",
            p: "  With dedicated 24/7 customer service and detailed air cargo.",
        },
        {
            icon: icon2,
            h4: "Trusted Packaging",
            p: "  Ship your air cargo without breaking the bottom line.",
        },
    ];
    let data = [
        [
            {
                icon: icon3,
                h4: "International Shipping",
                p: "We have experience in home maintenance any surface from new cabinets.",
            },
            {
                icon: icon4,
                h4: "Package Protection",
                p: "Security of packages transported by air and sea we guarantee total security.",
            },
        ],
        [
            {
                icon: icon5,
                h4: "Package Tracking",
                p: "Security of packages transported by air and sea Authorization and compliance.",
            },
            {
                icon: icon6,
                h4: "Home Delivery",
                p: "Serve clients responsibly be an active community partner ethical standards.",
            },
        ],
    ];

    return (
        <div className={styles.wrapFreightBodyR}>
            <h2>overview</h2>
            <p>
                We provide an integrated network of air and ground transport
                options that give you the widest range of air cargo choices all
                without having to make multiple calls to find the best rates.
                Air freight parcel delivery is the transfer and shipment of
                goods via an air carrier, which may be charter or commercial.
                Such shipments travel out of commercial and passenger aviation
                gateways to anywhere planes can fly and land.
            </p>
            <p>
                Your shipment size and speed requirements are matched to the
                perfect aircraft, eliminating waste and reducing expenses. If
                your deadline does not support using a scheduled flight, your
                shipment can fly via a dedicated air cargo charter service. The
                express shipping options of air freight make it a valuable
                option for coordinating time sensitive shipments to almost
                anywhere in the world.
            </p>
            <figure className={styles.wrapbgR}>
                <img src={Freight} alt="" className={styles.bg} />
                <Row className={styles.wrapItem}>
                    {wrapbgR.map((i, index) => {
                        return (
                            <Col className={styles.Item} key={index}>
                                <img src={i.icon} alt="" />
                                <div className={styles.Content}>
                                    <h4>{i.h4}</h4>
                                    <p>{i.p}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </figure>

            <h2>Power Beyond Cargo</h2>
            <p>
                For those air freight demands that are of the utmost priority,
                we offer next flight out shipping services. Combat crunch time
                while keeping your customers satisfied with either of these air
                cargo options.
            </p>
            <p>
                Customs brokerage firms can determine the most reliable and
                cost-effective means for using air freight options to coordinate
                corporate, individual parcel or shipment deliveries. A customs
                broker can negotiate the vast array of options and determine the
                most applicable means to ensure expedient and on-time delivery.
            </p>

            {data.map((i, index) => {
                return (
                    <Row className={styles.service} key={index}>
                        <Col className={styles.serItem} data-aos="fade-up">
                            <figure>
                                <img src={i[0].icon} alt="" />
                            </figure>
                            <h4>{i[0].h4}</h4>
                            <p>{i[0].p}</p>
                        </Col>
                        <Col
                            className={styles.serItem}
                            data-aos="fade-up"
                            lg={6}
                        >
                            <figure>
                                <img src={i[1].icon} alt="" />
                            </figure>
                            <h4>{i[1].h4}</h4>
                            <p>{i[1].p}</p>
                        </Col>
                    </Row>
                );
            })}
        </div>
    );
}

export default Freight_BodyR;
