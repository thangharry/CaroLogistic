import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbars";
import "./reset.css";
function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;
