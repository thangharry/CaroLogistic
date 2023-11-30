import React from "react";
import Au1_Header from "../components/Au1_Header";
import Au2_NeedHelp from "../components/Au2_NeedHelp";
import Touch from "../components/Touch";

function Contact1(props) {
    return (
        <div>
            <Au1_Header pages="Contact" />
            <Touch />
            <Au2_NeedHelp />
        </div>
    );
}

export default Contact1;
