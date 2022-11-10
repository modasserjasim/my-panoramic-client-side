import React from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {
    useTitle('Add A New Service');
    const handleAddService = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const price = form.price.value;
        const description = form.description.value;

        const service = {
            title: title,
            image: image,
            price: price,
            description: description
        }


        // send the data using POST Method
        fetch('https://my-panorama.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.status) {
                    form.reset();
                    toast.success(data.message);
                } else {
                    toast.error(data.error)
                }
            })
            .catch(error => toast.error(error))

    }

    return (
        <div className="max-w-4xl p-5 md:p-10 mx-auto bg-white rounded-md shadow-md  md:my-20 my-8">
            <h2 className="text-4xl  font-semibold text-gray-700 capitalize mb-8">Add a new service</h2>

            <form onSubmit={handleAddService}>
                <div>
                    <div>
                        <label className="text-gray-700 " htmlFor="username">Service Name</label>
                        <input name='title' id="username" type="text" placeholder='Enter Service Name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" required />
                    </div>

                    <div className='md:flex md:gap-6 my-6'>
                        <div className='w-full'>
                            <label className="text-gray-700 " htmlFor="image">Service Image</label>
                            <input name='image' type="text" placeholder='Enter the image URL' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" required />
                        </div>

                        <div className='w-full'>
                            <label className="text-gray-700 " htmlFor="price">Price</label>
                            <input name='price' id="price" type="number" placeholder='Enter service Price' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" required />
                        </div>
                    </div>

                    <div>
                        <label className="text-gray-700 " htmlFor="passwordConfirmation">Description</label>
                        <textarea name='description' id="description" type="textarea" className="form-control block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring h-20" rows="4"
                            placeholder="Add Service Description" required />
                    </div>

                </div>

                <div className="flex justify-end mt-6">
                    <button type='submit' className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">ADD SERVICE</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;