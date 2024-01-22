import { useLoaderData } from "react-router-dom";
import BrandAllProduct from "./BrandAllProduct";

const BrandProducts = () => {
    const allBrand = useLoaderData()
    console.log(allBrand);
    return (
        <div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
            {
                allBrand.map(speacificBrandProducts => <BrandAllProduct speacificBrandProducts ={speacificBrandProducts}></BrandAllProduct>)
            }
           </div>
        </div>
    );
};

export default BrandProducts;
