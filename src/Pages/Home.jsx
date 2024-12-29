import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import GridLayout from "../Components/LayOut/GridLayout";
import MQ from "../assets/myQ.jpg"
import givaway1 from "../assets/givaway1-2024.jpg"
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
                <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">

                    {
                        slicedQueries.map((query, idx) => <GridLayout key={idx} query={query}></GridLayout>)
                    }
                </div>
            </div>
            <div className="mt-12 md:mt-20 w-11/12 mx-auto">
                <h2 className="my-8 md:my-20 text-cyan-800 text-center text-2xl md:text-4xl font-bold">Our Events and giveaway</h2>
                <div className="flex items-center justify-around">
                    <div className="flex flex-col items-center justify-center h-full">
                        <div>
                            <img className="w-32 h-32 rounded-lg"
                            src={givaway1} alt="" />
                        </div>
                        <div className="my-3">
                            <p className="text-center">Get a chance to Iphone-16 Pro</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full">
                        <div>
                            <img className="w-32 h-32 rounded-lg"
                            src={givaway1} alt="" />
                        </div>
                        <div className="my-3">
                            <p>Get a chance to Iphone-16 Pro</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full">
                        <div>
                            <img className="w-32 h-32 rounded-lg"
                            src={givaway1} alt="" />
                        </div>
                        <div className="my-3">
                            <p>Get a chance to Iphone-16 Pro</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full">
                        <div>
                            <img className="w-32 h-32 rounded-lg"
                            src={givaway1} alt="" />
                        </div>
                        <div className="my-3">
                            <p>Get a chance to Iphone-16 Pro</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 md:mt-20 w-11/12 mx-auto">
                <div data-aos="flip-left"
                    className="hero h-[30vh] md:h-[30vh] relative">
                    <img className="w-full h-[30vh] md:h-[30vh]"
                        src={MQ} alt="" />
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <Link to={""}><button className="btn text-base-200 bg-cyan-800 hover:bg-cyan-900/80">Post Your Query</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;