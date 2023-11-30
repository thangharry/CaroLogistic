import React from "react";
import Au1_Header from "../components/Au1_Header";
import Ser1_ourSer from "../components/Ser1_ourSer";
import Home2_CustomerSay from "../components/Home2_CustomerSay";
import Au2_NeedHelp from "../components/Au2_NeedHelp";
import Ser1_Par from "../components/Ser1_Par";

function Ser1(props) {
    return (
        <div>
            <Au1_Header pages="ser1" />
            <Ser1_ourSer />
            <Ser1_Par />
            <Home2_CustomerSay />
            <Au2_NeedHelp />
        </div>
    );
}

export default Ser1;
