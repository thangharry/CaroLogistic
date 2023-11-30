import React from "react";
import Au1_Header from "../components/Au1_Header";
import Ot_ques from "../components/Ot_ques";
import Home2_MOT from "../components/Home2_MOT";

function Ot(props) {
    return (
        <div>
            <Au1_Header pages="ot1" />
            <Home2_MOT showCarousels={false} className="Ot" />

            <Ot_ques />
        </div>
    );
}

export default Ot;
