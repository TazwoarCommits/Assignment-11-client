import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import RecTable from "../../Components/RecTable";

const MyRecommendations = () => {
    const { user } = useContext(AuthContext);
    const [myRec, setMyRec] = useState([]);


    useEffect(() => {
        fetchMyRec();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    const fetchMyRec = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/recommendation?email=${user.email}`)
        setMyRec(data)
    }
    
    return (
        <div>
            <div>
                <h1 className="text-center my-8 md:my-16 text-2xl md:text-4xl ">My Recommendations : {myRec.length}</h1>

            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Query</th>
                            <th>My Recommendation</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myRec.map(rec => <RecTable key={rec._id} rec={rec}></RecTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyRecommendations;