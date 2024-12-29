import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import GridLayout from "../Components/LayOut/GridLayout";
import MQ from "../assets/myQ.jpg"
import givaway1 from "../assets/givaway1-2024.jpg"
import givaway2 from "../assets/givaway2.jpg"
import givaway4 from "../assets/givaway4.webp"
import givaway3 from "../assets/givaway3.jpg"
import 'aos/dist/aos.css';  // Import the AOS CSS styles
import AOS from 'aos';      // Import AOS JavaScript

AOS.init(
    {
        duration: 2000
    }
)

const Home = () => {
    const allQueries = useLoaderData();
    const slicedQueries = allQueries.slice(0, 6);

    return (
        <div>
            <Banner></Banner>
            <div className="mt-12 md:mt-20 w-11/12 mx-auto">
                <h2 className="my-8 md:my-20 text-cyan-800 text-center text-2xl md:text-4xl font-bold">Recently Asked Query</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">

                    {
                        slicedQueries.map((query, idx) => <GridLayout key={idx} query={query}></GridLayout>)
                    }
                </div>
            </div>
            <div className="mt-12 md:mt-20 w-11/12 mx-auto">
                <h2 className="my-8 md:my-20 text-cyan-800 text-center text-2xl md:text-4xl font-bold">Our Events and giveaway</h2>
                <div className="my-12 md:my-20 w-11/12 mx-auto">
                    <div data-aos="flip-left"
                        className="hero h-[30vh] md:h-[30vh] relative">
                        <img className="w-full h-[30vh] md:h-[30vh]"
                            src={MQ} alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <Link to={""}><button className="btn text-base-200 bg-cyan-800 hover:bg-cyan-900/80">Upcoming New Year Events</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-center my-8">
                        <h3>AppleMania is Going on</h3>
                        <p>Participate and Post Queries to Win the Giveaway</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex items-center justify-around">
                        <Link to={"#"}>
                            <div className="flex flex-col items-center justify-center h-full">
                                <div>
                                    <img className="w-32 h-32 rounded-lg"
                                        src={givaway3} alt="" />
                                </div>
                                <div className="my-3">
                                    <p className="text-center">Get a chance to Iphone-16 Pro</p>
                                </div>
                            </div>
                        </Link>
                        <Link to={"#"}>
                            <div className="flex flex-col items-center justify-center h-full">
                                <div>
                                    <img className="w-32 h-32 rounded-lg"
                                        src={givaway2} alt="" />
                                </div>
                                <div className="my-3">
                                    <p>Get a chance to Iphone-16 Pro</p>
                                </div>
                            </div>
                        </Link>
                        <Link>
                            <div className="flex flex-col items-center justify-center h-full">
                                <div>
                                    <img className="w-32 h-32 rounded-lg"
                                        src={givaway1} alt="" />
                                </div>
                                <div className="my-3">
                                    <p>Get a chance to Iphone-16 Pro</p>
                                </div>
                            </div>
                        </Link>
                        <Link>
                            <div className="flex flex-col items-center justify-center h-full">
                                <div>
                                    <img className="w-32 h-32 rounded-lg"
                                        src={givaway4} alt="" />
                                </div>
                                <div className="my-3">
                                    <p>Get a chance to Iphone-16 Pro</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;