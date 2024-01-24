import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {

    const productDetails = useLoaderData()
    const { brand, image, short } = productDetails;

    return (
        <div className="mx-auto mt-10 mb-10 border card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{brand}</h2>
                <p>{short}</p>
                <p>
                    <span className="text-2xl mr-2">4.5</span>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"checked />
                    </div>
                </p>
                <div className="card-actions">
                    <button className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;