import { useState } from "react";
import Swal from "sweetalert2";

const AllCart = ({ cartData,carts,setCarts }) => {

    const { image, name, _id, brand, product, price, short } = cartData;
    // const [carts, setCarts] = useState();
    
    const handleDelete = (_id) => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/carts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your cart has been deleted.",
                                icon: "success"
                            });

                            const remainingCarts = carts.filter(cart => cart._id !== _id)
                            setCarts(remainingCarts);

                        }

                    })

            }
        });
    }

    return (
        <div className="border card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img  src={image} alt="Shoes" className="rounded-xl" />
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
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                </p>
                <div className="card-actions">
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete From Cart</button>
                </div>
            </div>
        </div>
    );
};

export default AllCart;