import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import RecTable from "../../Components/RecTable";

const MyRecommendations = () => {
    const { user } = useContext(AuthContext);
    const [myRec, setMyRec] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchMyRec();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    const fetchMyRec = async () => {
        setLoading(true);
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/recommendation?email=${user.email}`)
        setMyRec(data);
        setLoading(false);
    }

    return (
        <div>
            <div>
                <h1 className="text-center my-8 md:my-12 text-2xl md:text-4xl text-cyan-800 ">My Recommendations : {myRec.length}</h1>
            </div>
            {
                loading ? <div className="flex justify-center items-center">
                    <span className="loading loading-spinner loading-lg"></span>
                </div> :
                    <div>
                        {
                            myRec.length === 0 ?

                                <h1 className="text-center my-12 md:my-20  mx-auto text-xl md:text-3xl font-semibold"
                                >You haven&apos;t Recommended Anything Yet</h1>

                                :

                                <div className="w-11/12 mx-auto overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>Query</th>
                                                <th>My Recommendation</th>
                                                <th>Date</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                myRec.map(rec => <RecTable key={rec._id} rec={rec} myRec={myRec} setMyRec={setMyRec}></RecTable>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                        }
                    </div>
            }
        </div>
    );
};

export default MyRecommendations;