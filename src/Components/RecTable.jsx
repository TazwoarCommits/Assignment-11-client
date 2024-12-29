import axios from "axios";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { format } from "date-fns";

const RecTable = ({ rec, myRec ,setMyRec }) => {
    // {
    //     "_id": "676e8008992ff0ff8365e933",
    //     "recommendationTitle": "efqwewedfef",
    //     "recommendedProduct": "efffefefeaDQ",
    //     "recommendedPhoto": "FFWE",
    //     "recommendationReason": "FEWFWEFWEFEWFWFWFWFWFWE",
    //     "queryID": "676c530cdc953e7fc7a6a121",
    //     "queryTitle": "I need suggestions about a phone , i am thinking to buy",
    //     "queryProduct": "Redmi",
    //     "queryAuthorName": "ddeded",
    //     "queryAuthorEmail": "omuk@tomuk.com",
    //     "recommendersEmail": "omuk@tomuk.com",
    //     "createdAt": "2024-12-27T10:23:04.278Z"
    //   }

    const { queryTitle, queryAuthorName, createdAt, recommendedProduct, recommendationReason, queryPhoto, _id, } = rec;
     const formattedDate = format(new Date(createdAt), "yyyy-MM-dd hh:mm a");

    const handleDelete = (id) => {

        try {
            Swal.fire({
                title: "Are you sure?",
                text: "It won't be deleted from others feed !",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/recommendation/${id}`)
                    if (data.deletedCount) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });

                        const remaining = myRec.filter(rec => rec._id !== id) ; 
                        setMyRec(remaining) ; 
                    }
                }
            });
        }
        catch(err){
            console.log(err.message);
        }       
    }

    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={queryPhoto ? queryPhoto : "https://img.daisyui.com/images/profile/demo/2@94.webp"} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{queryTitle}</div>
                        <div className="text-sm opacity-50">Posted By : {queryAuthorName}</div>
                    </div>
                </div>
            </td>
            <td>
                {recommendedProduct}
                <br />
                <span className="badge badge-ghost badge-sm">{recommendationReason.slice(0,25)}</span>
            </td>
            <td>{formattedDate}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost text-xl"><MdDelete /></button>
            </th>
        </tr>
    );
};

RecTable.propTypes = {
    rec: PropTypes.object.isRequired,
    setMyRec : PropTypes.func,
    myRec : PropTypes.array ,
}

export default RecTable;