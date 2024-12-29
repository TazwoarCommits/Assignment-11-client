import PropTypes from "prop-types";

const RecommendedForMeTable = ({rec , idx}) => {
    const {queryTitle , recommendedProduct ,  recommendersName } = rec ;
    return (
        <tr>
            <th>{idx + 1}</th>
            <td>{recommendedProduct}</td>
            <td>{recommendersName}</td>
            <td>{queryTitle}</td>
        </tr>
    );
};
RecommendedForMeTable.propTypes = {
    rec : PropTypes.object ,
    idx : PropTypes.number , 
}

export default RecommendedForMeTable;