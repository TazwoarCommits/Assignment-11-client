import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import GridLayout from "../Components/LayOut/GridLayout";
import MQ from "../assets/newYear.jpg"
import givaway1 from "../assets/givaway1-2024.jpg"
import givaway2 from "../assets/givaway2.jpg"
import givaway4 from "../assets/givaway4.webp"
import givaway3 from "../assets/givaway3.jpg"
import goal from "../assets/goal.jpg"
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
        <div className="w-full md:w-11/12 mx-auto">
            <Banner></Banner>
            <div className="mt-12 w-full mx-auto">
                <h2 className="my-8 md:my-20 text-cyan-800  text-center text-2xl md:text-4xl font-bold underline">Recently Asked Query</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">

                    {
                        slicedQueries.map((query, idx) => <GridLayout key={idx} query={query}></GridLayout>)
                    }
                </div>
            </div>
            <div className="mt-12 w-full mx-auto">
                <h2 className="my-8 md:my-20 text-cyan-800  text-center text-3xl md:text-4xl font-bold underline">Our Events and giveaway</h2>
                <div className="my-12 md:my-20 w-full mx-auto">
                    <div data-aos="flip-left"
                        className="hero h-[30vh] md:h-[30vh] relative">
                        <img className="w-full h-[30vh] md:h-[30vh]"
                            src={MQ} alt="" />
                        <div className="hero-overlay bg-opacity-60 dark:bg-opacity-20"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <p><button className="px-8 py-2 rounded-xl text-base-200 bg-cyan-800 dark:bg-cyan-600">Upcoming New Year Events</button></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-center mb- md:mb-12">
                        <h3 className="text-xl md:text-2xl text-cyan-800 ">AppleMania is Going on</h3>
                        <p className="text-cyan-900/80  text-sm ">Participate and Post Queries to Win the Giveaway</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex items-center justify-around">
                        <Link to={"#"}>
                            <div data-aos="fade-up" className="flex flex-col items-center justify-center h-full">
                                <div>
                                    <img className="w-32 h-32 rounded-lg"
                                        src={givaway3} alt="" />
                                </div>
                                <div className="my-3">
                                    <p className="text-center">Win Apple vision pro</p>
                                </div>
                            </div>
                        </Link>
                        <Link to={"#"}>
                            <div data-aos="fade-up" className="flex flex-col items-center justify-center h-full">
                                <div>
                                    <img className="w-32 h-32 rounded-lg"
                                        src={givaway2} alt="" />
                                </div>
                                <div className="my-3">
                                    <p>Win Macbook pro</p>
                                </div>
                            </div>
                        </Link>
                        <Link>
                            <div data-aos="fade-up" className="flex flex-col items-center justify-center h-full">
                                <div>
                                    <img className="w-32 h-32 rounded-lg"
                                        src={givaway1} alt="" />
                                </div>
                                <div className="my-3">
                                    <p>Win a Iphone-16 Pro</p>
                                </div>
                            </div>
                        </Link>
                        <Link>
                            <div data-aos="fade-up" className="flex flex-col items-center justify-center h-full">
                                <div>
                                    <img className="w-32 h-32 rounded-lg"
                                        src={givaway4} alt="" />
                                </div>
                                <div className="my-3">
                                    <p>Get a chance to Win Ipad mini</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="my-12 md:my-20 w-full mx-auto">
                <h2 className="my-8 md:my-20 text-cyan-800  text-center text-3xl md:text-4xl font-bold underline">Our Goal</h2>
                <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mx-2">
                        <p>At Ask-Me, our mission is to help you make confident purchasing decisions by providing personalized product recommendations tailored to your unique preferences and needs.We Aim to :</p>
                        <ul className="m-3 list-inside list-disc">
                            <li><span>Simplify Choices:</span> Cut through the clutter of endless options by offering tailored suggestions.</li>
                            <li><span>Save Time and Money : </span> Help you find the best value products without hours of research</li>
                            <li><span>Build Trust : </span>Provide unbiased and transparent recommendations based on expert analysis and user feedback.</li>
                            <li><span>Empower Users : </span> Enable informed decisions with clear, concise, and reliable insights.</li>
                        </ul>
                        <p>Your satisfaction is our top priority, and we strive to make shopping easier, smarter, and more enjoyable for everyone.</p>
                    </div>
                    <div className="md:w-1/2">
                        <img className="w-full h-80 md:rounded-xl"
                        src={goal} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;