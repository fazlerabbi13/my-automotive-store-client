import { useLoaderData } from "react-router-dom";

const BrandProducts = () => {
    const brandsProduct = useLoaderData()
    console.log(brandsProduct);
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default BrandProducts;
