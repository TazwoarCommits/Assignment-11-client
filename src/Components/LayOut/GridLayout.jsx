import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdMore } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { format } from "date-fns";
import 'aos/dist/aos.css';  // Import the AOS CSS styles
import AOS from 'aos';      // Import AOS JavaScript


const GridLayout = ({ query, myPostedQueries, setMyPostedQueries }) => {
    const { title, recommendCount, productImage, _id, author, createdAt } = query;
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const formattedDate = format(new Date(createdAt), "yyyy-MM-dd hh:mm a");

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
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/queries/${id}`)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remaining = myPostedQueries.filter(query => query._id !== id);
                            setMyPostedQueries(remaining);
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

    useEffect(() => {
        AOS.init({ duration: 2000 }); // You can customize duration, delay, etc.
      }, []);

    return (
        <div  data-aos="fade-up" className= "card card-compact mb:16 md:mb-24 bg-base-100 justify-items-center w-72 md:w-full shadow-xl rounded-none md:rounded-xl">
            <figure>
                <img className="w-11/12 h-[220px] md:h-[300px]"
                    src={productImage} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{formattedDate}</p>
                <p>Recommended By : {recommendCount} </p>
                <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-start gap-4">
                    <Link to={`/details/${_id}`} className="w-28 text-center flex items-center justify-center gap-1 py-2  rounded-md bg-cyan-900/90 hover:bg-cyan-900 text-white"><span className="text-sm font-bold">{location.pathname === "/my-Queries" ? <p className="text-sm">Details</p> : <p className="text-xs">Recommend</p>}</span> <MdMore /></Link>
                    <button className={location.pathname === "/my-Queries" ? "" : "hidden"}><Link to={`/update/${_id}`} className="w-24 text-center flex justify-center items-center gap-1 p-2 rounded-md bg-gray-700 text-white text-sm"><span className="text-sm font-bold">Edit</span><FaEdit /></Link></button>
                    <button onClick={() => handleDelete(_id)} className={location.pathname === "/my-Queries" ? "w-24 flex justify-center items-center gap-1 p-2 rounded-md bg-gray-700 text-white text-sm" : "hidden"}><span className="text-sm font-bold">Delete</span><MdDelete /></button>
                </div>
            </div>
        </div>
    );
};

GridLayout.propTypes = {
    query: PropTypes.object.isRequired,
    myPostedQueries: PropTypes.array,
    setMyPostedQueries: PropTypes.func

}

export default GridLayout;