import React from "react";
import SliderShow from "../components/SliderShow";
import FrontBox from "../components/FrontBox";
import HomeAboutCard from "../components/HomeAboutCard";
import Service_layer_sta from "../components/Service_layer_sta";
import NewLogictic from "../components/NewLogictic";
import CustomerSay from "../components/CustomerSay";
import CustomerContent from "../components/CustomerContent";
import ChooseUs from "../components/ChooseUs";
import OurBlogs from "../components/OurBlogs";

function Home1(props) {
    return (
        <div>
            <SliderShow pages="home1" />

            <FrontBox />

            <HomeAboutCard pages="home1" />

            <Service_layer_sta pages="home1" kq={true} />

            <NewLogictic />

            <CustomerSay />

            <CustomerContent kq={true} />

            <ChooseUs />

            <OurBlogs />
        </div>
    );
}

export default Home1;
