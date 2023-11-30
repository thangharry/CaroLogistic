import React from "react";
import styles from "./Header.module.scss";
import { Button, Container, Nav, Stack } from "react-bootstrap";
import {
    FaFacebookF,
    FaInstagram,
    FaPhone,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
function Header(props) {
    return (
        <Container
            className={styles.wrapHeader}
            style={{ position: "relative", zIndex: 2 }}
        >
            <Stack direction="horizontal" gap={3}>
                <div className="p-2">
                    <Nav id={styles.socialMedia}>
                        <Nav.Item className={styles.Item_socialMedia}>
                            <Nav.Link to="/">
                                <FaFacebookF />
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item className={styles.Item_socialMedia}>
                            <Nav.Link to="/">
                                <FaTwitter />
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item className={styles.Item_socialMedia}>
                            <Nav.Link to="/">
                                <FaInstagram />
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item className={styles.Item_socialMedia}>
                            <Nav.Link to="/">
                                <FaYoutube />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="p-2 ms-auto" id={styles.ContactPhone}>
                    <FaPhone className={styles.IconPhone} />
                    <a href="tel:09999999">0123.678.356</a>
                </div>
                <div className="p-2" id={styles.button_submit}>
                    <Button
                        variant="primary"
                        style={{ backgroundColor: "rgb(252,76,2)" }}
                    >
                        <Link> get quote</Link>
                    </Button>
                </div>
            </Stack>
        </Container>
    );
}

export default Header;
