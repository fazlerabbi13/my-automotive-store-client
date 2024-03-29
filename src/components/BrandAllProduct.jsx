import React from 'react';
import { Link } from 'react-router-dom';

const BrandAllProduct = ({ speacificBrandProducts }) => {
    const { image, name, brand, product,_id, price, short } = speacificBrandProducts;
    console.log(_id);
    return (
        <div className="card w-96 bg-base-100 shadow-xl border">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-3xl">{brand}</h2>
                <p className='text-xl'>{name}</p>
                <p>
                    <span className="text-2xl mr-2">4.5</span>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                </p>
                <p className='text-xl'>{price}</p>
                <p>{short}</p>
                <div className="card-actions">
                    <Link to={`/updateProduct/${_id}`}>
                        <button className="btn btn-primary">Update Prodect</button>
                    </Link>
                    <Link to={`/productDetails/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BrandAllProduct;