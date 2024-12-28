import PropTypes from "prop-types";

const RecTable = ({rec}) => {
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
    const {queryTitle , queryAuthorName , createdAt , recommendedProduct , recommendationReason , queryPhoto} = rec ;
    return (
        <tr>
            <th>
               
            </th>
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
                <span className="badge badge-ghost badge-sm">{recommendationReason.slice(0,9)}</span>
            </td>
            <td>{createdAt}</td>
            <th>
                <button className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

RecTable.propTypes = {
    rec : PropTypes.object.isRequired ,
}

export default RecTable;