import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Gallery_search.module.scss";
import Nav from "react-bootstrap/Nav";
import bg1 from "../imgs/Galler_bg1.jpg";
import bg2 from "../imgs/Galler_bg2.jpg";
import bg3 from "../imgs/Galler_bg3.jpg";
import bg4 from "../imgs/Galler_bg4.jpg";
import bg5 from "../imgs/Galler_bg5.jpg";
import bg6 from "../imgs/Galler_bg6.jpg";
import bg7 from "../imgs/Galler_bg7.jpg";
import bg8 from "../imgs/Galler_bg8.jpg";
import bg9 from "../imgs/Galler_bg9.jpg";
import { useSearchParams } from "react-router-dom";

function Gallery_search(props) {
    const [activeKey, setActiveKey] = useState("/home");
    let [searchParam, setsearchParams] = useSearchParams();

    let [state, setstate] = useState("ALL");
    let data = [
        [
            {
                img: bg1,
                title: "LOGISTICS",
                status: "LOGISTIC",
            },
            {
                img: bg2,
                title: "COURIER & CARGO",
                status: "CARGO",
            },
            {
                img: bg4,
                title: "PACKAGING",
                status: "PACKAGING",
            },
        ],
        [
            {
                img: bg3,
                title: "COURIER & CARGO",
                status: "CARGO",
            },
            {
                img: bg5,
                title: "LOGISTICS",
                status: "LOGISTIC",
            },
            {
                img: bg6,
                title: "PACKAGING",
                status: "PACKAGING",
            },
        ],
        [
            {
                img: bg7,
                title: "PACKAGING",
                status: "PACKAGING",
            },
            {
                img: bg8,
                title: "LOGISTICS",
                status: "LOGISTIC",
            },
            {
                img: bg9,
                title: "COURIER & CARGO",
                status: "CARGO",
            },
        ],
    ];
    let handleAll = () => {
        setstate("ALL");
        setsearchParams({ status: "ALL" });
    };
    let handleLog = () => {
        setstate("LOGISTIC");

        setsearchParams({ status: "LOGISTIC" });
    };
    let handleCar = () => {
        setstate("CARGO");

        setsearchParams({ status: "CARGO" });
    };
    let handlePack = () => {
        setstate("PACKAGING");

        setsearchParams({ status: "PACKAGING" });
    };

    let kq = data.map((i) =>
        i.filter((item) => state === "ALL" || state === item.status)
    );

    return (
        <div className={styles.wrapSearch}>
            <Container className={styles.wrapBody}>
                <Row className={styles.nav}>
                    <Col className={styles.bodyNav}>
                        <Nav
                            // variant="pills"
                            activeKey={activeKey}
                            onSelect={(selectedKey) =>
                                setActiveKey(selectedKey)
                            }
                            className={styles.containerNav}
                        >
                            <Nav.Item
                                className={
                                    activeKey === "/home"
                                        ? styles.activeNavItem
                                        : styles.NavItem
                                }
                            >
                                <Nav.Link
                                    href="#"
                                    eventKey="/home"
                                    onClick={() => {
                                        handleAll();
                                    }}
                                >
                                    ALL
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item
                                className={
                                    activeKey === "link-2"
                                        ? styles.activeNavItem
                                        : styles.NavItem
                                }
                            >
                                <Nav.Link
                                    eventKey="link-2"
                                    onClick={() => {
                                        handleLog();
                                    }}
                                >
                                    LOGISTIC
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item
                                className={
                                    activeKey === "link-3"
                                        ? styles.activeNavItem
                                        : styles.NavItem
                                }
                            >
                                <Nav.Link
                                    eventKey="link-3"
                                    onClick={() => {
                                        handleCar();
                                    }}
                                >
                                    CARGO
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item
                                className={
                                    activeKey === "link-4"
                                        ? styles.activeNavItem
                                        : styles.NavItem
                                }
                            >
                                <Nav.Link
                                    eventKey="link-4"
                                    onClick={() => {
                                        handlePack();
                                    }}
                                >
                                    PACKAGING
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                {kq.map((i, index) => {
                    return i.map((item, index) => {
                        return (
                            <Row className={styles.wrapMedia}>
                                <Col className={styles.itemMedia}>
                                    <div className={styles.img_mask}>
                                        <h3>{item.title}</h3>
                                    </div>
                                    <figure>
                                        <img src={item.img} alt="" />
                                    </figure>
                                </Col>
                                <Col className={styles.itemMedia}>
                                    <div className={styles.img_mask}>
                                        <h3>{item.title}</h3>
                                    </div>
                                    <figure>
                                        <img src={item.img} alt="" />
                                    </figure>
                                </Col>
                                <Col className={styles.itemMedia}>
                                    <div className={styles.img_mask}>
                                        <h3>{item.title}</h3>
                                    </div>
                                    <figure>
                                        <img src={item.img} alt="" />
                                    </figure>
                                </Col>
                            </Row>
                        );
                    });
                })}
            </Container>
        </div>
    );
}

export default Gallery_search;
