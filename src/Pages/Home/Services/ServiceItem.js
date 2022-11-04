import React from 'react';

const ServiceItem = ({service}) => {
    const {img, title, price} = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='h-40 w-full' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-start text-orange-600 font-bold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;