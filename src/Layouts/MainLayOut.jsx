import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";


const MainLayOut = () => {
    return (
        <div className="font-poppins ">
            <Navbar></Navbar>
            <main className="min-h-[calc(100vh-242px)]">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;