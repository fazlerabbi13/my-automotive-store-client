import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Brand from "../components/Brand";

const Home = () => {
    const allBrand = useLoaderData()
    console.log(allBrand)
    return (
        <>
            <div className="mt-10 mb-10">
                <div>
                    <Banner></Banner>
                </div>
            </div>
                <h1 className="text-5xl text-center mt-5 mb-16">Our All Brands Services Here</h1>
                <div className="ml-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                    {
                        allBrand.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                    }
                </div>
        
        </>
    );
};

export default Home;