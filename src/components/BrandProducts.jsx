import { useLoaderData } from "react-router-dom";
import BrandAllProduct from "./BrandAllProduct";
import Advertiesment from "./Advertiesment";


const BrandProducts = () => {
    const allBrand = useLoaderData()
    console.log(allBrand);
    return (
        <div>
            <h1 className="text-5xl text-center mt-5 mb-5">Our Upcaming Latest Product</h1>
            <div>
               <Advertiesment></Advertiesment>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-4 mt-10 ml-6 mb-10">
                {
                    allBrand.map(speacificBrandProducts => <BrandAllProduct speacificBrandProducts={speacificBrandProducts}></BrandAllProduct>)
                }
            </div>
        </div>
    );
};

export default BrandProducts;
