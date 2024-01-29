
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import Swal from "sweetalert2";

const MyCart = () => {
    const cartsData = useLoaderData();
    
    const [carts, setCarts] = useState(cartsData);
    const handleDelete = (id) => {
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

                fetch(`https://my-automotive-store-server2.vercel.app/carts/${id}`, {
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

                            const remainingCarts = carts.filter(cart => cart._id !== id)
                            setCarts(remainingCarts);

                        }

                    })

            }
        });
    }
    return (
        <div>
            <h1 className='text-5xl text-center mt-10 mb-10'>Your All Cart Products Here</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-10 ml-32'>
                {
                    carts.map(product => <div key={product._id} className="border card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.brand}</h2>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <p>{product.short}</p>
                            <div>
                                <span className="text-2xl mr-2">4.5</span>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                </div>
                            </div>
                            <div className="card-actions">
                                <button onClick={() => handleDelete(product._id)} className="btn btn-primary">Delete From Cart</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default MyCart;