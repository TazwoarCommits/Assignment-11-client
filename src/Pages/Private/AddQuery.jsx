import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const AddQuery = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate() ;

    const handleQuery = async e => {
        e.preventDefault()

        const form = new FormData(e.target) ;

        const title = form.get("title") ;
        const product = form.get("product") ;
        const brand = form.get("brand") ; 
        const productImage = form.get("photo") ;
        const avoid = form.get("reason") ;

        const query = {title , product , brand , productImage , avoid ,
          author : {
             email : user?.email,
             name : user?.displayName,
             authorImage : user?.photoURL
          },
          recommendCount : 0
        }

     try{
        await axios.post(`${import.meta.env.VITE_API_URL}/queries` , query);
        Swal.fire({
            icon: "success",
            title: "Succeed",
            text: "Query Posted",
          });
        navigate("/my-Queries") ;
     }

     catch(err){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${err.message}`,
          });
        console.log(err) ;
     }

    }

    return (
        <div className="mt-5 flex flex-col justify-center items-center w-10/12 mx-auto ">
            <h2 className="text-3xl text-cyan-800 font-semibold text-center mb-12">Post A New Query</h2>
            <form onSubmit={handleQuery} className="w-11/12">
                <div className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                    <label className="mb:4 input border-cyan-800/80  flex items-center gap-2 w-full">
                        <input type="text" className="grow" placeholder="Query Title" name="title" />
                    </label>
                </div>
                <div className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                    <label className="mb:4 input border-cyan-800/80  flex items-center gap-2 md:w-1/2">
                        <input type="text" className="grow" placeholder="Product Name" name="product" />
                    </label>
                    <label className=" input border-cyan-800/80  flex items-center gap-2 md:w-1/2">
                        <input type="text" className="grow" placeholder="Brand Name" name="brand" />
                    </label>
                </div>
                <div className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                    <label className="input border-cyan-800/80  flex items-center gap-2 w-full">
                        <input type="text" className="grow" placeholder="Product Image URL" name="photo" />
                    </label>
                </div>
                <div className="mb-6">
                    <textarea className="textarea resize-none w-full h-32 border-cyan-800/80" placeholder="Any Reason For Avoiding" name="reason"></textarea>
                </div>
                <button className="btn btn-block bg-cyan-800/80 hover:bg-cyan-800 text-base-100">Post</button>
            </form>
        </div>
    );
};

export default AddQuery;