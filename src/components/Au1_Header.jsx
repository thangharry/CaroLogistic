import React from "react";
import styles from "./Au1_Header.module.scss";
// import imgbg from "../imgs/HeaderAbout.jpg";
let data = [
    {
        page: "au1",
        title: "About us",
        p: "About us",
    },
    {
        page: "ot1",
        title: "Our Team",
        p: "Our Team",
    },
    {
        page: "faq",
        title: "FAQ",
        p: "FAQ",
    },
    {
        page: "ser1",
        title: "Services",
        p: "Services",
    },
    {
        page: "gallery",
        title: "Gallery Grid",
        p: "Gallery Grid",
    },
    {
        page: "career",
        title: "Careers",
        p: "Careers",
    },

    {
        page: "testimo",
        title: "Testimonials",
        p: "Testimonials",
    },
    {
        page: "Air Freight",
        title: "Air Freight",
        p: "Air Freight",
    },
    {
        page: "Ground Freight",
        title: "Ground Freight",
        p: "Ground Freight",
    },
    {
        page: "Maritime Freight",
        title: "Maritime Freight",
        p: "Maritime Freight",
    },
    {
        page: "Railway Freight",
        title: "Railway Freight",
        p: "Railway Freight",
    },
    {
        page: "Packaging",
        title: "Packaging",
        p: "Packaging",
    },
    {
        page: "Warehousing",
        title: "Warehousing",
        p: "Warehousing",
    },
    {
        page: "Blog Grid",
        title: "Blog Grid",
        p: "Blog Grid",
    },
    {
        page: "Contact",
        title: "Contact Us",
        p: "Contact Us",
    },
];

function Au1_Header({ pages, bg }) {
    let datakq = data.find((i) => i.page === pages);
    return (
        <div className={styles.wrapHeader} id={`${styles[bg]}`}>
            <div className={styles.content}>
                <h1>{datakq.title}</h1>
                <p>Home &nbsp;|&nbsp; {datakq.p} </p>
            </div>
        </div>
    );
}

export default Au1_Header;
