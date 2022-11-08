import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const { services } = useLoaderData();
    console.log(services);

    return (
        <div className="container px-6 py-16 mx-auto text-center">
            <div className="max-w-lg mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">Memories That Will Last A Lifetime</h1>
                <p className="mt-6 text-gray-500 dark:text-gray-300">I love capturing memories. That look, that smile, those tears, that brief moment frozen in time. Real memories, real emotions.</p>
            </div>
            <div className=''>

            </div>

        </div>
    );
};

export default Services;