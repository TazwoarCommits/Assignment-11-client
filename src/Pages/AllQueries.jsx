import axios from "axios";
import { useEffect, useState } from "react";
import GridLayout from "../Components/LayOut/GridLayout";
import List from "../Components/LayOut/List";
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";


const AllQueries = () => {
    const [queries, setQueries] = useState([]);
    const [grid, setGrid] = useState(3);

    useEffect(() => {
        fetchQueries();
    }, []);

    const fetchQueries = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/queries`)
        setQueries(data);
    }

    return (
        <div>
             <div className="flex justify-between md:w-11/12 xl:w-9/12 mx-auto">
                            <h1>Asked Queries</h1>
                            <div className="flex gap-2">
                                <button onClick={() => setGrid(1)} className="btn"><FaList /></button>
                                <button onClick={() => setGrid(2)} className="btn"><IoGrid /></button>
                                <button onClick={() => setGrid(3)} className="btn"><BsFillGrid3X3GapFill /></button>
                            </div>
                        </div>
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
                                        queries.map((query, idx) => <List key={query._id} query={query} idx={idx}></List>)
                                    }
                                </tbody>
                            </table>
                        </div>

                        :

                        <div className={`grid ${grid == 2 ? `md:grid-cols-2` : `md:grid-cols-3`} md:w-11/12 xl:w-9/12 mx-auto justify-items-center gap-y-10 gap-x-8`}>
                            {
                                queries.map(query => <GridLayout key={query._id} query={query}></GridLayout>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default AllQueries;