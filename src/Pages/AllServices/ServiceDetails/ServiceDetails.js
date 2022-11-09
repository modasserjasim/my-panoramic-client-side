import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { RiPriceTag3Line } from "react-icons/ri";
import Reviews from '../../AllReviews/Reviews/Reviews';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {
    const { service } = useLoaderData();
    const { title, image, price, description } = service;
    // console.log(service);

    return (
        <div>

            <div className="w-full">
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img src={image} className="object-cover w-full h-[80vh] cursor-pointer" alt={title} />
                    </PhotoView>
                </PhotoProvider>
                <div className="w-full md:-mt-52 -mt-24 px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-md bg-white/60 dark:bg-gray-800/60">
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