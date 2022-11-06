import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { _id, title, img, price } = useLoaderData();
    const {user} = useContext(AuthContext);

    const handleCheckOutrOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'Unregisterd';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                alert('Order Placed Successfully');
                form.reset();
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <h3 className='text-4xl text-blue-700 font-bold text-center'>{title}</h3>
            <h5 className='text-center text-blue-400 font-semibold text-2xl'>Price: ${price}</h5>

            <form onSubmit={handleCheckOutrOrder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-4'>

                    <input name='firstName' type="text" placeholder="First Name" defaultValue={user?.displayName} className="input input-bordered input-primary w-full" required />

                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-primary w-full" />

                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered input-primary w-full" required />

                    <input name='email' type="text" placeholder="Your Email" className="input input-bordered input-primary w-full" readOnly defaultValue={user?.email} />
                </div>

                <textarea name='message' className="textarea textarea-secondary w-full" placeholder="Your Message"></textarea>

                <input className='btn my-4' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default CheckOut;