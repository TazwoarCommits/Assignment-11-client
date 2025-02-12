import axios from "axios";
import { useContext, useEffect } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { useState } from "react";
import RecommendedForMeTable from "../Components/RecommendedForMeTable";


const RecommendedForMe = () => {
    const { user } = useContext(AuthContext);
    const [recForMe, setRecForMe] = useState(0);

    useEffect(() => {
        fetchMyRec();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    const fetchMyRec = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/recommendation/forMe?email=${user.email}`)
        setRecForMe(data);
    }
    return (
        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
            {
                recForMe === 0 ?

                    <h2 className="my-8 md:my-12 text-center text-2xl md:text-4xl font-bold text-cyan-800">No Recommendation</h2>

                    :

                    <div>
                        <h2 className="my-8 md:my-12 text-center text-2xl md:text-4xl font-bold text-cyan-800">Others Recommendations For You</h2>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Recommended Product</th>
                                        <th>Recommender</th>
                                        <th>Your Query</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        recForMe.map((rec, idx) => <RecommendedForMeTable key={idx} rec={rec} idx={idx}></RecommendedForMeTable>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </div>
    );
};

export default RecommendedForMe;