import React from "react";
import Au1_Header from "../components/Au1_Header";
import Au2_NeedHelp from "../components/Au2_NeedHelp";
import FAQ_Ask from "../components/FAQ_Ask";

function FAQ(props) {
    return (
        <div>
            <Au1_Header pages="faq" />

            <FAQ_Ask />

            <Au2_NeedHelp />
        </div>
    );
}

export default FAQ;
