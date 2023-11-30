import React from "react";
import Home3_slider from "../components/Home3_slider";
import HomeAboutCard from "../components/HomeAboutCard";
import Home2_CustomerSay from "../components/Home2_CustomerSay";
import ChooseUs from "../components/ChooseUs";
import Home3_Boders from "../components/Home3_Boders";
import Home3_Ourpricing from "../components/Home3_Ourpricing";
import Home3_Power from "../components/Home3_Power";
import Home3_Blog from "../components/Home3_Blog";

function Home3(props) {
    return (
        <div>
            <Home3_slider />

            <HomeAboutCard pages="home3" />

            <Home3_Boders />

            <Home2_CustomerSay />

            <Home3_Power />

            <Home3_Ourpricing />

            <ChooseUs />

            <Home3_Blog kq={true} />
        </div>
    );
}

export default Home3;
