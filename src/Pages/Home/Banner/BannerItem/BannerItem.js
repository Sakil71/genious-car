import React from 'react';

const BannerItem = ({slide}) => {
    const {image, prev, next, id} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='banner-image'>
                <img src={image} alt='' className="w-full" />
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 right-10 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-4">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>

            <div className="absolute flex transform -translate-y-1/2 left-10 top-1/4 text-white font-bold text-5xl ">
                <h1>
                    Affordable <br />
                    Price For Car<br />
                    Servicing
                </h1>
            </div>

            <div className="absolute flex transform -translate-y-1/2 left-10 top-2/4 text-white w-2/5">
                <p>There are many variations of passages of available. But the majority have suffered attraction in some form.</p>
            </div>

            <div className="absolute flex transform -translate-y-1/2 left-10 top-3/4">
                <button className="btn btn-secondary mr-4">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>

        </div>
    );
};

export default BannerItem;