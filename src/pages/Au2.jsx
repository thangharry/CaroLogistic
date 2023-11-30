import React from "react";
import Au1_Header from "../components/Au1_Header";
import Home2_MOT from "../components/Home2_MOT";
import Home3_Blog from "../components/Home3_Blog";
import Home2_Newlogic from "../components/Home2_Newlogic";
import Au2_Exp from "../components/Au2_Exp";
import Home2_value from "../components/Home2_value";
import bg from "../imgs/Au2_Decbg.jpg";
import Au2_NeedHelp from "../components/Au2_NeedHelp";
import Au2_Service from "../components/Au2_Service";
function Au2(props) {
    return (
        <>
            <Au1_Header pages="au1" />

            <Au2_Exp />

            <Home2_value showRow={true} size="sizeheight" image={bg} />

            <Home2_MOT showCarousels={true} />

            <Home2_Newlogic pages="Au2" color="bgc" />

            <Au2_Service />

            <Home3_Blog kq={true} />

            <Au2_NeedHelp />
        </>
    );
}

export default Au2;
