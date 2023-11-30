import React from "react";
import Au1_Header from "../components/Au1_Header";
import Au2_NeedHelp from "../components/Au2_NeedHelp";
import CustomerContent from "../components/CustomerContent";

function Testimo(props) {
    return (
        <div>
            <Au1_Header pages="testimo" />
            <CustomerContent kq={false} />

            <Au2_NeedHelp />
        </div>
    );
}

export default Testimo;
