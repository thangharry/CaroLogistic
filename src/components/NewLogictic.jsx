import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./NewLogictic.module.scss";
import icon1 from "../imgs/Icon_logictic_1.png";
import icon2 from "../imgs/Icon_logictic_2.png";
import icon3 from "../imgs/Icon_logictic_3.png";
import imgmain from "../imgs/Img_logictic_main.jpg";
import OurValue from "./OurValue";
import AOS from "aos";
import "aos/dist/aos.css";
function NewLogictic(props) {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    let data = [
        {
            img: icon1,
            title: "Safe Warehousing",
            desc: "Provide customer services a responsible manner team that will offer you advice and personalized",
        },

        {
            img: icon2,
            title: "International Shipping",

            desc: "We have experience in home maintenance any surface from new constructions to cabinets.",
        },

        {
            img: icon3,
            title: "Package Protection",

            desc: " We care for the security of packages transported by air and sea with high ethical standards.",
        },
    ];
    return (
        <div className={styles.wrapNewlogictic}>
            <Container>
                <Row className={styles.Row_wrapNewLo}>
                    <Col className={styles.About_Content} xs={12} lg={6}>
                        <h5>Why choose carro</h5>
                        <h2>The New Logistic Revolutions</h2>

                        <div className={styles.sub_Content}>
                            {data.map((i) => {
                                return (
                                    <div data-aos="fade-up">
                                        <img src={i.img} alt="" />
                                        <div
                                            className={styles.logictic_content}
                                        >
                                            <h4>{i.title}</h4>
                                            <p>{i.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Col>

                    <Col className={styles.About_Img} xs={12} lg={6}>
                        <img src={imgmain} alt="" data-aos="flip-down" />
                        <OurValue />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default NewLogictic;
