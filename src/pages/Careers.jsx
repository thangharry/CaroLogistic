import React from "react";
import Au2_NeedHelp from "../components/Au2_NeedHelp";
import Au1_Header from "../components/Au1_Header";
import Care_Teamwork from "../components/Care_Teamwork";
import Care_Seclec from "../components/Care_Seclec";
import Care_Posit from "../components/Care_Posit";

function Careers(props) {
    return (
        <div>
            <Au1_Header pages="career" />
            <Care_Teamwork />
            <Care_Seclec />
            <Care_Posit />
            <Au2_NeedHelp />
        </div>
    );
}

export default Careers;
