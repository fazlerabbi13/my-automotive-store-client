
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {

    const specificCar = useLoaderData()
    const { id } = useParams()
    const findSpecicOne = specificCar.find(oneProduct => oneProduct._id === id)
    console.log(findSpecicOne)
    const { image, name, brand, product, _id, price, short } = findSpecicOne;
   

    
    const handleAddToCart = () => {

        const newAddProduct ={brand,image,name,price,short,product}

        fetch(`https://my-automotive-store-server2-6ikrinefu.vercel.app/carts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAddProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'added product on your cart successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })


    }

    return (
        <div className="mx-auto mt-10 mb-10 border card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{brand}</h2>
                <p>{name}</p>
                <p>{short}</p>
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
                <div className="card-actions">
                   
                        <button onClick={handleAddToCart} className="btn btn-primary">Add To Cart</button>
                   
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;