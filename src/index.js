import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../src/reset.css";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Au1 from "./pages/Au1";
import Au2 from "./pages/Au2";
import Ot from "./pages/Ot";
import FAQ from "./pages/FAQ";
import Ser1 from "./pages/Ser1";
import Ser2 from "./pages/Ser2";
import Gallery from "./pages/Gallery";
import Careers from "./pages/Careers";
import Testimo from "./pages/Testimo";
import Freight from "./pages/Freight";
import Blog_grid from "./pages/Blog_grid";
import Contact1 from "./pages/Contact1";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home1 />} />

                    <Route path="homepage one" element={<Home1 />} />
                    <Route path="homepage two" element={<Home2 />} />
                    <Route path="homepage three" element={<Home3 />} />
                    <Route path="about us 1" element={<Au1 />} />
                    <Route path="about us 2" element={<Au2 />} />
                    <Route path="our team" element={<Ot />} />
                    <Route path="FAQ" element={<FAQ />} />
                    <Route path="services 1" element={<Ser1 />} />
                    <Route path="services 2" element={<Ser2 />} />
                    <Route path="gallery grid" element={<Gallery />} />
                    <Route path="careers" element={<Careers />} />
                    <Route path="testimonials" element={<Testimo />} />
                    <Route
                        path="air freight"
                        element={<Freight kq={true} pages={"Air Freight"} />}
                    />
                    <Route
                        path="ground freight"
                        element={<Freight kq={true} pages={"Ground Freight"} />}
                    />
                    <Route
                        path="maritime freight"
                        element={
                            <Freight kq={true} pages={"Maritime Freight"} />
                        }
                    />
                    <Route
                        path="railway freight"
                        element={
                            <Freight kq={true} pages={"Railway Freight"} />
                        }
                    />
                    <Route
                        path="packaging"
                        element={<Freight kq={true} pages={"Packaging"} />}
                    />
                    <Route
                        path="warehousing"
                        element={<Freight kq={true} pages={"Warehousing"} />}
                    />
                    <Route path="blog grid" element={<Blog_grid />} />
                    <Route path="contact 1" element={<Contact1 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
