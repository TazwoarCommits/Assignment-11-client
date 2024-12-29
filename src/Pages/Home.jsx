import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import GridLayout from "../Components/LayOut/GridLayout";

const Home = () => {
    const allQueries = useLoaderData();
    const slicedQueries = allQueries.slice(0, 6);

    return (
        <div>
            <Banner></Banner>
            <div className="mt-12 md:mt-20 w-11/12 mx-auto">
                <h2 className="my-8 md:16 text-center text-2xl md:text-4xl">Recently Asked Query</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">

                    {
                        slicedQueries.map((query, idx) => <GridLayout key={idx} query={query}></GridLayout>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;