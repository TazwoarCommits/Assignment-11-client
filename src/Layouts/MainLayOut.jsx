import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";


const MainLayOut = () => {
    return (
        <div className="font-poppins h-screen">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;