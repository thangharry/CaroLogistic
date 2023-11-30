import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Footer.module.scss";
import {
    FaFacebookF,
    FaInstagram,
    FaMapPin,
    FaPhone,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import Logo from "../imgs/logo_carro.png";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup
        .string()
        .required("Email là bắt buộc")
        .email("Email phải có dạng example@example.com"),
});
function Footer(props) {
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className={styles.wrapFooter}>
            <Container>
                <Row>
                    <Col className={styles.contact_item} xs={12} lg={4}>
                        <span className={styles.footer_contact_Icon}>
                            <FaPhone />
                        </span>
                        <a href="tel:09999999">0123.678.356</a>
                    </Col>
                    <Col className={styles.contact_item} xs={12} lg={4}>
                        <span className={styles.footer_contact_Icon}>
                            <GrMail />
                        </span>
                        <a href="mailto:thang@proVIP.vn">thangINFO@pro.vn</a>
                    </Col>
                    <Col className={styles.contact_item} xs={12} lg={4}>
                        <span className={styles.footer_contact_Icon}>
                            <FaMapPin />
                        </span>
                        <p>22 Phố Mới – Thủy Sơn – Thủy Nguyên – Hải Phòng</p>
                    </Col>
                </Row>

                <Row className={styles.main_footer}>
                    <Col lg={5} xs={12} className={styles.col_1}>
                        <div>
                            <img src={Logo} alt="Logo-carro" />
                            <p>
                                We have a solution for every need to send or
                                supply products in any mode of freight transport
                                land, sea and air We are an integrated logistics
                                service company with a direct presence in more
                                than 130 countries.
                            </p>
                            <div className={styles.footer_socialMedia}>
                                <ul className={styles.ListIcon}>
                                    <li>
                                        <Link>
                                            <FaFacebookF />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <FaTwitter />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <FaInstagram />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <FaYoutube />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                    <Col lg={2} xs={12} className={styles.col_2}>
                        <h5>About</h5>
                        <ul className={styles.footer_service}>
                            <li>
                                <Link>Our Company</Link>
                            </li>
                            <li>
                                <Link>Team</Link>
                            </li>
                            <li>
                                <Link>Contact Us</Link>
                            </li>

                            <li>
                                <Link>FAQ</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={2} xs={12} className={styles.col_3}>
                        <h5>Company</h5>
                        <ul className={styles.footer_service}>
                            <li>
                                <Link>Our Services</Link>
                            </li>
                            <li>
                                <Link>Gallery</Link>
                            </li>
                            <li>
                                <Link>Blogs</Link>
                            </li>

                            <li>
                                <Link>Packaging</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3} xs={12} className={styles.col_4}>
                        <h5>Newsletter</h5>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className={styles.form_Register}
                        >
                            <input
                                type="email"
                                {...register("email")}
                                placeholder="Your email address"
                            />

                            <button type="submit">sign up</button>
                            <p>
                                <em>
                                    Subscribe to our newsletter to receive the
                                    latest news about our services.
                                </em>
                            </p>
                        </form>
                    </Col>
                </Row>

                <Row className={styles.footer_copyright}>
                    <p>
                        Copyright © 2023 Carro. Thiết kế website bởi P.V.THANG
                    </p>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
