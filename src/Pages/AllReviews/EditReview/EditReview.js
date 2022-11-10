import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../../hooks/useTitle';

const EditReview = () => {
    const { review } = useLoaderData();
    useTitle('Edit Reviews');
    const navigate = useNavigate();
    const handleEditReview = e => {
        e.preventDefault();
        const form = e.target;

        const updatedReview = {
            review: form.review.value
        }

        fetch(`http://localhost:4000/review/${review._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('panorama-token')}`
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    toast.success(`Successfully updated your review for ${review.serviceName} service`);
                    navigate('/my-reviews');
                } else {
                    toast.error(data.error);
                }
            })
            .catch(err => toast.error(err.message))
    }
    return (
        <div className="p-4 md:p-10 mx-auto my-20 rounded-md max-w-3xl bg-gray-100">
            <h2 className="text-3xl mb-5 font-semibold text-gray-700 ">Edit Your Review</h2>
            <h3 className='text-xl'>Service Name: <span className='font-bold text-green-600'> {review.serviceName}</span></h3>
            <form onSubmit={handleEditReview}>
                <div className='mt-8'>

                    <div>
                        <label className="text-gray-700 " htmlFor="review">Update your review</label>
                        <textarea name='review' defaultValue={review.review} type="textarea" className="form-control block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring h-32" rows="5"
                            placeholder="Write your review here" required />
                    </div>

                </div>

                <div className="flex justify-end mt-6">
                    <button type='submit' className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">UPDATE REVIEW NOW</button>
                </div>
            </form>
        </div>
    );
};

export default EditReview;