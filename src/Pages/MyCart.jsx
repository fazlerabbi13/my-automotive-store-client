import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCart from '../components/AllCart';

const MyCart = () => {
    const cartsData = useLoaderData();
    console.log(cartsData);
    return (
        <div>
            <h1 className='text-5xl text-center mt-10 mb-10'>Your All Cart Products Here</h1>
        
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-10 ml-32'>
                {
                    cartsData.map(cartData => <AllCart cartData={cartData}></AllCart>)
                }
            </div>
        
        </div>
    );
};

export default MyCart;