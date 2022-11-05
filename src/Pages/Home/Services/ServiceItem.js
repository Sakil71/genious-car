import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const ServiceItem = ({ service }) => {
    const { img, title, price } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='h-40 w-full' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <div className="card-actions justify-between">
                    <p className='text-start text-orange-600 font-bold'>Price: ${price}</p>
                    <button>
                        <FaAngleRight></FaAngleRight>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;