import React, { useState } from "react";
import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import styles from "./Navbar.module.scss";
import Logo from "../imgs/logo_carro.png";
import { Link, NavLink } from "react-router-dom";
import { TiThMenuOutline } from "react-icons/ti";
import Button from "react-bootstrap/Button";
function Navbars(props) {
    let navItems = [
        {
            name: "home",
            subItem: ["homepage one", "homepage two", "homepage three"],
        },
        {
            name: "about",
            subItem: ["about us 1", "about us 2", "our team", "FAQ"],
        },
        {
            name: "pages",
            subItem: [
                "services 1",
                "services 2",
                "gallery grid",
                "careers",
                "testimonials",
            ],
        },
        {
            name: "services",
            subItem: [
                "air freight",
                "ground freight",
                "maritime freight",
                "railway freight",
                "packaging",
                "warehousing",
            ],
        },

        {
            name: "blogs",
            subItem: ["blog grid"],
        },

        {
            name: "contact",
            subItem: ["contact 1"],
        },
    ];
    let [isOpen, setisOpen] = useState(false);
    let handleClick = () => {
        setisOpen(!isOpen);
    };
    return (
        <Container
            style={{ position: "relative", zIndex: 2 }}
            className={styles.wrapNavbar}
        >
            <Row className={styles.navbar}>
                <Col className={styles.nav_Item_logo}>
                    <Link to="homepage one">
                        <img src={Logo} alt="Carro" />
                    </Link>
                </Col>

                <Col xs={8} className={styles.nav_Item}>
                    {navItems.map((navItem, index) => {
                        return (
                            <DropdownButton
                                key={index}
                                title={navItem.name}
                                className={styles.nav_pages}
                                menuVariant="light"
                            >
                                {navItem.subItem.map((item, index) => {
                                    // console.log(item);
                                    return (
                                        <Dropdown.Item
                                            className={styles.sub_title_nav}
                                            key={index}
                                        >
                                            <NavLink to={`${item}`}>
                                                {item}
                                            </NavLink>
                                        </Dropdown.Item>
                                    );
                                })}
                            </DropdownButton>
                        );
                    })}
                </Col>

                <Col className={styles.NavbarMobile}>
                    <Button onClick={() => handleClick()}>
                        <TiThMenuOutline />
                    </Button>
                    {isOpen && (
                        <div className={styles.wrapNavbarMobile}>
                            {navItems.map((navItem, index) => {
                                return (
                                    <DropdownButton
                                        key={index}
                                        title={navItem.name}
                                        className={styles.nav_pages}
                                        menuVariant="light"
                                    >
                                        {navItem.subItem.map((item, index) => {
                                            // console.log(item);
                                            return (
                                                <Dropdown.Item
                                                    className={
                                                        styles.sub_title_nav
                                                    }
                                                    key={index}
                                                >
                                                    <NavLink to={`${item}`}>
                                                        {item}
                                                    </NavLink>
                                                </Dropdown.Item>
                                            );
                                        })}
                                    </DropdownButton>
                                );
                            })}
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default Navbars;
