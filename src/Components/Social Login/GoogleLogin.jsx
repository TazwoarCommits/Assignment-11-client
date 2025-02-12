import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const GoogleLogin = () => {
    
    const {googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider ;
        googleLogin(provider)
        .then(res => {
            if(res?.user){
                toast.success("Successfully Logged in") ;
                navigate("/")
            } 
        })

        .catch(err => {
            toast.error(`${err.message}`) ;
        })
    }

    return (
        <button className="btn bg-cyan-800 hover:bg-cyan-900/80 dark:bg-cyan-600 text-base-200 flex justify-center items-center gap-2 text-xl lg:text-2xl font-bold w-full px-3 py-2 rounded-lg"
        onClick={handleGoogleLogin}>
        <span className="text-blue-600"><FaGoogle></FaGoogle>
        </span>Login with Google</button>
    );
};

export default GoogleLogin;