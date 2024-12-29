import PropTypes from "prop-types";

const Recommendation = ({ rec }) => {
    const { recommendersName, recommendationTitle, recommendedProduct, recommendedPhoto, recommendationReason, recommendersPhoto, createdAt } = rec;
    return (
        <div className="w-11/12 p-2 mx-auto my-3 border border-gray-800 rounded-2xl bg-base-100">
            <div className="flex gap-2">
                <img className="w-10 rounded-full"
                    src={recommendersPhoto} />
                <div>
                    <p>{recommendersName}</p>
                    <p>{createdAt}</p>
                </div>
            </div>
            <div className="flex mt-3 mb-1 items-center gap-4">
                <div>
                    <p className="font-semibold">{recommendedProduct}</p>
                    <img className="w-24 h-20 rounded-lg" src={recommendedPhoto} />
                </div>
                <div className="flex flex-col gap-2 md:gap-4">
                    <p className="font-medium">Title : {recommendationTitle}</p>
                    <p className="font-medium">Reason : {recommendationReason}</p>
                </div>
            </div>
        </div>
    );
};

Recommendation.propTypes = {
    rec: PropTypes.object
}

export default Recommendation;