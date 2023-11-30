import React from "react";
import SliderShow from "../components/SliderShow";
import OurBlogs from "../components/OurBlogs";
import Home2_CustomerSay from "../components/Home2_CustomerSay";
import Home2_value from "../components/Home2_value";
import Home2_service from "../components/Home2_service";
import Home2_happiness from "../components/Home2_happiness";
import Home2_BeyondLogic from "../components/Home2_BeyondLogic";
import Home2_MOT from "../components/Home2_MOT";
import Home2_Newlogic from "../components/Home2_Newlogic";

function Home2(props) {
    return (
        <div>
            <SliderShow pages="home2" />

            <Home2_service />

            <Home2_happiness />

            <Home2_BeyondLogic />

            <Home2_MOT showCarousels={true} />

            <Home2_Newlogic pages="Home2" />

            <Home2_value showRow={true} />

            <Home2_CustomerSay />

            <OurBlogs />
        </div>
    );
}

export default Home2;
