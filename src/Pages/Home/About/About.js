import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-5">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2 '>
                    <img alt='' src={person} className="max-w-sm rounded-lg shadow-2xl w-4/5 h-full"/>

                    <img src={parts} className='absolute right-5 top-1/2 w-3/5 border-4' alt="" />

                </div>

                <div className='w-1/2 '>
                    <p className='text-orange-600 font-bold'>About us</p>
                    <h1 className="text-5xl font-bold">
                        We are qualified <br />
                        & of experience <br />
                        in this field
                    </h1>
                    <p className="py-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                    <p className="py-2">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                    <button className="btn btn-primary">Get More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;