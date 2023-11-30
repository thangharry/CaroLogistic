import React from "react";
import Au1_Header from "../components/Au1_Header";
import Home2_MOT from "../components/Home2_MOT";
import Home2_CustomerSay from "../components/Home2_CustomerSay";
import Home3_Blog from "../components/Home3_Blog";
import Au1_Hassle from "../components/Au1_Hassle";
import Au1_Revolutions from "../components/Au1_Revolutions";
import Au1_Exp from "../components/Au1_Exp";

function Au1(props) {
    return (
        <div>
            <Au1_Header pages="au1" />

            <Au1_Hassle />

            <Au1_Revolutions />

            <Home2_MOT showCarousels={true} />

            <Au1_Exp />

            <Home2_CustomerSay />

            <Home3_Blog kq={true} />
        </div>
    );
}

export default Au1;
