import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import List from "../../Components/LayOut/List";
import GridLayout from "../../Components/LayOut/GridLayout";
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import MQ from "../../assets/myQ.jpg"
import animateQ from "../../assets/Lottie/Ask.json";
import Lottie from "lottie-react";

const MyQueries = () => {
    const { user } = useContext(AuthContext);
    const [myPostedQueries, setMyPostedQueries] = useState([]);
    const [loading , setLoading] = useState(true) ; 
    const [grid, setGrid] = useState(3);

    // console.log(user);

    useEffect(() => {
        fetchMyQueries();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    const fetchMyQueries = async () => {
        setLoading(true) ; 
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/queries?email=${user.email}`)
        setMyPostedQueries(data);
        setLoading(false) ;
    }


    return (
        <div>
            <div
                className="hero h-[40vh] md:h-[60vh] w-full md:w-11/12 mx-auto relative">
                <img className="h-[40vh] md:h-[60vh]"
                    src={MQ} alt="" />
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="">
                    <Lottie className="w-48 md:w-56 xl:w-96 absolute hidden lg:flex top-[10%] xl:top-[10%] md:right-[40%]" animationData={animateQ}></Lottie>
                </div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <Link to="/post"><button className="btn text-base-200 bg-cyan-800 hover:bg-cyan-900/80">Post Your Query</button></Link>
                    </div>
                </div>
            </div>
            <h1 className="my-8 md:my-20 text-cyan-800  text-center text-2xl md:text-4xl font-bold underline"
            >Posted Query of &quot;{user.displayName ? user.displayName : user.email.split("@")[0]}&quot;</h1>
            <div className="flex justify-between md:w-11/12 mx-auto">
                <h1>Total Posted : {myPostedQueries.length}</h1>
                <div className="flex gap-2 mb-8">
                    <button onClick={() => setGrid(1)} className="btn"><FaList /></button>
                    <button onClick={() => setGrid(2)} className="btn"><IoGrid /></button>
                    <button onClick={() => setGrid(3)} className="btn"><BsFillGrid3X3GapFill /></button>
                </div>
            </div>
            {
                loading ? <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div> :
                <div>
                    {
                myPostedQueries.length === 0 ?

                    <h1 className="my-12 md:my-12 text-center mx-auto text-xl md:text-3xl font-semibold text-cyan-800 ">Post Your First Query</h1>

                    :

                    <div>
                        {
                            grid === 1 ?

                                <div className="overflow-x-auto my-10 md:my-16">
                                    <table className="table w-10/12 mx-auto">
                                        <thead>
                                            <tr>
                                                <th>Sl. No </th>
                                                <th>Title</th>
                                                <th>Posted</th>
                                                <th>Recommend Count</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                myPostedQueries.map((query, idx) => <List key={query._id} query={query} idx={idx}></List>)
                                            }
                                        </tbody>
                                    </table>
                                </div>

                                :

                                <div className={`grid ${grid == 2 ? `md:grid-cols-2 max-w-5xl` : `md:grid-cols-2 lg:grid-cols-3`} md:w-11/12 mx-auto justify-items-center gap-y-10 gap-x-8`}>
                                    {
                                        myPostedQueries.map(query => <GridLayout key={query._id} query={query} myPostedQueries={myPostedQueries} setMyPostedQueries={setMyPostedQueries}></GridLayout>)
                                    }
                                </div>
                        }
                    </div>
            }
                </div>
            }
        </div>
    );
};

export default MyQueries;