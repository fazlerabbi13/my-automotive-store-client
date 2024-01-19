import React from 'react';
import BannerImg from '../assets/banner.jpg'
const Banner = () => {
    return (
        <>
            <div className='mt-10 mb-10'>
                <img className='w-full h-[500px]' src={BannerImg} alt="" />
            </div>
        </>
    );
};

export default Banner;