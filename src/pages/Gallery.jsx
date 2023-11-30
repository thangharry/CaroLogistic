import React from "react";
import Au1_Header from "../components/Au1_Header";
import Au2_NeedHelp from "../components/Au2_NeedHelp";
import Gallery_search from "../components/Gallery_search";

function Gallery(props) {
    return (
        <div>
            <Au1_Header pages="gallery" />
            <Gallery_search />
            <Au2_NeedHelp />
        </div>
    );
}

export default Gallery;
