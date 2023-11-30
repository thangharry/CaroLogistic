import React from "react";
import Au1_Header from "../components/Au1_Header";
import Home3_Blog from "../components/Home3_Blog";
import Au2_NeedHelp from "../components/Au2_NeedHelp";

function Blog_grid(props) {
    return (
        <div>
            <Au1_Header pages="Blog Grid" />
            <Home3_Blog kq={false} style={"Col"} style1={"Col1"} />

            <Au2_NeedHelp />
        </div>
    );
}

export default Blog_grid;
