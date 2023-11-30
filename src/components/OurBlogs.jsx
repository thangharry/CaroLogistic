import React from "react";
import styles from "./OurBlogs.module.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import img_1 from "../imgs/home1_imgservice1.jpg";
import img_2 from "../imgs/chooseUs_bg.jpg";
import img_3 from "../imgs/Blog_item.jpg";
import { Link } from "react-router-dom";
function OurBlogs(props) {
    return (
        <Container>
            <div className={styles.wrapBlog}>
                <Row>
                    <Col>
                        <div className={styles.Header_content}>
                            <h5>this is out inspiration</h5>
                            <h2>Our Blogs</h2>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <div className={styles.container}>
                        <div className={styles.img1}>
                            <Link>
                                <figure>
                                    <img
                                        src={img_1}
                                        alt=""
                                        className={styles.img1_bg}
                                    />
                                    <div className={styles.dayTime}>
                                        <h6>May</h6>
                                        <p>25</p>
                                    </div>
                                </figure>
                                <div className={styles.airlinesContent}>
                                    <h4>Passenger Airlines Start Shifting</h4>
                                    <p>
                                        For the best conclusions of this meeting
                                        has been the reactivation of the Port
                                        Logistics Committee.
                                    </p>
                                    <Button>
                                        <Link to="/blog grid">read More</Link>
                                    </Button>
                                </div>
                            </Link>
                        </div>

                        <div className={styles.img2}>
                            <Container className={styles.imgContainer}>
                                <Row className={styles.imgRow}>
                                    <Col className={styles.col}>
                                        <Link to="/blog grid">
                                            <figure>
                                                <img src={img_2} alt="" />
                                            </figure>
                                        </Link>
                                    </Col>
                                    <Col className={styles.img2_content}>
                                        <p className={styles.time}>
                                            May 12,2021
                                        </p>
                                        <h4>Shipping Survival Mode Crushing</h4>
                                        <p>
                                            Once both entities have arrived, the
                                            development and integration.
                                        </p>
                                        <Button>
                                            <Link to="/blog grid">
                                                Read More
                                            </Link>
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className={styles.img3}>
                            <Container className={styles.imgContainer}>
                                <Row className={styles.imgRow}>
                                    <Col className={styles.col}>
                                        <Link to="/blog grid">
                                            <figure>
                                                <img src={img_3} alt="" />
                                            </figure>
                                        </Link>
                                    </Col>
                                    <Col className={styles.img2_content}>
                                        <p className={styles.time}>
                                            May 11,2021
                                        </p>
                                        <h4>
                                            Ship Orders Crash as Takes a Toll
                                        </h4>
                                        <p>
                                            The National Transport Associations
                                            these records.
                                        </p>
                                        <Button>
                                            <Link to="/blog grid">
                                                Read More
                                            </Link>
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Row>
            </div>
        </Container>
    );
}

export default OurBlogs;
