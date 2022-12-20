import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Spinner from '../../Others/Spinner/Spinner';
import Service from '../Service/Service';

const Services = () => {
    const { loading } = useContext(AuthContext);
    const { services } = useLoaderData();
    useTitle('Services');

    return (
        <div className="px-6 bg-gray-50 py-16  text-center">
            <div className="px-6 max-w-7xl mx-auto">
                <div className="max-w-xl mx-auto">
                    <h1 className="text-2xl font-bold text-gray-800 lg:text-4xl">All Services</h1>
                    <p className="mt-6 text-gray-500 ">I love capturing memories. That look, that smile, those tears, that brief moment frozen in time. Real memories, real emotions.</p>
                </div>
                {
                    services.length === 0 ? <Spinner /> : <div
                        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12'>
                        {
                            services.map(service => <Service key={service._id} service={service}></Service>)
                        }
                    </div>
                }
            </div>

        </div>
    );
};

export default Services;