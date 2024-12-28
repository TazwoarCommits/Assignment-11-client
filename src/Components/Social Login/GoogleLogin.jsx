import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    
    const {googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider ;
        googleLogin(provider) ;
        navigate("/") ;
    }

    return (
        <button className="btn bg-teal-400 hover:bg-teal-500  flex justify-center items-center gap-2 text-xl lg:text-2xl font-bold w-full px-3 py-2 rounded-lg"
        onClick={handleGoogleLogin}>
        <span className="text-blue-600"><FaGoogle></FaGoogle>
        </span>Login with Google</button>
    );
};

export default GoogleLogin;