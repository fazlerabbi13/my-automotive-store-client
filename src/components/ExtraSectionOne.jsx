import React from 'react';
import chooseImg from '../assets/ChoiceUs.png'
const ExtraSectionOne = () => {
    return (
        <div>
            <h1 className='text-5xl text-gray-400 text-center'>Why Choose Us</h1>
            <p className='text-xl text-center mt-4 mb-10'>This is especially valuable
                for individuals who may not
                be well-versed in automotive
                repairs or maintenance.</p>

            
                <img src={chooseImg} alt="" />
        

        </div>
    );
};

export default ExtraSectionOne;