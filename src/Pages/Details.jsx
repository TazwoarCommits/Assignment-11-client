import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import Recommendation from "../Components/recommendation";

const Details = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [query, setQuery] = useState({});
    const recommendations = useLoaderData();
    const navigate = useNavigate() ;

    const { title, recommendCount, productImage, product, brand, avoid, author, _id } = query;

    // fetch a specific data for a query

    useEffect(() => {
        fetchAQueries();
        // eslint-disable-next-line react-hooks/exhaustive-deps     
    }, []);

    const fetchAQueries = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/queries/${id}`);
        setQuery(data);
    };

    const handleRecommendation = async e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const recommendationTitle = form.get("title");
        const recommendedProduct = form.get("product");
        const recommendedPhoto = form.get("photo");
        const recommendationReason = form.get("reason");

        const recommendation = {
            recommendationTitle, recommendedProduct, recommendedPhoto, recommendationReason,
            queryID: _id,
            queryTitle: title,
            queryProduct: product,
            queryPhoto: productImage,
            queryAuthorName: author.name,
            queryAuthorEmail: author.email,
            recommendersName: user.displayName,
            recommendersEmail: user.email,
            recommendersPhoto: user.photoURL,

        }

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/recommendation`, recommendation);

            e.target.reset() ; 
            navigate("/my-recommendations") ; 
        } 

        catch (err) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${err.message}`,
            });
            console.log(err);    
        }

    }

    return (
        <div className="flex flex-col md:flex-row justify-between w-11/12 mx-auto md:gap-32">
            <div className="my-12 md:my-36 w-full mx-auto border-2 rounded-3xl bg-cyan-800">
                <div className="mx-4 flex flex-col md:flex-row items-center text-white rounded-3xl gap-4">
                    <div className="my-8">
                        <img className="w-40 h-44 rounded-lg"
                        src={productImage} />
                    </div>
                    <div>
                        <div className="mb-4 flex items-center gap-2">
                            <img className="w-12 rounded-full"
                                src={author?.authorImage ? author?.authorImage : `https://i.ibb.co.com/3z773GB/avatar.png`} alt="" />
                            <p>{author?.name ? author.name : "User"}</p>
                        </div>
                        <div className="">
                            <h3 className="text-2xl">{title}</h3>
                            <ul className="mt-2 list-inside list-disc">
                                <li>Product : {product}</li>
                                <li>Brand : {brand}</li>
                                <li>Recommended By : {recommendCount}</li>
                                <li>Boycott Reason : {avoid ? avoid : 'N/A'}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="my-12 md:w-11/12 mx-auto border-t md:border mg:rounded-3xl">
                <h1 className="my-2 md:my-8 text-base-200 text-lg md:text-2xl font-semibold text-center">Recommendations For this Query : {recommendations.length}</h1>
                <div className="md:mt-4">
                    {
                        recommendations.map((rec, idx) => <Recommendation key={idx} rec={rec}></Recommendation>)
                    }
                </div>
            </div>
            </div>
             <form onSubmit={handleRecommendation} className="w-11/12 mx-auto my-12 md:my-36 md:w-6/12 ">
                    <div className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                        <label className="mb:4 input border-cyan-800/80  flex items-center gap-2 w-full">
                            <input type="text" className="grow" placeholder="Recommendation Title" name="title" />
                        </label>
                    </div>
                    <div  className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                        <label className="input border-cyan-800/80  flex items-center gap-2 w-full">
                            <input type="text" className="grow" placeholder="Recommended Product Name" name="product" />
                        </label>
                    </div>
                    <div  className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                        <label className="input border-cyan-800/80  flex items-center gap-2 w-full">
                            <input type="text" className="grow" placeholder="Product Image URL" name="photo" />
                        </label>
                    </div>
                    <div className="mb-6">
                        <textarea className="textarea resize-none w-full h-32 border-cyan-800/80" placeholder="Reason For Recommendation" name="reason"></textarea>
                    </div>
                    <button className="btn btn-block bg-cyan-800/80 hover:bg-cyan-800 text-base-100">Recommend</button>
                </form>
        </div>
    );
};

export default Details;