import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdMore } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const List = ({ query, idx }) => {
    
    const location = useLocation() ;
    const { title, recommendCount, productImage , _id} = query;

    return (
        <tr>
            <td>{idx + 1}</td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={productImage} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                    </div>
                </div>
            </td>
            <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>{recommendCount}</td>
            <th>
                <Link to={`/details/${_id}`} className="btn"><MdMore/></Link>
                <button className={location.pathname === "/queries" ? "hidden" : "btn"}><Link><FaEdit/></Link></button>
                <button className={location.pathname === "/queries" ? "hidden" : "btn"}><MdDelete /></button>
            </th>
        </tr>
    );
};

List.propTypes = {
    query: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
}

export default List;