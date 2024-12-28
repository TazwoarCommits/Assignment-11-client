import PropTypes from "prop-types";

const Recommendation = ({ rec }) => {
    const { recommendersName, recommendationTitle, recommendedProduct, recommendedPhoto, recommendationReason, recommendersPhoto , createdAt} = rec;
    return (
        <div className="w-11/12 p-2 mx-auto my-3 border border-gray-800 rounded-2xl">
            <div className="flex gap-2">
                <img className="w-10 rounded-full"
                    src={recommendersPhoto} />
                <div>
                    <p>{recommendersName}</p>
                     <p>{createdAt}</p>
                </div>
            </div>
            <div className="flex">
                <div>
                    <p>{recommendationTitle}</p>
                    <img className="w-24 h-20" src={recommendedPhoto} />
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

Recommendation.propTypes = {
    rec: PropTypes.object
}

export default Recommendation;