import React from "react";
import Au1_Header from "../components/Au1_Header";
import Freight_Body from "../components/Freight_Body";
import bgAir from "../imgs/Freight_bgl.jpg";
import bgGround from "../imgs/GroundFreight-Car.jpg";
import bgMerti from "../imgs/MaritimeFreight_ship.jpg";
import bgRain from "../imgs/RainFreight_bgMain.jpg";
import bgPack from "../imgs/Packbg_box.jpg";
import bgWare from "../imgs/Warebg.jpg";
let data = [
    {
        page: "Air Freight",
        bg: "bgI",
        FR: bgAir,
    },

    {
        page: "Ground Freight",
        bg: "bgII",
        FR: bgGround,
    },
    {
        page: "Maritime Freight",
        bg: "bgIII",
        FR: bgMerti,
    },
    {
        page: "Railway Freight",
        bg: "bgIIII",
        FR: bgRain,
    },
    {
        page: "Packaging",
        bg: "bgIIIII",
        FR: bgPack,
    },
    {
        page: "Warehousing",
        bg: "bgIIIIII",
        FR: bgWare,
    },
];

function Freight({ kq, pages }) {
    let result = data.find((i) => i.page === pages);
    if (kq) {
        return (
            <div>
                <Au1_Header pages={result.page} bg={result.bg} />
                <Freight_Body Freight={result.FR} bg={result.bg} />
            </div>
        );
    }
}
export default Freight;
