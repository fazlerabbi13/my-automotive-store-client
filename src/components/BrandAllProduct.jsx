import React from 'react';

const BrandAllProduct = ({ speacificBrandProducts }) => {
    const { image, name, brand, product, price, short } = speacificBrandProducts;
    return (
        <div className="card w-96 bg-base-100 shadow-xl border">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{brand}</h2>
                <p>{name}</p>
                <p>{price}</p>
                <p>{short}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Update</button>
                    <button className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default BrandAllProduct;