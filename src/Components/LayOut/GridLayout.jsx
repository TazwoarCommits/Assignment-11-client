import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdMore } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";



const GridLayout = ({ query , myPostedQueries , setMyPostedQueries }) => {
    const { title, recommendCount, productImage, _id, author } = query;
    const { user } = useContext(AuthContext);
    const location = useLocation() ;

    const handleDelete = (id) => {
        if (author.email === user.email) {
            try {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then( async (result) => {
                    if (result.isConfirmed) {
                        const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/queries/${id}`)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remaining = myPostedQueries.filter(query => query._id !== id ) ;
                            setMyPostedQueries(remaining) ;
                        }

                    }
                });
            }
            catch (err) {
                console.log(err.message);
            }
        }
        else {
            Swal.fire({
                icon: "error",
                title: "You Can not Delete Others Posts",
                text: "",
            });
        }
    }

    return (
        <div className="card card-compact bg-base-100 justify-items-center max-w-80 md:max-w-96 shadow-xl">
            <figure>
                <img className="w-full h-[220px] md:h-[300px]"
                    src={productImage} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Recommended By : {recommendCount} </p>
                <div className= "flex justify-between">
                    <Link to={`/details/${_id}`} className="btn bg-gray-700 text-white"><span className="text-sm font-bold">{location.pathname === "/queries" ? <p>Recommend</p> : <p>Details</p>}</span> <MdMore /></Link>
                    <button className={location.pathname === "/queries" ? "hidden": "btn" }><Link className="btn bg-gray-700 text-white"><span className="text-sm font-bold">Edit</span><FaEdit /></Link></button>
                    <button onClick={() => handleDelete(_id)} className={ location.pathname === "/queries" ? "hidden" : "btn bg-gray-700 text-white"}><span className="text-sm font-bold">Delete</span><MdDelete /></button>
                </div>
            </div>
        </div>
    );
};

GridLayout.propTypes = {
    query: PropTypes.object.isRequired,
    myPostedQueries : PropTypes.array , 
    setMyPostedQueries : PropTypes.func

}

export default GridLayout;