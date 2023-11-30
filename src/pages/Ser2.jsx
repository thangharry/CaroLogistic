import React from "react";
import Au1_Header from "../components/Au1_Header";
import Au2_NeedHelp from "../components/Au2_NeedHelp";
import Ser2_Exp from "../components/Ser2_Exp";

function Ser2(props) {
    return (
        <div>
            <Au1_Header pages="ser1" />
            <Ser2_Exp />
            <Au2_NeedHelp />
        </div>
    );
}

export default Ser2;
