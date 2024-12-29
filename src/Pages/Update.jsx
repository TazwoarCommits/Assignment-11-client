import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const query = useLoaderData() ; 
    const { title , product , brand , reason , productImage , _id} = query ;
     
    const handleUpdate = async (e) => {
        e.preventDefault() ;
        const form = new FormData(e.target) ;
        const title = form.get("title") ;
        const product = form.get("product") ;
        const brand = form.get("brand") ; 
        const productImage = form.get("photo") ;

        const updatedQuery = {title , product , brand , productImage , reason} ;
        
        try{
            const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/queries/${_id}` , updatedQuery);
            if(data.modifiedCount === 1 ){
                Swal.fire({
                    title:"Successfully Updated!",
                    icon: "success",
                    draggable: true
                  });
            }
        }
        catch(err){
            console.log(err.message);
        }
    }

    return (
        <div className="mt-5 flex flex-col justify-center items-center w-10/12 mx-auto my-12 md:my-20">
        <h2 className="text-3xl text-cyan-800 font-semibold text-center mb-12">Post A New Query</h2>
        <form onSubmit={handleUpdate} className="w-11/12">
            <div className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                <label className="mb:4 input border-cyan-800/80  flex items-center gap-2 w-full">
                    <input type="text" className="grow" defaultValue={title} placeholder="Query Title" name="title" />
                </label>
            </div>
            <div className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                <label className="mb:4 input border-cyan-800/80  flex items-center gap-2 md:w-1/2">
                    <input type="text" className="grow" defaultValue={product} placeholder="Product Name" name="product" />
                </label>
                <label className=" input border-cyan-800/80  flex items-center gap-2 md:w-1/2">
                    <input type="text" className="grow" defaultValue={brand} placeholder="Brand Name" name="brand" />
                </label>
            </div>
            <div className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                <label className="input border-cyan-800/80  flex items-center gap-2 w-full">
                    <input type="text" className="grow" defaultValue={productImage} placeholder="Product Image URL" name="photo" />
                </label>
            </div>
            <div className="mb-6">
                <textarea className="textarea resize-none w-full h-32 border-cyan-800/80" placeholder="Any Reason For Avoiding" defaultValue={reason} name="reason"></textarea>
            </div>
            <button className="btn btn-block bg-cyan-800/80 hover:bg-cyan-800 text-base-100">Update</button>
        </form>
    </div>
    );
};

export default Update;