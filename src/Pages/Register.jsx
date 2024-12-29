import Lottie from "lottie-react";
import register from "../assets/Lottie/Register.json"
import toast from "react-hot-toast";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import GoogleLogin from "../Components/Social Login/GoogleLogin";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, setProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get("email");
        const username = form.get("name");
        const photoURL = form.get("photo")
        const password = form.get("password");
        console.log(email, password, photoURL, username);

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (passwordRegex.test(password)) {
            createUser(email, password)
                .then(res => {
                    if (res?.user) {
                        toast.success("Successfully Registered");
                    }

                    setProfile({ displayName: username, photoURL: photoURL })
                    navigate("/");

                })
                .catch(err => toast.error(`${err}`))



        }

        else {
            toast.error("Password must be at least 6 characters, including an uppercase and lowercase character")
        }


    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left max-w-96">
                    <Lottie animationData={register}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="mt-4 ml-4 md:ml-8 text-3xl md:text-5xl font-bold">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="text" placeholder="Username" name="name" className="input input-bordered" required />
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div>
                        <GoogleLogin></GoogleLogin>
                    </div>
                    <p className="m-4">Already have an account ? <Link to="/login"><span className="hover:underline text-blue-800">Login Now</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;