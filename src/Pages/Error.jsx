// import error from "../assets/error.jpg"
import Lottie from "lottie-react";
import error from "../assets/Lottie/Error.json"

const Error = () => {
    return (
        <div>
            <div className="my-8 md:my-20 flex justify-center items-center">
                <div className="flex flex-col items-center">
                    {/* <img src={error} alt="" /> */}
                    <h3 className="text-2xl font-semibold">Oops!!! Something Went Wrong</h3>
                    <div>
                        <Lottie animationData={error}></Lottie>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Error;