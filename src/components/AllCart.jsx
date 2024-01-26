
const AllCart = ({ cartData }) => {
    const { image, name, id, brand, product, price, short } = cartData
    return (
        <div className="border card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{brand}</h2>
                <p>{name}</p>
                <p>{price}</p>
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
                    <button className="btn btn-primary">Delete From Cart</button>
                </div>
            </div>
        </div>
    );
};

export default AllCart;