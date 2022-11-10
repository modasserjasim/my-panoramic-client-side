import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({ service }) => {
    const { _id, title, image, price, description } = service;
    return (
        <div className="overflow-hidden bg-white rounded-lg shadow-lg ">
            <div className="px-4 py-2">
                <h1 className="text-2xl font-bold text-gray-800 uppercase ">
                    {title}</h1>
                <p className="mt-1 text-sm text-gray-600 ">
                    {description.length > 100 ? description.slice(0, 100) + '...' : description}
                </p>
            </div>
            <PhotoProvider>
                <PhotoView src={image}>
                    <img className="object-cover w-full h-48 mt-2 cursor-pointer" src={image} alt={title} />
                </PhotoView>
            </PhotoProvider>


            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white">${price}</h1>
                <Link to={`/service/${_id}`} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">View Details</Link>
            </div>
        </div>
    );
};

export default Service;