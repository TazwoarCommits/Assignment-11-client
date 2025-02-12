import Lottie from "lottie-react";
import AnimateLogin from "../assets/Lottie/Login.json"
import { useContext, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import AuthContext from "../Context/AuthContext/AuthContext";
import GoogleLogin from "../Components/Social Login/GoogleLogin";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate() ;

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        loginUser(email, password)
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
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left max-w-96">
                    <Lottie animationData={AnimateLogin}></Lottie>
                    <div className="text-center">
                        <h3 className="text-xl text-cyan-800  font-semibold">Login As an existing user</h3>
                        <p><span className="font-semibold">Email  : </span> tazwoarlives@gmail.com</p>
                        <p><span className="font-semibold">Pass : </span> Aa123456</p>
                    </div> 
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="ml-4 md:ml-8 mt-4 text-3xl md:text-5xl font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
                            <div onClick={() => setShowPassword(!showPassword)}
                                className="btn-xs text-lg text-opacity-30 absolute right-7 top-[50px]">
                                {showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div>
                        <GoogleLogin></GoogleLogin>
                    </div>
                    <p className="m-4">Don&apos;t have an account ? <Link to="/register"><span className="hover:underline text-blue-800">Register Now</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;