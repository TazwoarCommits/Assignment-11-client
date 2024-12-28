import error from "../assets/error.jpg"
const Error = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <img src={error} alt="" />
                    <h3 className="text-2xl font-semibold">Oops!!! Something Went Wrong</h3>
                </div>
            </div>
        </div>
    );
};

export default Error;