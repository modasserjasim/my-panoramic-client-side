import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { RiPriceTag3Line } from "react-icons/ri";
import Reviews from '../../AllReviews/Reviews/Reviews';

const ServiceDetails = () => {
    const { service } = useLoaderData();
    const { title, image, price, description } = service;
    console.log(service);
    return (
        <div>
            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-[100vh] md:h-[80vh] object-cover w-full" style={{ backgroundImage: `url(${image})` }}>
                <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-md bg-white/60 dark:bg-gray-800/60">
                    <div className='max-w-5xl mx-auto'>
                        <h2 className="text-2xl md:text-5xl mb-3 font-semibold text-gray-800 capitalize dark:text-white">{title}</h2>
                        <h3 className='flex items-center gap-1 text-xl font-semibold'><RiPriceTag3Line className='font-bold text-2xl' /> ${price}</h3>
                        <p className="mt-2 text-lg text-justify tracking-wider text-black dark:text-blue-400 ">{description}</p>
                    </div>
                </div>
            </div>
            <Reviews service={service}></Reviews>
        </div>
    );
};

export default ServiceDetails;