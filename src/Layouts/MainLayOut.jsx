import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";


const MainLayOut = () => {
    return (
        <div className="font-poppins ">
            <nav className="w-full bg-cyan-300/15 mx-auto sticky top-0 z-10 backdrop-blur-lg">
                <Navbar></Navbar>
            </nav>
            <main className="min-h-[calc(100vh-242px)]">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;