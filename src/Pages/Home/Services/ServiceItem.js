import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceItem = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='h-40 w-full' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <div className="card-actions justify-between">
                    <p className='text-start text-orange-600 font-bold'>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button><FaAngleRight></FaAngleRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;