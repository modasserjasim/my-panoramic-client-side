import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {
    const handleAddReview = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const price = form.price.value;
        const description = form.description.value;

        const review = {
            title: title,
            image: image,
            price: price,
            description: description
        }
        console.log(review);

        // send the data using POST Method
        fetch('http://localhost:4000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
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
            .catch(error => console.log(error))

    }

    return (
        <div className="p-4 mx-auto">
            <h2 className="text-2xl mb-5 font-semibold text-gray-700 capitalize dark:text-white">Leave A Review</h2>

            <form onSubmit={handleAddReview}>
                <div className='space-y-5'>
                    <div className='md:flex md:gap-6'>
                        <div className='w-full'>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Your Name</label>
                            <input name='name' id="username" type="text" placeholder='Enter Service Name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                        </div>

                        <div className='w-full md:mt-0 mt-5'>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="image">Your Profile Photo</label>
                            <input name='profilePhoto' type="text" placeholder='Enter the Profile URL' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                        </div>
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="review">Review</label>
                        <textarea name='review' id="review" type="textarea" className="form-control block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring h-20" rows="4"
                            placeholder="Write your review here" required />
                    </div>

                </div>

                <div className="flex justify-end mt-6">
                    <button type='submit' className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">LEAVE A REVIEW</button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;